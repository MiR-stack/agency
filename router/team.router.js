const router = require('express').Router()
const {getTeamData,updateUserData} = require('../controller/team.controller')

//find team
router.get('/',getTeamData)

//update data
router.put('/',updateUserData)

module.exports = router