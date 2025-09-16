import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import useaxiossPublic from '../hooks/useaxiossPublic';

const Google = () => {
      const { axiosPublic } = useaxiossPublic();

    const {googleLogin}=useContext(AuthContext)
    const handleGoogleSignIn=()=>{

        googleLogin()
        .then(res=>{

            const email=res.user.email
            const user={email}

            axiosPublic.post('/users', user)
            .then(res=>{
                console.log(res)
            })


        })
    }
  return (
    <div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">CONTINUE WITH GOOGLE</button>
    </div>
  )
}

export default Google