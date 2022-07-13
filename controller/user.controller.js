const User = require('../model/users.model')
const Team = require('../model/team.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function getUser(req,res){
    const _id = req.query.id

   if(_id){
    User.findById(_id)
    .then((user)=>res.send(user))
    .catch(err => res.send(err))
   }else{
    User.find()
    .then((user)=>res.send(user))
    .catch(err => res.send(err))
   }
}

//add new user 
async function addUser(req,res){
    const newUserData = req.body

    const newUser = new User(newUserData)

     const cookie =   await  newUser.genarateToken()
     console.log(cookie)
     res.cookie('jwt',cookie,{
       expires:new Date(Date.now() + 9999999),
       httpOnly:true,
       secure:false
     })
    newUser.save()
    .then((r)=>res.status(201).send(r))
    .catch(err => res.send(err))

}

//user login
async function userLogin(req,res){
  const email = req.query.email
  const password = req.query.password

  const userInfo = await User.findOne({email})
  const teamInfo = await Team.findOne({email})

  var isMatch 
  if(userInfo){
    isMatch = await bcrypt.compare(password, userInfo.password)
  }else if(teamInfo){
    isMatch = await bcrypt.compare(password, teamInfo.password)

  }


  if(isMatch){
    var cookie
    if(userInfo){
    cookie = await  userInfo.genarateToken()
    }else{
     cookie = await teamInfo.genarateToken()
    }
    res.cookie("jwt",cookie,{
      secure:false,
      expires:new Date(Date.now() + 9999999),
    })
    res.send(userInfo || teamInfo)
    console.log('login succesfull')
  }else{
    res.send(`your email is ${email} and your password is ${password}`)
  }


}

//authenticate user with jwt token
async function userAuth(req,res ){
  try{
    const token = req.cookies.jwt
    console.log(token)
  const verify = jwt.verify(token,"mynameishabiburRhamaAndThisIsMyFirstjwtAuthentication")

  const user = await User.findOne({_id:verify._id})
  res.send(user)
  console.log(user)
  }catch(err){
    res.status(500).send(err)
  }
}

// user logout system
async function userLogout(req,res){
  try{
    const token = req.cookies.jwt
    console.log(token)
    const user = await User.findOne({_id:req.query.userId})
    
    user.tokens = user.tokens.filter(tokens => tokens.token !== token)
     await user.save()

     res.clearCookie('jwt')
     res.send('logout successfull')
  }catch(err){
    res.send(err)
  }
}

//update user data
async function updateUser(req,res){
  try{
    const _id = req.query.id
        const category = req.body.category
    
        if(category && (category !== 'member')){
            const user = await User.findById(_id)
    
            const newMember = {
                name:user.name,
                image:user.image,
                email:user.email,
                password:user.password,
                category:category
            }
    
            const removeMember = new Team(newMember)
            console.log(removeMember)
    
          let result = await  removeMember.save()
          res.send(result)
    
          User.findByIdAndDelete(_id)
          .then(()=>console.log('deleted'))
          .catch(err => console.log(err))
    
    }else{
      var result 
      const password = req.body.password
      if(password){
          const newPassword = await bcrypt.hash(password,10)
          result = await  User.findByIdAndUpdate({_id},{$set:{...req.body,password:newPassword}})
      }else{
          result = await  User.findByIdAndUpdate({_id},{$set:req.body})
      }

      res.send(result)
    }

  }catch(err){
      res.send(err)
  }
   
}

//delete user 
function deleteUser(req,res){
    const _id = req.query.id

    User.findByIdAndDelete(_id)
    .then(()=>res.send('deleted successfully'))
    .catch(err => res.send(err))
}

module.exports = {getUser,addUser,userLogin,updateUser,deleteUser,userAuth,userLogout}