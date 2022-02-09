import React from 'react'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PageTopSection'
import Service from '../../Blocks/Services'
import Brands from '../../Blocks/Brands'
import Footer from '../../Blocks/Footer'

export default function Services() {
    return (
        <div className='Services'>
            <Navbar />
            <TopSection name={'services'} />
            <Service Style={'services3'} title='see our services' />
            <Brands />
            <Footer />
        </div>
    )
}
