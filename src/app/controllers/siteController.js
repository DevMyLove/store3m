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
<<<<<<< HEAD
        res.send('my name Nguyen Duc Tam');
=======
        res.send('this is page search');
>>>>>>> c2fa89b48ef40f1749d421124661cd1fbb13a14a
    }
}
module.exports = new SiteController;
