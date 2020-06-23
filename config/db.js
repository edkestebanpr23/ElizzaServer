const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('DB is connected!');
    } catch (error) {
        console.log('Hubo un error de conexión a la base de datos: ', error);
        process.exit(1); // Detener la app
    }
};

module.exports = connectDB;