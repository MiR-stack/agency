import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { AiOutlineClose } from 'react-icons/ai'
import { FiCircle } from 'react-icons/fi'
import { GiBallPyramid } from 'react-icons/gi'
import { HashLink as Link } from 'react-router-hash-link'
import { data } from './ServiceData'



function Card({ item }) {
    return (
        <div className="card">
            <Link smooth to={`/servicesDetails#${item.id}`} >
            <div className="wrapper">
                <div className="icon">{item.icon} </div>
                <h3>{item.title}</h3>
                <p>{item.deccription} </p>
                <div className="link"><FaArrowRight /></div>
            </div>

            <div className="icons">
                <GiBallPyramid />
                <GiBallPyramid />
                <GiBallPyramid />
                <FiCircle />
                <AiOutlineClose />
            </div>
            </Link>
        </div>
    )
}

export default function Services({ Style,title }) {
    return (
        <div className={` ${Style} services`}>
            <h1>{title?title:'services'} </h1>
            <p className=' title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima quisquam, quibusdam ullam deleniti incidunt molestias omnis accusantium fugiat assumenda. </p>
            <div className="container">
                {
                    data.map((item, index) => (<Card item={item} key={index} />))
                }
            </div>
        </div>
    )
}
