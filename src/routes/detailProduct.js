const express = require('express');
const router = express.Router();
const DetailProductController = require('../app/controllers/detailProduct.controller');

router.get('/:id',DetailProductController.index);
module.exports = router;