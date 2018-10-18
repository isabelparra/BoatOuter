const express = require('express');
const router = require('express-promise-router')();

const UserController = require('../../controllers/usersController');

router.route('/signup')
    .post(UserController.signUp);

router.route('/signin')
    .post(UserController.signIn);
    
router.route('/acessgranted')
    .post(UserController.accessGranted);

module.exports = router;