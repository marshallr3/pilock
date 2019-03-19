const server = require('express');
const path = require('path');


const app = server();

app.use(server.static(path.join(__dirname, "../public")));


app.listen(8080);



