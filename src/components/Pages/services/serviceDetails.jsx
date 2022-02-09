import React from 'react'
import TopSection from '../../Blocks/PageTopSection'
import Navbar from '../../navbar/navbar'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'
import {data} from '../../Blocks/ServiceData'


function Details({service}){
    return(
        <section id={service.id} >
             <div className='image'><img src={service.image} alt="" /></div>
                    <div className="content">
                        <h2>{service.title} </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis adipisci at aut, nisi magnam eaque harum voluptatibus, nam hic facere, illo ipsam molestias deleniti. Porro repellat, provident odit at error placeat culpa dolorem adipisci corrupti vero. Praesentium temporibus assumenda, accusamus quisquam facilis nam doloribus consequuntur officia blanditiis consectetur ratione magni.</p>
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                        <ul>
                            <li> sit amet consectetur, adipisicing elit.</li>
                            <li>ipsum dolor sit amet consectetur adipisicing.</li>
                            <li>consectetur adipisicing.</li>
                            <li> Officiis adipisci at aut.</li>
                            <li> nisi magnam eaque harum voluptatibus.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis architecto accusantium, id culpa et. Reiciendis impedit, hic repudiandae illo eum voluptatem quasi dolor exercitationem at? Eaque aperiam cupiditate nostrum.</p>
                    </div>
        </section>
    )
}


export default function ServiceDetails() {
    return (
        <div className='serviceDetails ' >
            <Navbar />
            <TopSection name='service Details' />
            <div className='section'>
               {data.map(service => <Details key={service.id} service={service} />)}
            </div>

            <Subscribe />
            <Footer />

        </div>
    )
}