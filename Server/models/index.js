const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/test7", {
    keepAlive: true,
    useNewUrlParser: true
});

module.exports.User = require("./user");

//connects to db and sets up mongo
//Promise used so we don't use callback pattern, async instead