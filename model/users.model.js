const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requireq:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:String,
    category:{
        type:String,
        default:'member'
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

userSchema.methods.genarateToken = async function(){
   try{
    const token = await jwt.sign({_id:this._id},"mynameishabiburRhamaAndThisIsMyFirstjwtAuthentication")
   this.tokens =  this.tokens.concat({token})
    await this.save()
    return token
   }catch(err){
       console.log(err)
   }
}

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})


const User = mongoose.model('User',userSchema)


module.exports = User