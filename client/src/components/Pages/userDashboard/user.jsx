import React,{useContext} from 'react'
import Context from '../../../useContext'
import axios from 'axios'

export default function User(props){

    const {user,setUser,setTransParent,setUserAuth} = useContext(Context)

    function logout(){
        axios.get('/api/user/logout', {
            params:{userId:user._id},
            withCredentials:true
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.history.push('/')
        setTransParent(true)
        setUserAuth(true)
        setUser()
    }

    return(
        <div className='userDashboard'>
            <p>hi {user.name}. welcome to your dashboard </p>
            <button onClick={logout}> logout</button>
        </div>
    )
}