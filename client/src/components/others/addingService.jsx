import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function AddService({id}) {

    var serviceData ={
        name:'',
        title:'',
        deccription:'',
        icon:'',
        image:null
    }

    const [newService,setNewService] = useState(serviceData)

    const {name,title,deccription,icon,image} = newService

    const formData = new FormData()
    formData.append('name',name)
    formData.append('title',title)
    formData.append('deccription',deccription)
    formData.append('icon',icon)
    formData.append('image',image)

    const handleService = async (e) =>{
        e.preventDefault()
      try{

       const result = await axios.post('http://localhost:5000/api/services', formData)

       console.log(result)
       setNewService(serviceData)

      }catch(err){
          console.log(err)
      }
       

    }


    const handleChange = e =>{
        setNewService({...newService, [e.target.name]:e.target.value})
    }

    const handleImage= e =>{
        setNewService({...newService,image:e.target.files[0]})
    }

    //update service

    useEffect(()=>{
      if(id){
        axios.get(`http://localhost:5000/api/services?id=${id}`)
        .then(res =>setNewService(res))
        .catch(err =>console.log(err))
      }
    },[id])

    function update(){
     axios.put(`http://localhost:5000/api/services?id=${id}`,formData)
        .then(res =>  console.log(res))
        .catch(err => console.log(err))
        
    }

  return (
    <form onSubmit={handleService}  encType='multipart/form-data'>
        <input type="text" onChange={handleChange} name="name" value={name} placeholder='enter your service name' />
        <input type="text" onChange={handleChange} name="title" value={title} placeholder='enter your service title' />
        <input type="text" onChange={handleChange} name="deccription" value={deccription} placeholder='enter your service deccription' />
        <input type="text" onChange={handleChange} name="icon" value={icon} placeholder='enter your service icon name' />
        <input type="file" onChange={handleImage} name="image"  accept='.png, .jpg, .jpeg' placeholder='enter your service name' />
        <button type='submit' >Add</button>
        <button onClick={update} >update</button>
    </form>
  )
}
