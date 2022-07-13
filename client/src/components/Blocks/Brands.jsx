import React, { useState, useEffect } from 'react'
import Width from '../useWindowSize'



const logos = [
    require('../logos/logo-01.jpg').default,
    require('../logos/logo-02.jpg').default,
    require('../logos/logo-03.png').default,
    require('../logos/logo-04.jpg').default,
    require('../logos/logo-05.png').default,
    require('../logos/logo-06.jpg').default,
    require('../logos/logo-07.jpg').default,
    require('../logos/logo-08.png').default,
    require('../logos/logo-09.png').default,
    require('../logos/logo-10.png').default,
    require('../logos/logo-11.jpg').default,
    require('../logos/logo-12.jpg').default,


]


export default function Brands() {
    const width = Width()


    const [index, setIndex] = useState()

    useEffect(() => {
        if (width < 750) {
            setIndex(8)
        }else if(width<900){
            setIndex(8)
        }else if (width < 1000) {
            setIndex(10)
        } else {
            setIndex(12)
        }
    }, [width])

    return (
        <div className="brands section">
            <h3>we work with those brand</h3>
            <p className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora praesentium temporibus libero atque voluptates accusamus explicabo a? Porro, sed.</p>
            <div className="wraper">
            {logos.slice(0, index).map((image, index) => <img src={image} key={index} alt='s' />)}

            </div>
        </div>
    )
}
