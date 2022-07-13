const Portfolio = require('../model/portfilio.model')

// get projects
async function getPortfolio(req,res){
   try{
    const _id = req.query.id

    if(_id){
        let portfolio = await Portfolio.findById(_id)
        res.send(portfolio)
    }else{
        let portfolio = await Portfolio.find()
        res.send(portfolio)
    }
   }catch(err){
       res.send(err)
   }
}

//add project
function addProject(req,res){

    const newProject = new Portfolio(req.body)
    newProject.save()
    .then(()=>res.status(201).send('project added'))
    .catch(err => res.status(404).send(err))
}


//remove project
function removeProject(req,res){
    const _id = req.query.id

    Portfolio.findByIdAndDelete(_id)
    .then(response => res.send(response))
    .catch(err => res.send(err))
}

//update project
function updateProject(req,res){
    const _id = req.query.id

    Portfolio.findByIdAndUpdate({_id},{$set:req.body})
     .then(response => res.send(response))
    .catch(err => res.send(err))
}

module.exports = { getPortfolio,addProject,removeProject, updateProject}