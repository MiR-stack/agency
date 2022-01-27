import React,{useState} from 'react'
import {data} from './teamData'

export default function Quote() {

    const [active,setActive] = useState(data[0])

  

    return (
        <div className='quote section'>
            <h2>some quotes from our team members</h2>
            <div className="container">
            <div className="wraper">
                <span>"</span>
                <span>"</span>
                <p>  {active.quote}</p>
                <p className="footer">- {active.name},{active.position}</p>
            </div>
            <div className="image">
                {data.map((item)=><div className={`img ${item.id === active.id?'active':null}`} key={item.id} onClick={()=>{setActive(item)}} > <img src={item.image} alt={item.quote} /> </div>)}
            </div>
            </div>
        </div>
    )
}
