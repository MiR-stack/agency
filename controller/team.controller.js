const User = require('../model/users.model')
const Team = require('../model/team.model')
const bcrypt = require('bcryptjs')

//find team member
function getTeamData(req,res){
    const _id = req.query.id

    if(_id){
        Team.findById(_id)
        .then(response => res.send(response))
        .catch(err => res.send(err))
    }else{
        Team.find()
        .then(response => res.send(response))
        .catch(err => res.send(err))
    }
}

//update team member data
 async function updateUserData(req,res){
    try{
        const _id = req.query.id
        const category = req.body.category
    
        if(category && (category === 'member')){
            const user = await Team.findById(_id)
    
            const newMember = {
                name:user.name,
                image:user.image,
                email:user.email,
                password:user.password,
                category:category
            }
    
            const removeMember = new User(newMember)
    
          let result = await  removeMember.save()
          res.send(result)
    
          Team.findByIdAndDelete(_id)
          .then(()=>console.log('deleted'))
          .catch(err => console.log(err))
    
        }else{
            var result 
            const password = req.body.password
            if(password){
                const newPassword = await bcrypt.hash(password,10)
                result = await  Team.findByIdAndUpdate({_id},{$set:{...req.body,password:newPassword}})
            }else{
                result = await  Team.findByIdAndUpdate({_id},{$set:req.body})
            }

            res.send(result)
        }
    
      }catch(err){
          res.send(err)
      }
}
module.exports = {getTeamData,updateUserData}