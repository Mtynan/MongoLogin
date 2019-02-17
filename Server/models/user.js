const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//hooks before the save, before we save this we run this async function
userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) { //if this user has not modified the pw then move on using next()
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10); //hashes the pw
        this.password = hashedPassword; //sets the pw to the hashed pw before we save in db
        return next(); //used to move on
    } catch (err) {
        return next(err); //catches error for error handler
    }
});

//every entry we create has this method //compares password in db with the one entered 
userSchema.methods.comparePassword = async function(candidatePassword, next){
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch; //returns true or false

    } catch(err){
        return next(err)
    }
};



const User = mongoose.model("User", userSchema);

module.exports = User;