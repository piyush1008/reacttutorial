import React from 'react';
import "./Login.css";
import {auth,provider} from './firebase';
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const[state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{ 
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            
        }).catch(error=>alert(error.message ));

    };
    return (
        <div className="login">
            <div className="login_logo">
                <img 
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt=" "
                    
                />
                <img
                    src="https://www.spgraphics.com.au/showpony_content/uploads/2020/02/kisspng-facebook-computer-icons-logo-lentera-ramadan-5b38bfe718d312.0936787915304457991017.jpg" alt=" "
                />
            </div>
            <button type="submit" onClick={signIn} >Sign In</button>
            
        </div>
    )
}

export default Login;
