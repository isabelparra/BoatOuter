const express = require('express');
const router = require('express-promise-router')();
// const router = express.Router;
//The line above is uneccessary when using express-promise-router
const passport = require("passport");
const configPassport = require("../../passport");


const {validateBody, schemas } = require('../../helpers/routesHelpers');
const UserController = require('../../controllers/usersController');

router.route('/signup')
    .post(validateBody(schemas.authSchema), UserController.signUp);

router.route('/signin')
    .post(UserController.signIn);

router.route('/accessgranted')
    .get(passport.authenticate("jwt", {session: false}), UserController.accessGranted);

module.exports = router;
