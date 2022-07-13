import React from 'react'
import Left from './leftSide'
import Right from './rightSide'
import Navbar from '../../../navbar/navbar'
import TopSection from '../../../Blocks/PageTopSection'
import Subscribe from '../../../Blocks/Subscribe'
import Footer from '../../../Blocks/Footer'


export default function BlogDetails() {
    return (
        <>
            <Navbar />
            <TopSection name='blog details' />

            <div className="blogDetails">
                <Left />
                <Right />
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}


