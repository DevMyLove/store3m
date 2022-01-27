const Product = require('../models/products');
const mongooseObj = require('../../util/mongooseToObject');

class DetailProduct {
    // [GET] product
    index(req,res,next){
        
        const product = Product.findOne({ _id: req.params.id })
        product.exec( ( err, result ) => {
            if (err){
                res.redirect('/notFound');
            }  
            else{
               res.render('detailProduct',{result : mongooseObj.mongooseToObj(result)});
            }
        })

    }
    

}

module.exports = new DetailProduct;
