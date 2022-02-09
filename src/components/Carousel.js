import React,{useState,useEffect} from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'

export function carousel(data,pageData,currentPage){

    if(!currentPage) currentPage = 1
       
    
    if(!pageData)  pageData = 6
      
    
    if(!data){
        data = []
        console.log( 'your data is not an array or data is empty')
    }
 
  
    var Length = data.length
    var totalPage = Math.ceil(Length / pageData)
    Length = pageData * totalPage
   
    var breakPoint = []
    var Pages= {}

    

    for (let i = 0; i <= Length; i = i + pageData) {
        breakPoint.push(i)
    }

    for(let i = 1; i<(breakPoint.length ); i++){
        Pages = {...Pages,[i ]:data.slice(breakPoint[i - 1],breakPoint[i])}
    }
    
    function Numbers(){
        var pages = []

        for (let i = 0 ; i<totalPage; i++){
            pages.push(i + 1)
        }
        var index = pages.indexOf(currentPage)
        console.log(index)
        var PageNumbers =pages
        if (pages.length>5){
            if( index>2 && index <(pages.length - 2)){
                PageNumbers = pages.slice(index - 2,index + 3 )
             }else if(pages.length <(index + 3)) {
                 PageNumbers = pages.slice(pages.length - 5,pages.length)
             }
        }
        return PageNumbers
    }

   var pageNumbers = Numbers()

    var page = Pages[currentPage]
    if(page === undefined){
        page = []
        totalPage = 1
        pageNumbers = [1]
    }

return {page,totalPage ,currentPage,pageNumbers}

}

export default function Carousel({children,value}){

    const {data,category,pageData,handlePage} = value

    const [Data, setData] = useState({
        page: [],
        totalPage: 0,
        pageNumbers: []
    })
    const { page, totalPage, pageNumbers } = Data
    const [currentPage,setCurrentPage] = useState(1)
    useEffect(()=>{
        handlePage(page)
    },[page,handlePage])


    useEffect(()=>{
        setCurrentPage(1)
    },[category])
    
    function PageIncrease() {
        if (currentPage < totalPage) {
           setCurrentPage(currentPage + 1)
        }
    }
    function PageDecrease() {
        if (1 < currentPage) {
           setCurrentPage(currentPage - 1)
        }
    }
    useEffect(() => {
        if (category === 'all' || !category) {
            setData(carousel(data, pageData, currentPage))
        } else {
            let Data = data.filter(item => item.category === category)
            setData(carousel(Data, pageData, currentPage))
        }
    }, [category, pageData, currentPage,data])

    console.log(Data)
    return(
        <div className='carousel' >
                       <p className='top'>page {currentPage} out of {totalPage} </p>
              {children}
             <div className="controler">
                    <div className="bottom">
                        <button>   <FaChevronLeft onClick={PageDecrease} /></button>
                        <div className="pages">{pageNumbers.slice(0,5).map(item => <span className={currentPage === item ? 'active' : null} key={item} onClick={()=>{setCurrentPage(item)}} >{item} </span>)} <sub>{pageNumbers.length > 5 ?'...':null}</sub> </div>
                        <button > <FaChevronRight onClick={PageIncrease} /></button>
                    </div>
                </div>
        </div>
    )
}