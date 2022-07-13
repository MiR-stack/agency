import React, { useState, useEffect, useContext } from 'react'
import { Card } from '../../Blocks/Blog'
import Width from '../../useWindowSize'
import './blog.css'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PageTopSection'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Context from '../../../useContext'
import Carousel from '../../Carousel'

function MainBlog() {

    const { category, setCategory,search,searchTerm,Bdata,handleSearch } = useContext(Context)
    const data = Bdata

    const width = Width()

   

    const [pageData, setpageData] = useState()

    const [page, setPage] = useState([])

    function handlePage(page) {
        setPage(page)

    }

  

    function handleChange(e) {
        setCategory(e.target.value)
        
    }



    useEffect(() => {
        if (width < 768) {
            setpageData(4)
        } else {
            setpageData(6)
        }
    }, [width])



    return (
        <div className='Blog' id='blog'>
            <div className="top">
                <h2>latest blog</h2>
                <div className="container">
                    <div className="btn-group"><input placeholder='search here' type="search" value={search} name='search' onChange={searchTerm} /> <button onClick={handleSearch}>{width < 500 ? <FaSearch /> : 'search'}</button></div>
                    <select name="category" value={category} id="category" onChange={handleChange}>
                        <option value="all">all</option>
                        <option value="business">business</option>
                        <option value="technology">technology</option>
                        <option value="sports">sports</option>
                        <option value="general">general</option>
                    </select>
                </div>
            </div>
            <Carousel value={{ data, category, pageData, handlePage }} >
                <div className="wrapper">
                    {(page.length >0) ? page.map((item, index) => <Card key={index} item={item} />): <div className='empty'>data not fund </div>}
                </div>
            </Carousel>
            <div className="Bottom">
                <h3>follow us</h3>
                <div className="icon">
                    <Link to="http://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebook /></Link>
                    <Link to="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
                    <Link to="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                </div>
            </div>
        </div>
    )
}


export default function Blog() {
    return (
        <div className=''>
            <Navbar />
            <TopSection name={'Blog'} />
            <MainBlog />
            <Subscribe />
            <Footer />
        </div>
    )
}