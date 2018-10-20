const User = require("../models/user");

module.exports = {
    signUp: async (req, res, next) => {
        // console.log('UserController.signUp() called!');

        const { email, password } = req.value.body;
        //The two lines below are equivalent of the line above.
        // const email = req.value.body.email;
        // const password = req.value.body.password

        //Check if there is a user with the same email.
        const foundUser = await User.findOne({email: email});
        if (foundUser) { 
            return res.status(403).send({error: "This email address is already being used."});
    }


        //If no, then create new user.
        const newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();


        //If yes, then respond with token.
        res.json({ user:"Created"});
    },

    signIn: async (req, res, next) => {
        // console.log('UsersController.signIn() called!');
    },

    accessGranted: async (req, res, next) => {
        // console.log('UsersController.acessGranted() called!');
    },
};