const Product = require('../models/products')

class ProductsController {
    // [GET] product
    index(req,res){
        res.render('products');
    }

    // [GET] product/shoes
    shoes(req,res){
        res.render('products');
    }
    
    create(req,res,next){
        const product = new Product() ;
        product.save()
            .then( () => res.redirect('/'))
            .catch(Error => { res.send(Error) } )
    }
}

module.exports = new ProductsController;
