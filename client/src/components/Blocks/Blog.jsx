import React, { useContext } from 'react'
import { blogData } from './blogData'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Width from '../useWindowSize'
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'
import Context from '../../useContext'


export const Card = ({ item }) => {

    const time = new Date()

    const { handleBDetails } = useContext(Context)


    return (
        <div className="blogCard" onClick={() => { handleBDetails(item.id) }}>
            <Link to='/blogDetails' >
                <div className="image">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                    <h3 className="title">
                        {item.title}
                    </h3>
                    <div className="deccription">
                        <p>{item.deccription}</p>
                    </div>
                </div>
            </Link>
            <div className="bottom">
                <div>{time.toDateString()} </div>
                <div className='right'>

                    <p><AiOutlineHeart /><sup> {item.love}</sup> </p>
                    <HashLink smooth to='/blogDetails#comments'><AiOutlineComment /><sup>{item.comments.length} </sup> </HashLink>
                    <p><AiOutlineShareAlt /><sup>{item.share} </sup></p>
                </div>
            </div>
        </div>
    )
}

export default function Blog() {

    const width = Width()

    const Data = () => {
        if (width < 769) {
            return blogData.slice(0, 4)
        } else {
            return blogData.slice(0, 6)
        }
    }


    return (
        <div className='blog section'>
            <h1>latest blog post</h1>
            <p>see our latest blog post here </p>
            <div className="wrapper">
                {Data().map((item, index) => <Card item={item} key={index} />)}
            </div>
            <div className="btn">
                <Link to='/blog'>see all</Link> 
            </div>
        </div>
    )


}
