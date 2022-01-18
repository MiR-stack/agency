import React from 'react'
import { FaIntercom, FaIoxhost, FaCoffee, FaInvision } from 'react-icons/fa'


const data = [
    {
        icon: <FaIntercom />,
        number: 2000,
        title: 'completed project'
    },
    {
        icon: <FaIoxhost />,
        number: 5,
        title: 'running project'
    },
    {
        icon: <FaInvision />,
        number: 800,
        title: 'happy clint'
    },
    {
        icon: <FaCoffee />,
        number: 5000,
        title: 'cup of coffe'
    }

]


function Card({ item }) {
    return (
        <div className="card">
            {item.icon}
            <p>{item.number} + </p>
            <h2>{item.title}</h2>

        </div>
    )
}

export default function FunFact() {
    return (
        <div className='funFact section'>
            <h1>fun facts</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellendus esse omnis totam ad cum?</p>
            <div className="wrapper">
                {data.map((item, index) => <Card item={item} key={index} />)}
            </div>
        </div>
    )
}
