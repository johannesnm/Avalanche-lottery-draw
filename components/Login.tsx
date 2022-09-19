import React from 'react'
import { useMetamask, useDisconnect } from '@thirdweb-dev/react';

function Login() {

    const login = useMetamask();


  return (

    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center'>
        

        <img
            className='rounded-full h-56 w-56 mb-10'
            src='https://seeklogo.com/images/A/avalanche-avax-logo-440813952D-seeklogo.com.png'
            /> 
            <h1 className='text-5xl text-white font-bold'>Avalanche lottery draw</h1>
            <h2 className='text-white'> Login to enter the lottery</h2>
            <button className='bg-white py-5 px-10 mt-10 rounded-lg shadow-lg font-bold ' onClick={login}>Login with Metamask</button>

    <button className=''></button>
    </div>


  )
}

export default Login