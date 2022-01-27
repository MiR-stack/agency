import React, {useState,useEffect} from 'react'
import Context from './useContext'
import App from './App'
import {data} from './components/Blocks/portfolioData'
import {blogData} from './components/Blocks/blogData'
import Width from './components/useWindowSize'


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
    let work = data.filter(item => item.category === Category).slice(0,index)
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

    return (
        <Context.Provider value={{mode ,handleMode ,portfolioDetails,handlePortfolioDetails,rWork,blogDetails,handleBDetails,Rblog,category,setCategory}}>
            <App mode={mode} />
        </Context.Provider>
    )


}