import React from 'react'
import { FaArrowRight, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import { IoLogoApple, IoLogoNodejs } from 'react-icons/io'
import { MdBusinessCenter } from 'react-icons/md'
import { AiOutlineAreaChart, AiOutlineClose } from 'react-icons/ai'
import { FiCircle } from 'react-icons/fi'
import { GiBallPyramid } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const data = [
    {
        icon: <FaLaptopCode />,
        title: 'digital strategy',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.",
        url: '/serviceDetails'
    },
    {
        icon: <IoLogoApple />,
        title: 'brand strategy',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.",
        url: '/serviceDetails#brandStrategy'
    },
    {
        icon: <AiOutlineAreaChart />,
        title: 'marketing starategy',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },

    {
        icon: <IoLogoNodejs />,
        title: 'website devlopment',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },
    {
        icon: <FaMobileAlt />,
        title: 'app development',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },
    {
        icon: <MdBusinessCenter />,
        title: 'e-commerce development',
        deccription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum."
    },

]



function Card({ item }) {
    return (
        <div className="card">
            <div className="wrapper">
                <div className="icon">{item.icon} </div>
                <h3>{item.title}</h3>
                <p>{item.deccription} </p>
                <div className="link"><Link to='/services' ><FaArrowRight /> </Link></div>
            </div>

            <div className="icons">
                <GiBallPyramid />
                <GiBallPyramid />
                <GiBallPyramid />
                <FiCircle />
                <AiOutlineClose />
            </div>
        </div>
    )
}

export default function Services({ Style }) {
    return (
        <div className={`services ${Style}`}>
            <h1>services</h1>
            <p className=' title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima quisquam, quibusdam ullam deleniti incidunt molestias omnis accusantium fugiat assumenda. </p>
            <div className="container">
                {
                    data.map((item, index) => (<Card item={item} key={index} />))
                }
            </div>
        </div>
    )
}
