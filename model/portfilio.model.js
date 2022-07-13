const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    client:String,
    duration:Number
})


const Portfolio = mongoose.model('Portfolio',portfolioSchema)

module.exports = Portfolio