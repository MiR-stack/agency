import React from 'react'
import '../index.css'
import Navbar from '../../navbar/navbar'
import LandingSection from '../../Blocks/landingSection'
import Services from '../../Blocks/Services'
import Portfolio from '../../Blocks/portfolio'
import Testimonial from '../../Blocks/Testimonial'
import Blog from '../../Blocks/Blog'
import Team from '../../Blocks/team'
import ProjectDetails from '../../Blocks/Information/Project_details'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'

export default function Home() {




    return (
        <div className='home1'>
            <Navbar  />
            <LandingSection />
            <Services Style='services1' />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Team />
            <ProjectDetails />
            <Subscribe />
            <Footer />
        </div>
    )
}
