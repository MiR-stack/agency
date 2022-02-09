import React from 'react'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PageTopSection'
import Portfolio from '../../Blocks/portfolio'
import Brands from '../../Blocks/Brands'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'

export default function portfolio() {
    return (
        <div className='Portfolio'>
            <Navbar />
            <TopSection name={'Portfolio'} />
            <Portfolio title={'see our works'} />
            <Brands />
            <Subscribe />
            <Footer />
        </div>
    )
}
