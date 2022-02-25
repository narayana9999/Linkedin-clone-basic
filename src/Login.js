import React from 'react';
import {useState} from 'react';
import {auth} from './firebase';
import {login} from './features/userSlice';
import {useDispatch} from 'react-redux';
import './Login.css';

function Login(){
    const [name, setName]= useState('');
    const [profilePic, setProfilePic]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const dispatch = useDispatch();
    console.log(name)

    const loginToApp =(e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth) => {
            console.log('userAuth',userAuth)
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                profileUrl: userAuth.photoUrl
            }))
        }).catch((error) => alert(error.message))
}
const register= () =>{
    if(!name){
        return alert('Please enter full name')
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth)=>{
        userAuth.user.updateProfile({
            displayName: name,
            photoUrl: profilePic,

        }).then(() =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
        })
    })
    .catch((error) => alert(error));

}

    return(
        <div className='login_container'>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png' alt=" "/>
            <form>
                <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='Full name(required if new)'></input>
                <input value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} type='text' placeholder='Profile PicUrl(optional)'></input>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='email'></input>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password'></input>
                <button className='signin_button' type='submit' onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?
                <span className='register_option' onClick={register}>Register Now</span>
            </p>
        
        </div>
    )
}

export default Login  
 