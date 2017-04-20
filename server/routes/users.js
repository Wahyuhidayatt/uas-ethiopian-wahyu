'use strict'

var express = require('express');
var router = express.Router();
// var userController = require('../controllers/userController');
var Controller = require('../controllers/login_registerController');
// var DataUsers = require('../helpers/helper')


router.post('/register',Controller.register);
router.post('/login',Controller.login);
// router.post('/decode',DataUsers.decode);

// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getOne)
// router.put('/:id', userController.update);
// router.delete('/:_id', userController.delete)


module.exports = router
