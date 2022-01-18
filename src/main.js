const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db/connect');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname,'./public')));
//Template engine
app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'./recources/views'));

route(app);
db.connectDB();
    
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});