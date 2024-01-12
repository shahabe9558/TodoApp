const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = ()=> {
    mongoose.connect(process.env.DATA_BASE_URL)
    .then(()=> {console.log("Connected to db succefully")})
    .catch((error) => {
        console.log("Issue in connecting to db");
    })
}
module.exports = dbConnect;