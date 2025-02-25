const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/webportifas');
        console.log('MongoDB está online baby');
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB", err);
        process.exit(1);
    }
};

module.exports = connectDB;
