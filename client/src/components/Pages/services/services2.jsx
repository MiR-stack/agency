import React from 'react'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection1/pagesTopSection1'
import Service from '../../Blocks/Services'
import Brands from '../../Blocks/Brands'
import Footer from '../../Blocks/Footer'

export default function Services() {
    return (
        <div className='Services'>
            <Navbar Style={'nav-dark'} />
            <TopSection name={'services'} />
            <Service Style={'services2'} title='see our services' />
            <Brands />
            <Footer />
        </div>
    )
}
