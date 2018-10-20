const User = require("../models/user");

module.exports = {
    signUp: async (req, res, next) => {
        console.log('UserController.signUp() called!');

        const { email, password } = req.value.body;
        //The two lines below are equivalent of the line above.
        // const email = req.value.body.email;
        // const password = req.value.body.password

        const newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();

        res.json({ user:"Created"});
    },

    signIn: async (req, res, next) => {
        console.log('UsersController.signIn() called!');
    },

    accessGranted: async (req, res, next) => {
        console.log('UsersController.acessGranted() called!');
    },
};