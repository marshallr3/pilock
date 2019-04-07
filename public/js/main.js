
var isUnlocked = 3;
var baseUrl = `http://${location.host}/`;
this.texts = ["armed", "unarmed", "unavailable"];
this.colors = ["red", "green", "grey", "black"];

function getLockState() {
    fetch(baseUrl+`lock-state`).then(response => response.text())
    .then(body => {isUnlocked = body;
        console.log(isUnlocked);
    });
    
}

function initLockState() {
    let lockingButton = document.getElementById("lock-button");
    this.color = this.colors[isUnlocked];
    console.log(this.color);
    this.text = this.texts[isUnlocked];
    console.log(this.text);
    lockingButton.innerHTML = this.text; 
    lockingButton.style.color = this.color;
    lockingButton.style.borderColor = this.color;
    console.log(lockingButton.color);
    // Unavailable state
    if (isUnlocked > 1) {
        console.log("error state");
        // Add state control for this
    } else {
        listenForInput();
    }
}


getLockState();

function setup() {
    initLockState();
}

function listenForInput() {
    let lockingButton = document.getElementById("lock-button");
    console.log("calling listen");
    lockingButton.addEventListener("touchstart", handleDown, false);
    lockingButton.addEventListener("mousedown", handleDown, false);
    lockingButton.addEventListener("mouseup", handleUp, false);
    lockingButton.addEventListener("touchend", handleUp, false);
    lockingButton.addEventListener("touchcancel", handleCancel, false);
    lockingButton.addEventListener("mouseleave", handleCancel, false);
}

function handleDown() {
    this.style.borderColor = colors[3];
    this.style.color = colors[3];
}

function handleUp() {
    if (isUnlocked == true) {
        isUnlocked = 0;
    } else {
        isUnlocked = 1;
    }
    this.color = colors[isUnlocked];
    this.text = texts[isUnlocked];
    fetch(baseUrl+`lock-turn`).then(response => response.text())
        .then(body => console.log(body))
        .catch(err => console.log(err));
    this.style.borderColor = this.color;
    this.style.color = this.color;
    this.innerHTML = this.text;
}

function handleCancel() {
    this.style.borderColor = this.color;
    this.style.color = this.color;
}