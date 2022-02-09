import React,{useContext} from 'react'
import { blogData } from '../../../Blocks/blogData'
import { Card } from '../../../Blocks/Blog'
import Context from '../../../../useContext'
import {Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'



export default function RightSide() {


    var tags = ['business','busiessman','future business','technology','today world']

    const { setCategory, searchTerm, handleSearch } = useContext(Context)

    const category = ['all', 'technology', 'business', 'general', 'sports']

    return (
        <div className="Right">
            <div className="searchbar">
                <input type="search" name="search" id="" onChange={searchTerm} />
                <HashLink smooth to='/blog#blog'>
                    <button onClick={handleSearch}>search</button>
                </HashLink>

            </div>

            <div className="categories">
                <h4>categories</h4>
               <Link to='/blog'>
                    {category.map((item,index) => <div className="category" key={index} onClick={() => { setCategory(item) }}><p>{item}</p> {item === 'all' ? <p>{blogData.length}</p> : <p>{blogData.filter(data => data.category === item).length}</p>} </div>)}
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