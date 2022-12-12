import React from 'react'
import Resume from '../../assets/GranduryJulia_Resume.pdf'

const CallToAction = () => {
  return (
    <div className='calltoaction'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CallToAction