import React, { useEffect, useState } from 'react'
import { data } from './portfolioData'
import Context from '../../useContext'
import { Link } from 'react-router-dom'



export function Card({ work }) {
    return (
        <Context.Consumer>
            {({ handlePortfolioDetails }) => <div className="workCard" onClick={() => { handlePortfolioDetails(work.id) }}>
                <Link to='/workDetails' >
                    <img src={work.image} alt={work.title} />
                    <p>{work.title}</p>
                    <div className="transparent"></div>
                </Link>
            </div>}
        </Context.Consumer>
    )
}


export default function Portfolio({ color, title }) {

    const [Category, setCategory] = useState('all')
    const [page, setPage] = useState([])
  

    useEffect(() => {
        if (Category === 'all') {
            setPage(data.slice(0, 6))
        } else {
            let Data = data.filter(item => item.category === Category)
            setPage(Data.slice(0, 6))
        }
    }, [ Category])

    const btns = ['all', 'design', 'development', 'marketing', 'branding']

    return (
        <div className={`portfolio section ${color}`} >
            <h1>{title ? title : 'portfolio'} </h1>
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut, magni fugiat veniam voluptatum architecto! Labore eligendi architecto officia laboriosam!</p>
            <div className="container">
                <div className="btns">
                    {btns.map(btn => <button key={btn} className={Category === btn ? 'active' : null} onClick={() => { setCategory(btn) }}>{btn} </button>)}
                </div>
                <div className="wrapper">
                    {page.map(work => <Card key={work.id} work={work} />)}
                </div>
            </div>
        </div >
    )
}
