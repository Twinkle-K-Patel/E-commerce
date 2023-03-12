import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import './Login.css'
import Store from '@material-ui/icons/Store';
import { auth } from "./firebase";

// In react-router-dom v6 useHistory() is replaced by useNavigate().

export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

    const signIn=(e)=>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                navigate ("/")
            })
            .catch(error=> alert (error.message))
            
    }

    const register=(e)=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate("/")
                }
            })
            .catch(error => alert(error.message))
    }

    return(
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <Store className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">E- Commerce</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>Email Id:</h5>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value )}></input>

                    <h5>Password:</h5>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button type="submit"  className='login__signInButton' onClick= {signIn} >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register} >Create your eShop Account</button>
            </div>

         </div>
    )
}