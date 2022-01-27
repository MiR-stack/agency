import React, { useState, useEffect } from 'react'
import { PricingD, PricingD2 } from './pricingData'
import './pricing.css'
import Navbar from '../../navbar/navbar'
import TopSection from '../../Blocks/PagesTopSection/pagesTopSection'
import Footer from '../../Blocks/Footer'

function Membership({ item, active, value, period }) {
    const { membership, price, features, id } = item

    return (
        <div className={`membership ${active} `} onMouseOver={value ? () => { value(id) } : null} onMouseOut={value && (id !== 2) ? () => { value(2) } : null}>
            <h3>{membership} </h3>
            <h4><sup>$</sup>{price}<sub>{period ? period : 'monthly'} </sub> </h4>
            {features.map((items, index) => <p key={index}>{items} </p>)}
            {item.discount && (item.discount > 5) ? <div className="discount">-{item.discount}% </div> : null}

            <button>choose</button>
        </div>
    )
}

function Pricing1() {
    const [active, setActive] = useState(2)
    return (
        <div className=' section'>
            <h1>choose a plan</h1>
            <p className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quos deserunt at eum cum fugit excepturi asperiores a, dolorem magni!</p>
            <div className="container wraper">
                {PricingD.map(item => <Membership active={active === item.id ? 'active' : null} key={item.id} item={item} value={setActive} />)}
            </div>
        </div>
    )
}

function Pricing2() {


    const [pricing, setPricing] = useState({
        membership: 'gold',
        price: 0,
        discount: 0,
        features: []

    })


    const [Features, setFeaturs] = useState([
        {
            feature: 'web design',
            price: .3
        },

        {
            feature: 'e-commerce development',
            price: .4,
        },
        {
            feature: 'ui/ux design',
            price: .3,
        },
    ])

    const [period, setPeriod] = useState('weekly')


    useEffect(() => {
        let Feature = []
        Features.map(item => Feature.push(item.feature))
        let price = Features.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
        }, 0)
        var Price;
        switch (period) {
            case 'weekly':
                Price = price * 7
                break;
            case 'monthly':
                Price = price * 30
                break;
            case 'yearly':
                Price = price * 365
                break;
            default:
                Price = 0
        }


        var membership;
        if (price < 1.5) {
            membership = 'gold'
        } else if (price < 2.5) {
            membership = 'platinum'
        } else {
            membership = 'diamond'
        }

        var discount = Math.ceil((Price - 50) / 6)
        if (discount > 45) {
            discount = 45
        } else if (discount < 5) {
            discount = 0
        }

        Price = Price - (Price * (discount / 100))


        setPricing({ discount: discount, membership: membership, price: Math.ceil(Price), features: Feature })
    }, [Features, period])

    function handleFeature(feature) {
        if (Features.some(e => e.feature === feature.feature)) {
            let Feature = Features.filter(item => item.feature !== feature.feature)
            setFeaturs(Feature)
        } else {
            let Feature = PricingD2.find(item => item.feature === feature.feature)
            setFeaturs([...Features, Feature])
        }
    }


    return (
        <div className='section manualPricing' >
            <h1>let's make a plan</h1>
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias nesciunt quaerat! Numquam quae iusto accusantium molestias molestiae laboriosam. Quis illum laboriosam nisi explicabo blanditiis.</p>
            <div className="container">
                <div className="left">
                    <div className="top">
                        <p>features</p>
                        <select name="time" id="" onChange={(e) => { setPeriod(e.target.value) }}>
                            <option value="weekly">weekly</option>
                            <option value="monthly">monthly</option>
                            <option value="yearly">yearly</option>
                        </select>
                    </div>
                    <ul className="features">
                        {PricingD2.map((item, index) => <li key={index}><input type="checkbox" checked={Features.some(e => e.feature === item.feature)} id={index} onChange={() => { handleFeature(item) }} /><label htmlFor={index}>{item.feature} </label></li>)}
                    </ul>
                </div>
                <div className="right">
                    <Membership item={pricing} period={period} />
                </div>
            </div>
        </div>
    )
}

export default function Pricing() {
    return (
        <div className='pricing'>
            <Navbar />
            <TopSection name='pricing' />
            <Pricing1 />
            <div className="or"><h2>OR</h2></div>
            <Pricing2 />
            <Footer />
        </div>
    )
}