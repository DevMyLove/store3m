const mongoose = require('mongoose');
const atlas_uri = 'mongodb+srv://store3m:123@clusterdev.jp5ty.mongodb.net/store3m?retryWrites=true&w=majority';
const urlDB = 'mongodb://127.0.0.1:27017/Store3M';
async function connectDB() {
    try {
        await mongoose.connect(atlas_uri);
        console.log('Successful connection DB');
    } catch (error) {
        console.log('Failure connection DB');
    }
   
}

module.exports = {connectDB};