import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ProfilePic from '../../assets/profile.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey there, my name is</h5>
        <h1>Julia Grandury</h1>
        <h5 className='text-light'>and I'm a Software Engineer</h5>
        <CallToAction />
        <HeaderSocials />
        <div className='profilepic'>
          <img src={ProfilePic} alt="Julia profile" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header