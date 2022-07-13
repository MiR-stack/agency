const router = require('express').Router()
const {getPortfolio,addProject,removeProject,updateProject} = require('../controller/portfolio.cntroller')


//get portfoio
router.get('/',getPortfolio)

//add new project 
router.post('/',addProject)

//remove project
router.delete('/',removeProject)

//update project
router.put('/',updateProject)


module.exports = router