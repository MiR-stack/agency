const Service = require('../model/services.model')
const multer = require('multer')
const path = require('path')


async function handleGet(req,res){
    try{

        const _id = req.query.id

        if(_id){
            let service = await Service.findById(_id)
            res.send(service)
        }else{
            const services = await  Service.find()
            res.send(services)
        }
    }catch(err){
        res.send(err)
    }
}

//adding services

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./client/public/images/services')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const fileFilter = (req,file,cb) =>{
    const allowedFileTypes = ['image/jpeg','image/jpg','image/png']
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({storage,fileFilter})

function addService(req,res){
    const name = req.body.name
    const title = req.body.title
    const deccription = req.body.deccription
    const icon = req.body.icon
    const image = req.file.filename
    
    const newServiceData  ={ name,title,deccription,icon,image}
    const newService =    new Service(newServiceData)  
    newService.save()
    .then(()=> res.staus(201).send('service added successfully'))
    .catch(err =>res.send(err))
  

    
}


//remove service

async function removeService(req,res){
   try{
    const _id = req.query.id
    const result = await Service.findByIdAndDelete(_id)
    res.send(result)
   }catch(err){
       res.send(err)
   }
}

//update service

function updateService(req,res){
    const _id = req.query.id
    const data = req.body
    
   var image;
   if(req.file){
        image = req.file.filename
   }
    
    const newServiceData  ={...data,image }

      Service.findByIdAndUpdate({_id},{$set:newServiceData})
        .then(()=> res.send('service updated successfully'))
        .catch((err)=>res.send(err))
}


module.exports = { handleGet, addService, upload,removeService,updateService}