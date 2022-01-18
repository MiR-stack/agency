import React from 'react'
import './topSection.css'

export default function PagesTopSection({ name }) {


    const style = {
        PagesTop: {
            height: '70vh',
            width: '100%',
            maxHeight: '400px',
            position: 'relative',
            background: 'linear-gradient(30deg,skyblue,transparent)',
            textTransform: 'capitalize'

        },
        wrapper: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            textAlign: 'center'
        },
        h1: {
            fontSize: 'calc(2rem + 1.5vw)',
            color: '#e60099',
            marginBottom: '10px'
        },
        
    }

    return (
        <div className='TopSection' style={style.PagesTop}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className='wrapper' style={style.wrapper}>
                <h1 style={style.h1}>{name}</h1>
                <p >home/ <span>{name}</span></p>
            </div>
        </div >
    )
}
