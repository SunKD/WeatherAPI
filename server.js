
const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');
// require('./server/config/mongoose')();
const app = express();
app.use(body_parser.json());

// require('./server/config/routes.js')(app);


app.use(express.static(path.join(__dirname, './public/dist/public')));
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, function () {
    console.log("Server is running!");
});