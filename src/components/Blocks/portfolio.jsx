import React, { useEffect, useState } from 'react'
import Width from '../useWindowSize'
import { data } from './portfolioData'
import Context from '../../useContext'
import { Link } from 'react-router-dom'



export function Card({ item }) {
    return (
        <Context.Consumer>
            {({ handlePortfolioDetails }) => <div className="card" onClick={() => { handlePortfolioDetails(item.id) }}>
                <Link to='/workDetails' >
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                    <div className="transparent"></div>
                </Link>
            </div>}
        </Context.Consumer>
    )
}


export default function Portfolio({ color }) {
    const width = Width();
    const [Slice, setSlice] = useState({
        index1: 0,
        index2: 6
    })
    const { index1, index2 } = Slice

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        console.log(width)
        if (width < 993) {
            if (width < 577) {
                setSlice({ index1: 0, index2: 4 })
            } else {
                setSlice({ index1: 0, index2: 4 })
            }
        } else {
            setSlice({ index1: 0, index2: 6 })
        }
    }, [width])

    function handleFilter() {




        if (filter === 'all') {
            return (
                data.slice(index1, index2).map((item, index) => <Card item={item} key={index} />)
            )
        }
        if (filter === 'design') {
            return (
                data.filter((item) => (item.category === 'design')).slice(index1, index2).map((item, index) => <Card item={item} key={index} />)
            )
        }
        if (filter === 'development') {
            return (
                data.filter((item) => (item.category === 'development')).slice(index1, index2).map((item, index) => <Card item={item} key={index} />)
            )
        }
        if (filter === 'marketing') {
            return (
                data.filter((item) => (item.category === 'marketing')).slice(index1, index2).map((item, index) => <Card item={item} key={index} />)
            )
        }
        if (filter === 'branding') {
            return (
                data.filter((item) => (item.category === 'branding')).slice(index1, index2).map((item, index) => <Card item={item} key={index} />)
            )
        }
    }

    return (
        <div className={`portfolio section ${color}`} >
            <h1>Portfolio</h1>
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut, magni fugiat veniam voluptatum architecto! Labore eligendi architecto officia laboriosam!</p>
            <div className="container">
                <div className="btns">
                    <button className={filter === 'all' ? 'active' : null} onClick={() => { setFilter('all') }}>all</button>
                    <button className={filter === 'design' ? 'active' : null} onClick={() => { setFilter('design') }}>design</button>
                    <button className={filter === 'development' ? 'active' : null} onClick={() => { setFilter('development') }}> development</button>
                    <button className={filter === 'marketing' ? 'active' : null} onClick={() => { setFilter('marketing') }}>marketing</button>
                    <button className={filter === 'branding' ? 'active' : null} onClick={() => { setFilter('branding') }}>branding</button>
                </div>
                <div className="wrapper">
                    {handleFilter()}
                </div>
            </div>
        </div >
    )
}
