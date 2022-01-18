import React, { useState } from 'react'
import Step01 from './Step_01'
import Step02 from './Step_02'
import Step03 from './Step_03'
import { AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai'

export default function Project({color}) {


    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        userName: "",
        phone: '',
        companyName: '',
        email: '',
        budget: '',
        projectTitle: '',
        projectDetails: ''

    })

    const { userName, phone, companyName, email, budget, projectTitle, projectDetails } = data

    const [error, setError] = useState(false)
    const [img, setImg] = useState(true)
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    function Activate() {
        if (step === 2) {
            return 'active activate '
        } else if (step > 2) {
            return 'activate '
        }
    }

    function onChangeHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleInput = () => {
        if (step === 1) return <Step01 prop={{ error, onChangeHandler, phone, userName }} />
        if (step === 2) return <Step02 prop={{ error, onChangeHandler, companyName, email, budget }} />
        if (step === 3) return <Step03 prop={{ error, onChangeHandler, projectTitle, projectDetails }} />
    }
    const nextHandler = () => {
        if (step === 1) {
            if (userName && phone) {
                setStep(2)
                setError(false)
                setImg(false)
            } else {
                setError(true)
            }
        } else if (step === 2) {
            if (companyName && email && budget) {
                setStep(3)
                setError(false)
            } else {
                setError(true)
            }
        }

    }

    const submitHandler = () => {
        if (projectTitle && projectDetails) {
            setError(false)
            console.log(data)
            setModal(false)
            setImg(true)
            setStep(1)
            setData({
                userName: "",
                phone: '',
                companyName: '',
                email: '',
                budget: '',
                projectTitle: '',
                projectDetails: ''

            })
            setModal2(true)
            setTimeout(() => setModal2(false), 1500)
        } else {
            setError(true)
        }
    }



    return (
        <div className={`information section ${color}`}>

            <div className="wrapper">
                <div className={(modal || modal2) ? 'dummy' : ''} onClick={() => { setModal(false) }}></div>
                <div className={`modal2 ${modal2 ? 'success' : 'none'}`}>
                    <AiOutlineCheckCircle style={{ color: 'green', fontSize: '30px', marginBottom: '20px' }} />
                    <p> submited successfully</p>
                </div>
                <div className="left">
                    <div className="title">
                        <h2>lets talk,</h2>
                        <p>about your Project</p>
                    </div>
                    <div className={`btns ${((step === 2) && 'step_02') || ((step === 3) && 'step_03')}`}>
                        <div className={`button ${step === 1 ? 'active activate' : 'activate'}`}>
                            <button>1</button>
                            <p>basic information</p>
                        </div>
                        <div className={`button ${Activate()}`}>
                            <button>2</button>
                            <p className='show'>project budget</p>
                        </div>
                        <div className={`button ${step === 3 ? 'active activate' : ''}`}>
                            <button>3</button>
                            <p>project details</p>
                        </div>
                    </div>
                    <div className="project-details">
                        {handleInput()}
                    </div>
                    <div className="submit">
                        <div className="wrapper">
                            {((step === 2) || (step === 3)) && <button onClick={() => { setStep(step - 1) }}>back</button>}
                            {((step === 1) || (step === 2)) && <button className={step === 1 ? 'btn-s' : ''} onClick={() => { nextHandler() }}>next</button>}
                            {step === 3 && <button onClick={() => { submitHandler() }}  >submit</button>}
                        </div>
                    </div>
                </div>
                <div className="right" >
                    <img style={img ? { display: 'block' } : { display: 'none' }} src={require('../../Photos/news-02.jpg').default} alt="" />

                    <div className={`paragraph ${modal ? 'paragraph-m' : ''}`} style={img ? { display: 'none' } : { display: 'block' }} >
                        <AiOutlineClose style={modal ? { position: 'absolute', right: '15px', top: '15px', display: 'block', cursor: 'pointer' } : { display: 'none' }} onClick={() => { setModal(false) }} />
                        <table onClick={() => { setModal(true) }}>
                            <tbody>
                                <tr style={userName ? { display: 'table-row' } : { display: 'none' }}>
                                    <th>name</th>
                                    <td>: {userName}</td>
                                </tr>
                                <tr style={phone ? { display: 'table-row' } : { display: 'none' }}>
                                    <th>phone</th>
                                    <td>: {phone}</td>
                                </tr>
                                <tr style={companyName ? { display: 'table-row' } : { display: 'none' }}>
                                    <th>company name</th>
                                    <td>: {companyName}</td>
                                </tr >

                                <tr style={email ? { display: 'table-row' } : { display: 'none' }}>
                                    <th>email</th>
                                    <td>: {email}</td>
                                </tr>
                                <tr style={budget ? { display: 'table-row' } : { display: 'none' }}>
                                    <th>budget</th>
                                    <td>: {budget}</td>
                                </tr>
                            </tbody>

                        </table>
                        <h3>{projectTitle}</h3>
                        <p>{projectDetails}</p>
                        <button style={(modal && userName && phone && companyName && email && budget && projectTitle && projectDetails) ? { display: 'block' } : { display: 'none' }} onClick={() => { submitHandler() }}  >submit</button>
                    </div>
                </div>
            </div>

        </div >
    )
}
