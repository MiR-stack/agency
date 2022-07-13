import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import { FiMenu,FiMoreVertical, FiUser } from 'react-icons/fi'
import './navbar.css'
import Context from '../../useContext'

export default function Nav({ Style }) {


    const {mode,handleMode,setForm,setTransParent,setUserAuth,user} = useContext(Context)

    const [open, setOpen] = useState({
        home: false,
        services: false,
        work: false,
        blog: false,
        pages: false,
        closeAll: false,
        userAuth:false
    })
    const { home, services, work, blog, pages, closeAll,userAuth } = open
    const [lastScroll, setLastScroll] = useState(0)
    const [nav, setNav] = useState(false)

    const [minNav, setMinNav] = useState(false)

    function close() {
        setMinNav(false)
        setOpen({ closeAll: true })

    }





    function handleNav() {
        let currentScroll = window.scrollY
        if (currentScroll > 100) {
            if (currentScroll < lastScroll) {
                setNav(true)
            } else {
                setNav(false)
            }
        } else {
            setNav(false)
        }
        setLastScroll(currentScroll)
    }


    useEffect(() => {
        window.addEventListener('scroll', handleNav)

        return () => {
            window.removeEventListener('scroll', handleNav)
        }
    })

    // handle user authentication 
    function handleForm(form){
        setTransParent(true)
        setForm(form)
        setUserAuth(true)
    }

    function User(){
        if(user){
            return(
                <li><Link to='/userDashboard'><div className="user">{user.image?<img src={`/images/user/${user.image}`} alt={user.name} />:<FiUser />} </div></Link></li>
            )
        }else{
            return(
                <li className='dropdown-menu '>
                <div className="name user-name" onClick={() => { setOpen({ userAuth: !userAuth }) }} onMouseOver={() => { setOpen({ ...open, closeAll: false }) }}> <FiMoreVertical /><p>profile</p></div>
                <div className={`dropdown-container user-dropdown ${userAuth ? 'dropdown-container-open' : ''}`} style={closeAll ? { display: 'none' } : {}} onClick={close}>
                    <p onClick={()=>{handleForm('login')}} >login</p>
                    <p onClick={()=>{handleForm('register')}} >sign up</p>
                </div>
            </li>
            )
        }
    }

    return (
             <div className={`navbar ${nav ? 'nav-show' : ''} ${mode ? '' : Style}`} onChange={() => { setOpen({ ...open, pages: false }) }}>
                <div className={`dumb ${minNav ? 'dumb-open' : ''}`} onClick={close}></div>
                <div className="brand-name">
                    <Link to='/'  ><h1>unicorn</h1></Link>
                </div>
                <ul className={`min-nav ${minNav ? 'min-nav-open' : ''}`}>
                    <li className="title">
                        <Link to='/' onClick={close}>unicorn</Link>
                        <FaTimes onClick={close} />
                    </li>
                    <li className='dropdown-menu'>
                        <div className="name" onClick={() => { setOpen({ home: !home }) }} onMouseOver={() => { setOpen({ ...open, closeAll: false }) }}> <p >home</p> <FaChevronDown /> <span></span></div>
                        <div className={`dropdown-container ${home ? 'dropdown-container-open' : ''}`} style={closeAll ? { display: 'none' } : {}} onClick={close}>
                            <Link to='/' onClick={handleMode}>main demo</Link>
                            <Link to='/darkMode' onClick={() => { handleMode('dark') }}>dark mode</Link>
                        </div>
                    </li>
                    <li className='dropdown-menu'>
                        <div className="name" onClick={() => { setOpen({ services: !services }) }} onMouseOver={() => { setOpen({ ...open, closeAll: false }) }}> <p>services</p> <FaChevronDown />  <span></span></div>

                        <div className={`dropdown-container ${services ? 'dropdown-container-open' : ''}`} style={closeAll ? { display: 'none' } : {}} onClick={close}>
                            <Link to='/services1'>services 1</Link>
                            <Link to='/services2'>services 2</Link>
                            <Link to='/services3'>services 3</Link>
                            <Link to='/servicesDetails'>service details</Link>
                        </div>
                    </li>
                    <li className='dropdown-menu'>
                        <div className="name" onClick={() => { setOpen({ work: !work }) }} onMouseOver={() => { setOpen({ ...open, closeAll: false }) }}> <p>work</p>  <FaChevronDown /> <span></span></div>
                        <div className={`dropdown-container ${work ? 'dropdown-container-open' : ''}`} style={closeAll ? { display: 'none' } : {}} onClick={close}>
                            <Link to='/work1'>work1</Link>
                            <Link to='/work2'>work2</Link>
                            <Link to='/workDetails'>work details</Link>
                        </div>
                    </li>
                    <li className='dropdown-menu'>
                        <div className="name" onClick={() => { setOpen({ blog: !blog }) }} onMouseOver={() => { setOpen({ ...open, closeAll: false }) }}> <p >blog</p> <FaChevronDown /> <span></span></div>
                        <div className={`dropdown-container ${blog ? 'dropdown-container-open' : ''}`} style={closeAll ? { display: 'none' } : {}} onClick={close}>
                            <Link to='/blog' >blog</Link>
                            <Link to='/blogDetails'>blog details</Link>
                        </div>
                    </li>
                    <li className='dropdown-menu'>
                        <div className="name" onClick={() => { setOpen({ pages: !pages }) }} onMouseOver={() => { setOpen({ ...open, closeAll: false }) }} > <p>pages</p>  <FaChevronDown /> <span></span></div>
                        <div style={closeAll ? { display: 'none' } : {}} className={`dropdown-container ${pages ? 'dropdown-container-open' : ''}`} onClick={close}>
                            <Link to='/services1'>services1</Link>
                            <Link to='/services2'>services2</Link>
                            <Link to='/services3'>services3</Link>
                            <Link to='/servicesDetails'>service details</Link>
                            <Link to='/work1'>portfolio1</Link>
                            <Link to='/work2'>portfolio2</Link>
                            <Link to='/workDetails'>work details</Link>
                            <Link to='/blog'>blog</Link>
                            <Link to='/blogDetails'>blog details</Link>
                            <Link to='/contact'>contact</Link>
                            <Link to='/pricing'>Pricing</Link>
                            <Link to='/about'>about</Link>
                            <Link to='/error'>error</Link>
                        </div>
                    </li>
                    <li><Link to='/contact'><div className="name"><p>contact </p> <span></span></div> </Link></li>

                    <User />
                </ul>
               
                <div className="menu" onClick={() => setMinNav(true)}><FiMenu /></div>
            </div>
    )
}
