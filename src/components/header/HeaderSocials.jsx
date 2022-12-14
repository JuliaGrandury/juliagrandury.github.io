import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillMediumSquare } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jgrandury/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/JuliaGrandury" rel="noreferrer" target="_blank"><FaGithub /></a>
      <a href="https://medium.com/@juliagrandury" rel="noreferrer" target="_blank"><AiFillMediumSquare /></a>
    </div>
  )
}

export default HeaderSocials


