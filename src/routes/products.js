const express = require('express');
const router = express.Router();
const ProductsController = require('../app/controllers/products.controller');

router.post('/create',ProductsController.create);
router.get('/shoes',ProductsController.shoes);
router.get('/',ProductsController.index);
router.all('*',(req,res) => {
    res.redirect('/page404')
});
module.exports = router;