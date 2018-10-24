const express = require('express');
const router = require('express-promise-router')();
// const router = express.Router;
//The line above is uneccessary when using express-promise-router
const passport = require("passport");
const configPassport = require("../../passport");
const {validateBody, schemas } = require('../../helpers/routesHelpers');
const UserController = require('../../controllers/usersController');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
    .post(validateBody(schemas.authSchema), UserController.signUp);

router.route('/signin')
    .post(validateBody(schemas.authSchema), passportSignIn, UserController.signIn);

router.route('/secret')
    .get(passportJWT, UserController.secret);
    
module.exports = router;
