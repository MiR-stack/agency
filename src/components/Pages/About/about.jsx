import React from 'react'
import './about.css'
import { ReactComponent as Teams } from '../../svg/team.svg'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Testimonial from '../../Blocks/Testimonial'
import Subscribe from '../../Blocks/Subscribe'
import Footer from '../../Blocks/Footer'
import Team from '../../Blocks/team'
import Quote from '../../Blocks/quote'
import FunFact from '../../Blocks/Fun_fact'
import ProjectDiscussion from '../../Blocks/Information/Project_details'
function About() {


    // function handleBuble() {

    //     var span = []
    //     for (let i = 0; i < 50; i++) {
    //         let Left = Math.floor(Math.random() * 90)
    //         let Top = Math.floor(Math.random() * 100)
    //         let HW = Math.floor(Math.random() * 150) + 20
    //         function color() {
    //             let MaxVal = 0xFFFFFF
    //             let randomNumber = Math.floor(Math.random() * MaxVal).toString(16)
    //             let rendomColor = randomNumber.padStart(6, 0)
    //             return `#${rendomColor.toUpperCase()}`

    //         }
    //         console.log(color())
    //         let style = {
    //             position: 'absolute',
    //             left: `${Left}%`,
    //             top: `${Top}%`,
    //             height: `${HW}px`,
    //             width: `${HW}px`,
    //             background: color(),
    //             borderRadius: '50%',
    //             transition: '3s linear',
    //             boxShadow: '0 0 20px black'
    //         }
    //         span.push(<span style={style}> </span>)
    //     }
    //     return span
    // }

    return (
        <div className='about'>

            <div className='top'>
                <div className="left">
                    <h2>about us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas nesciunt minima magnam ipsum, illum delectus maxime aperiam animi enim dicta adipisci, corporis ipsam laudantium culpa veritatis ab quaerat? Ratione dolore quidem earum aliquid provident pariatur vero accusantium, veniam, id, modi praesentium eos facilis culpa eligendi architecto debitis adipisci incidunt?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, harum!</p>
                </div>
                <div className="right">
                    <Teams className='image' />
                </div>
            </div>
            <div className="container">
                <div className="wraper">

                    <div className="Card">
                        <h2>who are we</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem sed doloribus quis porro. Eaque, tenetur, natus voluptate, similique repudiandae possimus consequatur ad tempora at esse eveniet excepturi veritatis quasi et veniam aut iste officiis provident laborum architecto quo doloremque dolorem? Eveniet nihil tenetur veniam nostrum quisquam, ut aliquid laudantium.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sit consequatur in at pariatur debitis facilis quas sunt magni nobis.</p>
                    </div>
                    <div className="Card">
                        <h2>our mission</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem sed doloribus quis porro. Eaque, tenetur, natus voluptate, similique repudiandae possimus consequatur ad tempora at esse eveniet excepturi veritatis quasi et veniam aut iste officiis provident laborum architecto quo doloremque dolorem? Eveniet nihil tenetur veniam nostrum quisquam, ut aliquid laudantium.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sit consequatur in at pariatur debitis facilis quas sunt magni nobis.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <TopSection name='about us' />
            <About />
            <Team title='meet our team'/>
            <Quote />
            <Testimonial />
            <FunFact />
            <ProjectDiscussion color={'mode1'} />
            <Subscribe />
            <Footer />
        </>
    )
}