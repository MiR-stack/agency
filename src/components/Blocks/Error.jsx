import React, { useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function Error() {

    const boxRef = useRef()
    useEffect(()=>{
        gsap.to(boxRef.current,{rotation:'+=360'})
    })

    var Span = []
    for (var i = 0; i < 30; i++) {
        Span.push(<span key={i}></span>)
    }



    return (
        <div className="error">
            {Span}
            <div className="wrapper" ref={boxRef}>
                <h1>opps !</h1>
                <p>look like you lost</p>
                <button><Link to='/'>back to home </Link></button>
            </div>
        </div>
    )
}