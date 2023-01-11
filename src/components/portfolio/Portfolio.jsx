import React from 'react'
import './portfolio.css'
import noimage from '../../assets/noimage.png'
import proj_phoenix from '../../assets/proj_phoenix.png'
import proj_website2 from '../../assets/proj_website2.png'
import proj_chromeextension from '../../assets/proj_chromeextension.png'
import proj_midasreact from '../../assets/proj_midasreact.png'
import proj_claradocsite from '../../assets/proj_claradocsite.png'
import Tag from './Tag'

const portfolioProjects = [
  {
    id: 1,
    image: proj_phoenix,
    title: 'Phoenix App',
    github: 'https://github.com/JuliaGrandury/phoenix-app-pern',
    demo: '',
    tags: ['Personal Project', 'PostgreSQL', 'Express.js', 'React.js', 'Redux', 'Node.js'],
  },
  {
    id: 2,
    image: noimage,
    title: 'LifeCycle App',
    github: 'https://github.com/JuliaGrandury/lifecycle-app-mern',
    demo: '',
    tags: ['Personal Project', 'MongoDB', 'Express.js', 'React.js', 'Redux', 'Node.js'],
  },
  {
    id: 3,
    image: noimage,
    title: 'Tiger Moth Website',
    github: '',
    demo: '',
    tags: ['Freelance', 'HTML/CSS', 'Javascript'],
  },
  {
    id: 4,
    image: noimage,
    title: 'ACG Art Website',
    github: '',
    demo: '',
    tags: ['Freelance', 'React.js'],
  },
  {
    id: 5,
    image: proj_midasreact,
    title: 'Midas Spotify App',
    github: 'https://github.com/JuliaGrandury/midas-spotify-react',
    demo: 'http://midas-spotifyapp.surge.sh/',
    tags: ['Personal Project', 'React.js', 'Surge'],
  },
  {
    id: 6,
    image: noimage,
    title: 'Web Scraper and Reservation Bot',
    github: '',
    demo: '',
    tags: ['Personal Project', 'Node.js'],
  },
  {
    id: 7,
    image: proj_chromeextension,
    title: 'Brighter Days Chrome Extension',
    github: 'https://github.com/JuliaGrandury/brighterdays-extension',
    demo: null,
    tags: ['Personal Project', 'Node.js'],
  },
  {
    id: 8,
    image: proj_claradocsite,
    title: 'Yawash Yawash Documentary Website',
    github: 'https://github.com/JuliaGrandury/claradocsite_react',
    demo: 'https://juliagrandury.github.io/claradocsite_react/',
    tags: ['Freelance', 'React.js'],
  },
  {
    id: 9,
    image: proj_website2,
    title: 'Portfolio Website Iteration 2',
    github: 'https://github.com/JuliaGrandury/juliagrandury-iteration2',
    demo: 'https://juliagrandury.github.io/juliagrandury-iteration2/',
    tags: ['Personal Project', 'React.js'],
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Work from 2022-2023</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolioProjects.map((project) => {
            return (
              <article key={project.id} className='portfolio__item'>
                <div className='portfolio__item-tags'>
                  {project.tags.map((tag) => <Tag label={tag} />)}
                </div>
                <div className='portfolio__item-image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h5>{project.title}</h5>
                <div className='portfolio__item-calltoaction'>
                  <a href={project.github} className='btn' target='_blank'>Github</a>
                  {project.demo !== null ? <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a> : ''}
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