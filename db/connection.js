// dependencies
const mongoose = require('mongoose')

// config
const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        :'mongo://localhost/express-env';

    mongoose
        .connect(mongoURI) {
            console.log("works");
        }