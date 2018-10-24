const JWT = require("jsonwebtoken");
const User = require("../models/user");
const {JWT_SECRET} = require("../config");

signToken = user => {
    return JWT.sign(
        {
        iss: "BoatOuter",
        sub: user._id,
        iat:new Date().getTime(),
        exp: new Date().setDate( new Date().getDate() + 1) //Current time + 1 day ahead.
        }, 
        JWT_SECRET);
}

module.exports = {

    /* SIGNUP CONTROLLER */
    signUp: async (req, res, next) => {
        // console.log('UserController.signUp() called!');

        const { email, password } = req.value.body;
        //The two lines below are equivalent of the line above.
        // const email = req.value.body.email;
        // const password = req.value.body.password

        //Check if there is a user with the same email.
        const foundUser = await User.findOne({email});
        if (foundUser) { 
            return res.status(403).send({error: "This email address is already being used."});
    }


        //If no, then create new user.
        const newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();

        // Generate the token
        const token = signToken(newUser);

        // const token = JWT.sign(
        //     {
        //     iss: "BoatOuter",
        //     sub: newUser._id,
        //     iat:new Date().getTime(),
        //     exp: new Date().setDate( new Date().getDate() + 1) //Current time + 1 day ahead.
        //     }, 
        //     "boatouterauthentication");

              //Respond with token.
             res.status(200).json({token: token})
    },



     /* SIGNIN CONTROLLER */
     signIn: async (req, res, next) => {
         console.log(req.body);
         console.log('signin')
        // Generate token
        const token = signToken(req.user);
        res.status(200).json({ token});
      },


     /* SECRET CONTROLLER */
    secret: async (req, res, next) => {
        // console.log('UserController.secret() called!');
        console.log("Passport took me here!");
        res.json({secret: "Shhh It's secret."});
    },
}