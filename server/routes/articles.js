'use strict'

var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController')

router.post('/', articleController.create);
router.get('/',articleController.getAll);
router.put('/:id',articleController.update);
router.get('/:id', articleController.getOne);
router.delete('/:id', articleController.delete)


module.exports = router
