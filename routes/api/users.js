const express = require('express');
// const router = require("express").Router();
const router = require('express-promise-router')();

const {validateBody, schemas } = require('../../helpers/routesHelpers')
const UserController = require('../../controllers/usersController');

router.route('/signup')
    .post(validateBody(schemas.authSchema), UserController.signUp);

router.route('/signin')
    .post(UserController.signIn);
    
router.route('/accessgranted')
    .get(UserController.accessGranted);

module.exports = router;