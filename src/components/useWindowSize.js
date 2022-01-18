import { useState,useEffect } from "react"

const Mediaquery = ( ) =>{

    const [windowSize,setWindowSize] = useState(window.innerWidth)


    useEffect(()=>{
        const handleWindowSize = () =>{
            

            setWindowSize(window.innerWidth)
        }

        window.addEventListener("resize",handleWindowSize)

        return ()=> window.removeEventListener("resize",handleWindowSize)
    })

    return windowSize

}

export default Mediaquery;