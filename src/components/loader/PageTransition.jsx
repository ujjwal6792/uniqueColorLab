import React from 'react'
import Logo from '../../assets/Logo.svg'

const PageTransition = () => {
  return (
    <div className='flex flex-col min-h-[100vh] p-20 justify-center items-center'>
        <img className='animate-pulse w-1/4' src={Logo} alt="" />
        <p className='text-blue-dark'>
        LOADING 
        <span className='animate-ping'>.</span>
        <span className='animate-ping'>.</span>
        <span className='animate-ping'>.</span>
        </p>
    </div>

  )
}

export default PageTransition