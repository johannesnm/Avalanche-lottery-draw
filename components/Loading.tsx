import React from 'react'
import SkewLoader from 'react-spinners/SkewLoader'

function Loading() {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'> 
      <SkewLoader color='red' size={30}/>
      <h1 className='text-lg text-white font-bold mt-5'>Loading...</h1>
    </div>
  )
}

export default Loading