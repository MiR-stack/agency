import React from 'react'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Navbar from '../../navbar/navbar'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'

export default function ServiceDetails() {
    return (
        <div className='serviceDetails ' >
            <Navbar />
            <TopSection name='service Details' />
            <div className='section'>
                <section id='appDevelopment' >
                    <div className='image'><img src={require('../../Photos/development-02.jpg').default} alt="" /></div>
                    <div className="content">
                        <h2>app development</h2>
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
                </section >
                <section id='e-CommerceDevelopment' >
                    <div className='image'><img src={require('../../Photos/development-03.jpg').default} alt="" /></div>
                    <div className="content">
                        <h2>e-commerce development</h2>
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
                <section id='maketingStrategy'>
                    <div className='image'><img src={require('../../Photos/development-02.jpg').default} alt="" /></div>
                    <div className="content">
                        <h2>marketing strategy</h2>
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
                <section id='brandStrategy'>
                    <div className='image r'><img src={require('../../Photos/development-01.jpg').default} alt="" /></div>
                    <div className="content">
                        <h2>brand strategy</h2>
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
            </div>

            <Subscribe />
            <Footer />

        </div>
    )
}