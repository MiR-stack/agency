 import React,{useState} from 'react'
 import {data} from '../../Blocks/portfolioData'
 import {Card} from '../../Blocks/portfolio'
import './work.css'
import Carousel from '../../Carousel'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection1/pagesTopSection1'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'


export default function Work2(){
    
    const [page,setPage] = useState([])
    function handlePage(page){
        setPage(page)
    }

     return(
         <>
         <Navbar Style='nav-dark' />
         <TopSection name={'portfolio'} /> 
         <div className='work2 section'>
             <h1>see our works</h1>
             <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum at est maiores sint asperiores voluptatem, ut soluta fugit in.</p>
             <Carousel value={{data,handlePage}} >
             <div className="container">
                {page.map(work => <Card key={work.id} work={work} />)}
             </div>
             </Carousel>
         </div>
         <Subscribe />
         <Footer />
         </>
     )
 }