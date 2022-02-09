import React from 'react'

export default function TopSecton({ name }) {
    return (
        <div className='topSection' >
            <div className="container">
                <div className="wrapper">
                    <h1>{name}</h1>
                    <p>home / <span>{name} </span> </p>
                </div>
            </div>
        </div>
    )
}