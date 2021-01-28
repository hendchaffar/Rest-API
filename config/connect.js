const mongoose=require('mongoose')
const config = require('config');

//Connecting to the Server of my DB
/*mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false});
console.log("DB coonet");*/

const connectDB = async () => {
    try {
        await mongoose.connect(config.get("MONGO_URI"), { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log("Data Base Connected")
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;