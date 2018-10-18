module.exports = {
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');
    },

    signIn: async (req, res, next) => {
        console.log('UsersController.signIn() called!');
    },

    accessGranted: async (req, res, next) => {
        console.log('UsersController.acessGranted() called!');
    },
};