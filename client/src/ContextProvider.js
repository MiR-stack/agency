import React, {useState,useEffect} from 'react'
import Context from './useContext'
import App from './App'
import {data} from './components/Blocks/portfolioData'
import {blogData} from './components/Blocks/blogData'
import Width from './components/useWindowSize'
import axios from 'axios'


export default function Provider(){
    const width = Width()

    const [mode, setMode] = useState(false)
      
    const handleMode= (Mode)=>{
      if(Mode === 'dark'){
        setMode(true)
    }else{
        setMode(false)
    }
    }

    const [transparent,setTransParent] = useState(false)
// portfolio section start here

    
const [portfolioDetails,setPortfolioDetails] = useState(data[0])
const [rWork,setRWork] = useState([])
const [index,setIndex] = useState(3)


useEffect(()=>{
    if(width <1000){
        setIndex(2)
    }else{
        setIndex(3)
    }
},[width])

useEffect(()=>{
    let Category = portfolioDetails.category
    let work = data.filter(item => item.category === Category).filter(item => item.id !== portfolioDetails.id).slice(0,index)
    setRWork(work)
},[portfolioDetails,index])

function handlePortfolioDetails (id){

   let Data =  data.find(item => item.id === id)
    setPortfolioDetails(Data)
}

// portfolio section end here

// blog section start here
 const [blogDetails,setBlogDetails] = useState(blogData[0]) 
const [ Rblog,setRblog] = useState([])
const [rIndex,setRIndex] = useState(3)
const [category,setCategory] = useState('all')
    const [Bdata, setData] = useState(blogData)
    const [search,setSearch] = useState()
    function searchTerm(e) {
        setSearch(e.target.value)
     }
 
     function handleSearch() {
         setCategory('all')
         let Data = blogData.filter(item => item.title.includes(search))
         
         if(Data.length >0){
             setData(Data)
         }else{
            setData(Data)
         }
 
     }

 useEffect(()=>{
     if(width <768){
         setRIndex(4)
     }else{
         setRIndex(3)
     }
 },[width])

 useEffect(()=>{
     let Category = blogDetails.category
     let Rblog = blogData.filter(item => item.category === Category).slice(0,rIndex)
     setRblog(Rblog)
 },[blogDetails,rIndex])
 
  function handleBDetails(id){
      let BD = blogData.find(item => item.id === id )
      setBlogDetails(BD)
  }

// blog section end here
// user authentication section start here
axios.defaults.withCredentials = true

const [userAuth,setUserAuth] = useState(false)
const [form,setForm] = useState('register')
const [user,setUser] = useState()

useEffect(()=>{
    axios.get('/api/user/userAuth',{withCredentials:true})
    .then(res => setUser(res.data))
},[])

    return (
        <Context.Provider value={{mode ,handleMode,transparent,setTransParent ,portfolioDetails,handlePortfolioDetails,rWork,blogDetails,handleBDetails,Rblog,category,setCategory,search,searchTerm,Bdata,handleSearch,userAuth,setUserAuth,form,setForm,user,setUser}}>
            <App mode={mode} />
        </Context.Provider>
    )


}