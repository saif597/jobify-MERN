import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Welcome to Jobify - your ultimate job application tracker! Say
            farewell to losing track of countless job submissions. Our
            streamlined web application optimizes your job hunting process,
            providing a unique and attractive experience. Take charge of your
            career journey with Jobify!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/signin' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
