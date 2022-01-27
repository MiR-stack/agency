import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { data } from './teamData'
import Width from '../useWindowSize'




function Card({ item }) {
    return (
        <div className="card">
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <h3>{item.name}</h3>
            <p>{item.position} </p>
            <div className="icon">
                <Link to={item.fb} > <FaFacebook /> </Link>
                <Link to={item.twitter} ><FaTwitter /></Link>
                <Link to={item.insta} > <FaInstagram /> </Link>
            </div>
        </div>
    )
}

export default function Team({title}) {

    const width = Width()

    const [index, setIndex] = useState()
    const [all, setAll] = useState(false)

    useEffect(() => {

        if (all) return

        if (width < 768) {
            setIndex(2) 
        } else if (width < 992) {
            setIndex(3) 
        } else {
            setIndex(4) 
        }
    }, [width,all])


    function handleAll() {
        setAll(true)
        setIndex(data.length)
    }



    return (
        <div className='team section'>
            <h1>{title?title:'Our Team'}</h1>
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora saepe amet quam ad maxime doloribus neque est. Voluptatum, accusantium.</p>
            <div className="wrapper">
                <div className="container">
                    {data.slice(0, index).map((item, index) => <Card item={item} key={index} />)}
                </div>
                <div className="btn">
                    {all ?<button onClick={()=>{setAll(false)}}>see less</button>:<button onClick={handleAll}>see all</button>}
                </div>
            </div>
        </div>
    )
}
