import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h2>unicorn</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis modi odio sapiente dolor consectetur quae maxime enim magni itaque!</p>
                </div>
                <div>
                    <h3>our services</h3>
                    <Link to='/'>digital strategy</Link>
                    <Link to='/'>brand strategy</Link>
                    <Link to='/'>app development</Link>
                    <Link to='/'>e-commerce development</Link>

                </div>
                <div>
                    <h3>quick link</h3>
                    <Link to="/">home</Link>
                    <Link to='/services'>services</Link>
                    <Link to='/portfolio'>portfolio</Link>
                    <Link to='/team'>team</Link>
                </div>
                <div>
                    <h3>contract</h3>
                    <p>example@unicorn.com</p>
                    <p>+8801400007904</p>
                    <p>road no-11,mohammadpur,dhaka</p>
                    <div className="icon">
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> </a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a>
                    </div>
                </div>
            </div>
            <div className='bottom' >
                copyright &copy; 2021 unicorn. all right reserved.
            </div>
        </div>
    )
}