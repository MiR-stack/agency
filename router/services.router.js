const express = require('express')
const router = express.Router()
const {handleGet,addService, upload,removeService,updateService} = require('../controller/services.controller')

// get services
router.get('/',handleGet )

// adding new service
router.post('/',upload.single('image'),addService)

//remove service
router.delete('/',removeService)

//update service
router.put('/',updateService)

module.exports = router