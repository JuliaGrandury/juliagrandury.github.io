import React from 'react'
import './about.css'
import ProfilePic from '../../assets/profile.jpeg'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know More</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ProfilePic}></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>5 Freelancing Projects</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Open Source Contributions</h5>
              <small>2</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>3 Personal Full Stack Projects</h5>
              <small>1+ Year Working</small>
            </article>
          </div>
          <p>
            I am a self-taught Software Engineer looking to work in a fast paced environment that will allow me to further sharpen my skills as a developer and learn from passionate and dedicated peers.
            I am specialized in the Front End but interested in the Full Stack - <a href="#experience">see my stack</a>.
            My professional areas of interest include but are not limited to marine biology and exploration, racial and gender bias in AI and access to online mental and physical health care.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About