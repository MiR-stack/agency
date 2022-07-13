import React,{useContext} from 'react'
import Login from './login'
import Register from './register'
import Context from '../../useContext'
import {AiOutlineClose} from 'react-icons/ai'
import './userAuth.css'

export default function UserAuth() {

    const {userAuth,setUserAuth,form,setForm,transparent,setTransParent} = useContext(Context)

  function closeModal(){
    setTransParent(false)
    setUserAuth(false)
  }

  return (
      <>   
      <div className={`transparent ${transparent?'tr_S':''}`} onClick={closeModal}></div>
    <div className={`auth ${userAuth?'auth_S':''}`}>
       <div className="wrapper">
       <AiOutlineClose className='close' onClick={closeModal} />
        {form === 'login'?<Login setForm={setForm} />:<Register setForm={setForm} />}
       </div>
    </div>
      </>
  )
}
