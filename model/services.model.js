const mongoose = require('mongoose')


const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    deccription:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true,
        unique:true

    },
    image:{
        type:String,
        required:true,
        unique:true
    }
})

const Service = new mongoose.model('Service',serviceSchema)


module.exports = Service