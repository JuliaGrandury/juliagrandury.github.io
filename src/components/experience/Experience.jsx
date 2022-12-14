import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Technical Skills</h2>

      <div className="container experience__container">

        <div className="experience__stack">
          <h3>My Current Stack</h3>
          <div className="experience__content stack">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript & Typescript</h4>
                <small className="text-light">+3 years and +1 year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React & Redux</h4>
                <small className="text-light">+1 year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">+1 year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL & PostgreSQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML/CSS</h4>
                <small className="text-light">+4 years</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__courses">
          <h3>Courses & Certifications</h3>
          <div className="experience__content course">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>The Full Stack Engineer Career Path</h4>
                <small className="text-light">Codecademy</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Foundations of Humane Technology</h4>
                <small className="text-light">Center for Humane Technology</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AWS Developer Certification</h4>
                <small className="text-light">Amazon Web Services</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Version Control with Git</h4>
                <small className="text-light">Coursera</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Design Databases with PostgreSQL</h4>
                <small className="text-light">Codecademy</small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience