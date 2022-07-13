import React,{useEffect,useState} from 'react'
import {FaChevronUp} from 'react-icons/fa'
import './ScrollTopButton.css'

export default function ScrollButton(){


    const [btnShow,setBtnShow] = useState(false)
    const [ lastScroll,setLastScroll] = useState(0)

    function handleButton() {
        let currentScroll = window.scrollY
        if (currentScroll > 100) {
            if (currentScroll < lastScroll) {
                setBtnShow(true)
            } else {
                setBtnShow(false)
            }
        } else {
            setBtnShow(false)
        }
        setLastScroll(currentScroll)
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleButton)

        return()=>{
            window.removeEventListener('scroll',handleButton)
        }
    })

    function handleScroll(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }


    return(
        <button className={`scrollBtn ${btnShow?'buttonShow':null}`}  onClick={handleScroll} >
            <FaChevronUp />
        </button>
    )
}