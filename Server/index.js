const express = require("express");
const app = express();
const cors = require("cors");
const bodParser = require("body-parser");

const PORT = 7777;

app.use(cors());
app.use(bodParser.json());

//routes here

//basic error handler, if no routes are reached
app.use(function(req, res, next){
    let err = new Error("Not Found")
    err.status = 404;
    next(err);
});

app.listen(PORT, function(){
    console.log(`Server is starting on port ${PORT}`)
})