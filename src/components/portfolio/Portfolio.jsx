import React from 'react'
import './portfolio.css'
import website_iteration_2 from '../../assets/website_iteration_2.png'
//import picture phoenix
//import picture of lifecycle

const portfolioProjects = [
  {
    id: 1,
    image: website_iteration_2,
    title: 'Phoenix App',
    github: 'https://github.com/JuliaGrandury/phoenix-app-pern',
    demo: ''
  },
  {
    id: 2,
    image: website_iteration_2,
    title: 'LifeCycle App',
    github: 'https://github.com/JuliaGrandury/lifecycle-app-mern',
    demo: ''
  },
  {
    id: 3,
    image: website_iteration_2,
    title: 'Tiger Moth Website',
    github: '',
    demo: ''
  },
  {
    id: 4,
    image: website_iteration_2,
    title: 'ACG Art Website',
    github: '',
    demo: ''
  },
  {
    id: 5, 
    image: website_iteration_2,
    title: 'Midas Spotify App',
    github: 'https://github.com/JuliaGrandury/midas-spotify-react',
    demo: 'http://midas-spotifyapp.surge.sh/'
  },
  {
    id: 6, 
    image: website_iteration_2,
    title: 'Web Scraper and Reservation Bot',
    github: '',
    demo: ''
  },
  {
    id: 7, 
    image: website_iteration_2,
    title: 'Brighter Days Chrome Extension',
    github: '',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolioProjects.map((project) => {
            return (
              <article key={project.id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className='portfolio__item-calltoaction'>
                  <a href={project.github}className='btn' target='_blank'>Github</a>
                  <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio