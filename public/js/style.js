
var isUnlocked = true;
var color;

function onDown() {
    document.getElementById("lock-button").style.borderColor = "black";
    console.log("mouse down");
}

function onUp()  {
    document.getElementById("lock-button").style.borderColor = "white";
    console.log("mouse up");

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
    this.style.borderColor = "black";
    this.style.color = "black";
}

function handleUp() {

    console.log(isUnlocked);
    if (isUnlocked) {
        isUnlocked = false;
        color = "red";
    } else{
        color = "green";
        isUnlocked = true;
    }
    this.style.borderColor = color;
    this.style.color = color;
}

function handleCancel() {
    this.style.borderColor = color;
    this.style.color = color;
}