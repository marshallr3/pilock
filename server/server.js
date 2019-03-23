const server = require('express');
const path = require('path');


const app = server();

app.use(server.static(path.join(__dirname, "../public")));
app.get("/lock-turn", function(req, res) {
    console.log("asked to perform lock procedure");
    res.send("test rcv");
    //execute lock turn
});

app.get("/lock-state", (req, res) => {
    console.log("lock query");
    // attempt query of lock state synchronous
    res.send("2");
})


app.listen(8080);



