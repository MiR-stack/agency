import React from 'react'
import Context from '../../../useContext'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PageTopSection'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'
import './work.css'
import { Card } from '../../Blocks/portfolio'


function Details() {
    return (
        <Context.Consumer>
            {({ portfolioDetails, rWork }) => (
                <div className='Details portfolio'>
                    <div className="container">
                        <img src={portfolioDetails.image} alt={portfolioDetails.title} />
                        <div className="content">
                            <h2>{portfolioDetails.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis adipisci at aut, nisi magnam eaque harum voluptatibus, nam hic facere, illo ipsam molestias deleniti. Porro repellat, provident odit at error placeat culpa dolorem adipisci corrupti vero. Praesentium temporibus assumenda, accusamus quisquam facilis nam doloribus consequuntur officia blanditiis consectetur ratione magni.</p>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                            <ul>
                                <li> sit amet consectetur, adipisicing elit.</li>
                                <li>ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>consectetur adipisicing.</li>
                                <li> Officiis adipisci at aut.</li>
                                <li> nisi magnam eaque harum voluptatibus.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis architecto accusantium, id culpa et. Reiciendis impedit, hic repudiandae illo eum voluptatem quasi dolor exercitationem at? Eaque aperiam cupiditate nostrum.</p>
                            <div className="bottom"><div className="left"><p>duration: {portfolioDetails.duration}days</p><p>Clint: {portfolioDetails.client}</p></div><div className="right"><p>live preview</p></div></div>
                        </div>
                    </div>
                    <div className='Bottom' >
                        <h2>related work</h2>
                        <div className="wrapper">
                            {rWork.map(item => <Card key={item.id} work={item} />)}
                        </div>
                    </div>
                </div>
            )}
        </Context.Consumer>
    )
}


export default function WorkDetails() {
    return (
        <div className="workDetails">
            <Navbar />
            <TopSection name={'Work Details'} />
            <Details />
            <Subscribe />
            <Footer />
        </div>
    )
}