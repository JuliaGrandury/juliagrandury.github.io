import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__content">
          <p>
            I am a self-taught Software Engineer looking to work in a fast paced environment that will allow me to further sharpen my skills as a developer and learn from passionate and dedicated peers.
            I am specialized in the Front End but interested in the Full Stack - <a href="#experience">see my stack</a>.
            My professional areas of interest include but are not limited to marine biology and exploration, racial and gender bias in AI and access to online mental and physical health care.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <h3>+1 year Freelancing</h3>
            </article>
            <article className="about__card">
              <h3>+2 Open Source Contributions</h3>
            </article>
            <article className="about__card">
              <h3><a href="https://devpost.com/software/justice-1zmbni" target="_blank">+1 Hackathon</a></h3>
            </article>
            <article className="about__card">
              <h3>+2 Blog Posts</h3>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About