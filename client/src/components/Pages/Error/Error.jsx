import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {





    return (
        <div className="Error">
            <div className="container">
                <div className="wrapper" >
                    <h1>opps !</h1>
                    <p>The page you are looking for has been removed or doesn't exist</p>
                    <button><Link to='/'>back to home </Link></button>
                </div>
            </div>
        </div>
    )
}