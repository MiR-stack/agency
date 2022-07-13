const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    review:{
        type:String,
        required:true
    },
    star:{
        type:Number,
        required:true
    }
})

const Review = mongoose.model('Review',reviewSchema)

module.exports = Review