import React from 'react'

export default function Subscribe() {
    return (
        <div className='subscribe '>
            <div className="wrapper">
                <div className="left">
                    <h2>subscribe our newsletter,</h2>
                    <p>for latest update</p>
                </div>
                <div className="right">
                    <div className="btn_group">
                        <input type="email" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
