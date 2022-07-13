import React from 'react'
import './index.css'
import Home from '../main_demo/index'


export default function DarkMode({mode}) {
    return (
        <div className='dark_mode'>
            <Home mode={mode} />
        </div>
    )
}
