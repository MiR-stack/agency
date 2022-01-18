import React,{useContext} from 'react'
import { blogData } from '../../../Blocks/blogData'
import { Card } from '../../../Blocks/Blog'
import Context from '../../../../useContext'
import {Link } from 'react-router-dom'



export default function RightSide() {

    var technology = blogData.filter(item => item.category === 'technology').length
    var business = blogData.filter(item => item.category === 'business').length
    var general = blogData.filter(item => item.category === 'general').length
    var sports = blogData.filter(item => item.category === 'sports').length
    var all = blogData.length
    var tags = ['business','busiessman','future business','technology','today world']

    const {setCategory} = useContext(Context)

    return (
        <div className="Right">
            <div className="searchbar">
                <input type="search" name="search" id="" />
                <button>search</button>
            </div>
            <div className="categories">
                <h4>categories</h4>
               <Link to='/blog'>
               <div className="category" onClick={()=>{setCategory('all')}}><p>all</p> <p>{all} </p> </div>
                <div className="category" onClick={()=>{setCategory('technology')}}><p>technology</p> <p>{technology} </p> </div>
                <div className="category" onClick={()=>{setCategory('business')}}><p>business</p> <p>{business} </p> </div>
                <div className="category" onClick={()=>{setCategory('general')}}><p>general</p> <p>{general} </p> </div>
                <div className="category" onClick={()=>{setCategory('sports')}}><p>sports</p> <p>{sports} </p> </div>

               </Link>
            </div>
            <div className="recentNews">
                <h4>recent news</h4>
                <div className="wraper">
                    {blogData.slice(0, 4).map(item => <Card key={item.id} item={item} />)}
                </div>
            </div>
            <div className="tags">
                <h4>tags</h4>
               <div className='wraper'>
               {tags.map((item ,index )=> <p key={index}>{item}</p>)}
               </div>
            </div>
        </div>
    )
}