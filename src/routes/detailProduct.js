const express = require('express');
const router = express.Router();
const DetailProductController = require('../app/controllers/detailProductController');

router.get('/:id',DetailProductController.index);
module.exports = router;