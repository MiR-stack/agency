import React, { useState, useEffect, useContext } from 'react'
import { Card } from '../../Blocks/Blog'
import { blogData } from '../../Blocks/blogData'
import Width from '../../useWindowSize'
import './blog.css'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Context from '../../../useContext'

function MainBlog() {

    const { category, setCategory } = useContext(Context)

    const width = Width()

    const [search,setSearch] = useState()
    const [News,setNews] = useState([])

    function searchTerm(e) {
       setSearch(e.target.value)
    }
    function handleChange(e) {
        setCategory(e.target.value)
    }
    const [index, setIndex] = useState()

    useEffect(() => {
        if (width < 768) {
            setIndex(4)
        } else {
            setIndex(6)
        }
    }, [width])

    useEffect(() => {
        const news = () => {
            if (category === 'all') {
                return blogData.slice(0, index)
            } else {
                return blogData.filter(item => item.category === category).slice(0, index)
            }
        }
        setNews(news())
    }, [ category, index])

    return (
        <div className='Blog'>
            <div className="top">
                <h2>latest blog</h2>
                <div className="container">
                    <div className="btn-group"><input placeholder='search here' type="search" value={search} name='search' onChange={searchTerm} /> <button>{width < 500 ? <FaSearch /> : 'search'}</button></div>
                    <select name="category" value={category} id="category" onChange={handleChange}>
                        <option value="all">all</option>
                        <option value="business">business</option>
                        <option value="technology">technology</option>
                        <option value="sports">sports</option>
                        <option value="general">general</option>
                    </select>
                </div>
            </div>
            <div className="wrapper">
                {News.map((item, index) => <Card key={index} item={item} />)}
            </div>
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