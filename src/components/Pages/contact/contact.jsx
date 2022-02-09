import React from 'react'
import './contact.css'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PageTopSection'
import Information from '../../Blocks/Information/Project_details'
import Footer from '../../Blocks/Footer'

export default function Contact() {
    return (
        <div >
            <Navbar />
            <TopSection name='contact' />
            <div className="contact">
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29212.140433918732!2d90.34226043184367!3d23.76457761325708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1644128262766!5m2!1sen!2sbd" title='map' style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <Information />
            <Footer />
        </div>
    )
}
