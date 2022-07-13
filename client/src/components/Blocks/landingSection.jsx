import React from 'react'
import { ReactComponent as Developer } from '../svg/Developer1.svg'
import Context from '../../useContext'
import {Link} from 'react-router-dom'

export default function Main() {
    return (
        <Context.Consumer>
            {({ mode }) => <div className='main'>
                <div className="left">
                    <div className="wrapper">
                        <h1>digital creative agency</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae dolores reiciendis quisquam vel modi pariatur quibusdam repellat! Tenetur, rem.</p>
                        <button><Link to='/pricing'> get started</Link></button>
                    </div>
                </div>
                <div className="right">

                    <svg className='outerDiv' height='600' width='700'>
                        <path d='M250,0 A40,30 0,0,0 700,550 V0' fill={mode ? '#1a1a1a' : '#e6fffa'} ></path>
                    </svg>

                    <Developer className='innerImage' />
                </div>
            </div>
            }
        </Context.Consumer>
    )
}
