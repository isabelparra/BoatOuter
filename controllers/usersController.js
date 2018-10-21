const JWT = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../config");

signToken = User => {
    return JWT.sign(
        {
            iss: "BoatOuter",
            sub: User._id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1) //Current time + 1 day ahead.
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
        const foundUser = await User.findOne({ email: email });
        if (foundUser) {
            return res.status(403).send({ error: "This email address is already being used." });
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
        //         iss: "BoatOuter",
        //         sub: newUser._id,
        //         iat: new Date().getTime(),
        //         exp: new Date().setDate(new Date().getDate() + 1) //Current time + 1 day ahead.
        //     },
        //     "boatouterauthentication");

        //If yes, then respond with token.
        res.status(200).json({ token: token });

    },



    /* SIGNIN CONTROLLER */
    signIn: async (req, res, next) => {
        // console.log('UsersController.signIn() called!');
    },


    /* ACCESS GRANTED CONTROLLER */
    accessGranted: async (req, res, next) => {
        // console.log('UsersController.acessGranted() called!');
        console.log("Passport took me here!");
        res.json({ accessGranted: "Authorized." });
    },
};