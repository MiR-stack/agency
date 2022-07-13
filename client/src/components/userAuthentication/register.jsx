import React,{useState,useContext} from 'react'
import {BiShow,BiHide} from 'react-icons/bi'
import {FaFacebook,FaTwitter,FaGoogle} from 'react-icons/fa'
import Context from '../../useContext'
import axios from 'axios'

export default function Register(){

    const {setTransParent,setForm,setUserAuth,setUser} = useContext(Context)

    const [Password,setPassword] = useState({
        password_S:true,
        cPassword_S:true
    })
    const {password_S,cPassword_S} = Password

    const data = {
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const [userData,setUserData] = useState(data)

    const {name,email,password,confirmPassword} = userData

    function handleChange(e){
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const [err,setErr] = useState(false)


  async  function register(e){
        e.preventDefault()
        if(name && email && password && confirmPassword && (password === confirmPassword)){
           try{
            const newUserData = {name,email,password}
            const newUser = await axios.post('/api/user/register',newUserData,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            })
            setUser(newUser.data)
            console.log(newUser)
            setUserData(data)
            setErr(false)
            setUserAuth(false)
            setTransParent(false)
           }catch(err){
               console.log(err)
           }

        }else{
            setErr(true)
        }
    }

    function button(){
        axios.get('/api/user/userAuth')
        .then(res => console.log(res))
        .catch(er => console.log(er))
    }


    return (
       <div className="login">
           <h1>Register</h1>
            <form onSubmit={register} >
                <table>
                  <tbody>
                  <tr className={(!name && err)?'err':null}>
                        <td><label htmlFor="userName">name</label></td>
                        <td>:</td>
                        <td>
                            <input type="text" name="name" value={name} id="userName" placeholder='Enter Your Name' onChange={handleChange} required />
                            <p>please enter your name</p>
                        </td>
                    </tr>
                    <tr className={(!email && err)?'err':null}>
                        <td><label htmlFor="email">email</label></td>
                        <td>:</td>
                        <td>
                        <input type="email" name="email" value={email} id="email" placeholder='Enter Your Email' onChange={handleChange} required />
                        <p>please enter your email</p>
                        </td>
                    </tr>
                    <tr className={(!password && err)?'err':null}>
                        <td><label htmlFor="password">password</label></td>
                        <td>:</td>
                        <td>
                            <div className="input_group">
                                <input type={password_S?'password':'text'} name="password" value={password} id="password" placeholder='Enter Your Password' onChange={handleChange} required />
                                {password_S?<BiHide onClick={()=>{setPassword({...Password,password_S:false})}} /> :<BiShow onClick={()=>{setPassword({...Password,password_S:true})}} />}
                            </div>
                            <p>please enter your password</p>
                        </td>
                    </tr>
                    <tr className={(!confirmPassword &&  (password !== confirmPassword) && err)?'err':null} >
                        <td><label htmlFor="confirmPasword">confirm pasword</label></td>
                        <td>:</td>  
                         <td>
                            <div className="input_group">
                            <input type={cPassword_S?'password':'text'} name="confirmPassword" value={confirmPassword} id="confirmPassword" placeholder='Confirm Your Password' onChange={handleChange} />
                            {cPassword_S?<BiHide onClick={()=>{setPassword({...Password,cPassword_S:false})}} /> : <BiShow onClick={()=>{setPassword({...Password,cPassword_S:true})}} />}
                            </div>
                            <p>{(!confirmPassword && "please enter your password again") || (password !== confirmPassword && "password not matched")} </p>
                         </td>
                    </tr>
                  </tbody>
                </table>
            <button type='submit'>register</button>
        </form>
        <div className='or'><span>or</span></div>
        <button onClick={button}>click</button>
        <div className="loginWith">
            <p>login with:</p>
            <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaGoogle />
            </div>
        </div>
        <p>already have an account? <strong onClick={()=>{setForm('login')}} >login here </strong> </p>
       </div>
    )
}