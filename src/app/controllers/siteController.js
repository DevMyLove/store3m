const Product = require('../models/products')
const mongooseObj = require('../../util/mongooseToObject')

class SiteController{
    // [GET] home
    home(req,res,next){
        Product.find({})
        .then(products => res.render('home', { products: mongooseObj.mutipleMongooseToObj(products)}))
        .catch(next);
    }
    page404(req,res,next){
        res.render('page404');
    }
    search(req,res,next){
        res.send('this is page search');
    }
}
module.exports = new SiteController;
