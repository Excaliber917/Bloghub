const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
// const mongoURI = "mongodb://localhost:27017/blog"
// const mongoURI = "mongodb+srv://dhrubajyotighosh:dhrubajyotighosh@cluster0.ep9ke9r.mongodb.net/?retryWrites=true&w=majority"

const connectTOMongo = () => {
    mongoose.connect(process.env.MONGO_URL, () => {
        console.log("connet to mongo")
    })
}

module.exports = connectTOMongo