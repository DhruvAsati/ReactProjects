import React from 'react'
import{auth, googleAuth} from '../config/firebase'
import {signInWithPopup} from  'firebase/auth'

const Login = () => {
  
  const login = async () => {
      
    try {
      const res = await signInWithPopup(auth, googleAuth);
      console.log(res.user);
    } catch (error) {
      console.log(error);
    }
     
  }

  return (
    <div>
       <button onClick={login} className='bg-stone-100 text-lime-500'>
        Login with Google
     </button>
    </div>
  )
}

export default Login
