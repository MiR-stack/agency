const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({
    image:String,
    userName:{
        type:String,
        required:true
    },
    reply:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: new Date()
    }
})

const commentSechema = new mongoose.Schema({
    image:String,
    userName:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: new Date()
    },
    replies:[replySchema]
})

const blogSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    deccription:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    author:String,
    date:{
        type:Date,
        default:new Date().getTime()
    },
    love:{
        type:Number,
        default:0
    },
    share:{
        type:Number,
        default:0
    },
    comments:[commentSechema]
    
})


const Blog = mongoose.model('Blog',blogSchema)


module.exports = Blog