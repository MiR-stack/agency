import React,{useState,useContext} from 'react'
import {BiShow,BiHide} from 'react-icons/bi'
import {FaFacebook,FaTwitter,FaGoogle} from 'react-icons/fa'
import Context from '../../useContext'
import axios from 'axios'



export default function Login(){
    const {setTransParent,setForm,setUserAuth,setUser} = useContext(Context)

    const [Password,setPassword] = useState(true)

    const data ={
        email:'',
        password:''
    }
    const [userInfo,setUserInfo] = useState(data)
    const {email,password} = userInfo

    function handleChange(e){
        setUserInfo({...userInfo, [e.target.name]:e.target.value})
    }

    const [err,setErr] = useState(false)

  async  function login(e){
        e.preventDefault()

        if(email && password){
           const user = await axios.get(`/api/user/login?email=${email}&password=${password}` ,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            })
            setUser(user.data)
            console.log(user)
            setUserInfo(data)
            setErr(false)
            setUserAuth(false)
            setTransParent(false)
        }else{
            setErr(true)
        }

    }
   
    return(
        <div className="login">
        <h1>login</h1>
        <form onSubmit={login} action="">
            <table>
               <tbody>
               <tr className={(!email && err)?'err':null}>
                    <td><label htmlFor="email">email</label></td>
                    <td>:</td>
                    <td>
                         <input type="email" name="email" value={email} placeholder='Enter Your Email' id="email" onChange={handleChange} required />
                        <p>please enter your email</p>
                    </td>
                </tr>
                <tr  className={(!password && err)?'err':null}>
                    <td><label htmlFor="password">password</label></td>
                    <td>:</td>
                    <td>
                        <div className="input_group">
                            <input type={Password?'password':'text'} name="password" value={password} placeholder='Enter Your Password' id="password" onChange={handleChange} required />
                            {Password?<BiHide onClick={()=>{setPassword(true)}} />:<BiShow onClick={()=>{setPassword(false)}}/>}
                        </div>
                        <p>please enter your password</p>
                    </td>
                </tr>
               </tbody>
            </table>

           <button type="submit">login</button>
        </form>
        <div className='or'><span>or</span></div>
        <div className="loginWith">
            <p>login with:</p>
            <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaGoogle />
            </div>
        </div>
        <p>didn't have an account? <strong onClick={()=>{setForm('register')}} >register here </strong> </p>
    </div>
    )
}