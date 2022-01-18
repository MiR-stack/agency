import React from 'react'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Service from '../../Blocks/Services'
import FunFacts from '../../Blocks/Fun_fact'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'

export default function Services() {
    return (
        <div className='Services'>
            <Navbar />
            <TopSection name={'services'} />
            <Service Style={'services1'} />
            <FunFacts />
            <Subscribe />
            <Footer />
        </div>
    )
}
