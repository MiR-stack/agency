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
import Brands from '../../Blocks/Brands'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'
import Width from '../../useWindowSize'

export default function Home() {


const width = Width()

    return (
        <div className='home1'>
            <Navbar Style={width >768?'nav-dark':null}  />
            <LandingSection />
            <Services Style='services1' />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Team />
            <ProjectDetails />
            <Brands />
            <Subscribe />
            <Footer />
        </div>
    )
}
