const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async function(req, res, next){
    try {
        let user = await db.User.create(req.body);  //creates a user waiting for the promise to resolve
        let { id, email } = user //destructors the user properties coming in from req.body
        let token = jwt.sign({   //creates a token
            id,
            email
        }, 
        process.env.SECRET_KEY //after the object is signed we pass in the secret key
    );
    return res.status(200).json({  //returns 200 with json response
        id,
        email,
        token
    });
    } catch (err) {
        if(err.code === 11000){
            err.message = "That email is taken";
        }
       return next({
           status: 400,
           message: err.message
       }) 
    }
};