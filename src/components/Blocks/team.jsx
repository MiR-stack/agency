import React from 'react'
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

export default function Team() {

    const width = Width()
    function breakpoints() {
        if (width < 768) {
            return 2
        } else if (width < 992) {
            return 3
        } else {
            return 4
        }
    }

    return (
        <div className='team section'>
            <h1>Our Team</h1>
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora saepe amet quam ad maxime doloribus neque est. Voluptatum, accusantium.</p>
            <div className="wrapper">
                <div className="container">
                    {data.slice(0, breakpoints()).map((item, index) => <Card item={item} key={index} />)}
                </div>
                <div className="btn">
                    <button>see all</button>
                </div>
            </div>
        </div>
    )
}
