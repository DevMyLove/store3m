const siteRouter = require('./site');
const productRouter = require('./products')
const detailProductRouter = require('./detailProduct');
const { redirect } = require('express/lib/response');

function route(app){
    
    app.use('/men',productRouter);
    app.use('/women',productRouter);
    app.use('/product',productRouter)
    app.use('/detail',detailProductRouter)
    app.use('/', siteRouter);
    app.all('*', (req,res) => {
        res.redirect('page404')
    });
}

module.exports = route;