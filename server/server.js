const server = require('express');
const path = require('path');
const cmd = require('node-cmd');



const app = server();
/* SERVO CONTROL */
const angleL = 7.5;
const angleU = 2.5;
// Lock on server restart
cmd.get('python3 servo.py ' + angleL, function(err, data, stderr){
});
var isUnlocked = 0;

app.use(server.static(path.join(__dirname, "../public")));
app.get("/lock-turn", function(req, res) {
    let angle = 0;
    console.log("asked to perform lock procedure");
    if (!isUnlocked) {
        angle = angleU;
        isUnlocked = 1;
    } else {
        angle = angleL
        isUnlocked = 0;
    }
    cmd.get('python3 servo.py ' + angle, function(err, data, stderr){
    });
    res.send("performed procedure");
    //execute lock turn
});

app.get("/lock-state", (req, res) => {
    console.log("lock query");
    // attempt query of lock state synchronous

    // Test value, replace with actual python return 
    res.send(String(isUnlocked));
});



app.listen(8080);



