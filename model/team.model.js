const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:String,
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    position:{
        type:String,
        default:'joniour member'
    },
    category:{
        type:String,
        default:"team"
    },
    quote:String,
    fb:String,
    insta:String,
    twitter:String,
    
})


const Team = mongoose.model('Team',teamSchema)

module.exports = Team