import React from 'react'
import './contract.css'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Information from '../../Blocks/Information/Project_details'
import Footer from '../../Blocks/Footer'

export default function Contract() {
    return (
        <div className='contract'>
            <Navbar />
            <TopSection name='contract' />
            <div className="container">
                <div>
                    <h3>phone</h3>
                    <p>01400007904</p>
                    <p>01740731298</p>
                </div>
                <div>
                    <h3>email</h3>
                    <p>habibmir807@gmail.com</p>
                    <p>habibmir808@gmail.com</p>
                </div>
                <div>
                    <h3>address</h3>
                    <p>road-no:12, adabor, mohammadpur, dhaka</p>
                </div>
            </div>
            <div className="map">
            </div>
            <Information />
            <Footer />
        </div>
    )
}
