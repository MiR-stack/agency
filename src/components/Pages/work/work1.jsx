import React from 'react'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Portfolio from '../../Blocks/portfolio'
import ProjectDetails from '../../Blocks/Information/Project_details'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'

export default function portfolio() {
    return (
        <div className='Portfolio'>
            <Navbar />
            <TopSection name={'Portfolio'} />
            <Portfolio />
            <ProjectDetails color={'mode1'} />
            <Subscribe />
            <Footer />
        </div>
    )
}
