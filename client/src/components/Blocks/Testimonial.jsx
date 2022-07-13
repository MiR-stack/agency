import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaStar } from 'react-icons/fa'
import { data } from './TestimonialData'

function Item({ item }) {

    const star = Array(5).fill(0)
    const colors = {
        golden: 'ffcc00',
        gray: 'gray'
    }

    return (
        <div className=" keen-slider__slide card">
            <div className="img">
                <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.deccription} </p>
            <div className="icon">
                {star.map((_, index) => {
                    return (
                        <FaStar key={index}

                            size={24}
                            color={item.review > index ? colors.golden : colors.gray}

                        />
                    )
                })}
            </div>
        </div>
    )
}


export default function Testimonial(props) {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        spacing: 25,
        breakpoints: {
            "(min-width: 600px)": {
                slidesPerView: 2,
                mode: "free-snap",
            },
            "(min-width: 900px)": {
                slidesPerView: 3,
                mode: "free-snap",
            },
            "(min-width: 1200px)": {
                slidesPerView: 4,
                mode: "free-snap",
            },
        },
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    })

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 5000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])




    return (
        <div className=' section testimonial'>
            <h1>Testimonial</h1>
            <p className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum tempore nobis animi, suscipit dolorem adipisci quibusdam ut! Mollitia, in!</p>
            <div className="container">
                <div ref={sliderRef} className="keen-slider slider">
                    {data.map((item, index) => <Item key={index} item={item} />)}
                </div>
            </div>
        </div>
    )
}


