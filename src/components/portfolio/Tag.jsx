import React from 'react'

const tagColors = {
    'Open Source Contribution': 'rgba(255, 172, 30, 0.9)',
    'Freelance': 'rgba(255, 172, 30, 0.9)',
    'Personal Project': 'rgba(255, 172, 30, 0.9)',
    'HTML/CSS' : 'rgba(255, 85, 198, 0.8)',
    'Javascript' : 'rgba(255, 85, 198, 0.8)',
    'Python' : 'rgba(255, 85, 198, 0.8)',
    'Node.js' : 'rgba(255, 2, 255, 0.55)',
    'Express.js' : 'rgba(255, 2, 255, 0.55)',
    'React.js': 'rgba(0, 154, 255, 0.8)',
    'Vue.js': 'rgba(0, 154, 255, 0.8)',
    'Redux': 'rgba(255, 2, 2, 0.7)',
    'PostgreSQL' : 'rgba(255, 85, 0, 0.8)',
    'MongoDB' : 'rgba(255, 85, 0, 0.8)',
    'Netlify' : 'rgba(0, 255, 0, 0.5)',
    'Heroku' : 'rgba(0, 255, 0, 0.5)',
    'Surge' : 'rgba(0, 255, 0, 0.5)',
    'AWS' : 'rgba(0, 255, 0, 0.5)',
}
// Add testing!!!
// Add things like context api, rest api, maybe libraries like bcrypt 


const Tag = ({ label }) => {

    const tagStyles = {
        fontSize: '9px',
        color: 'white',
        margin: '2px 0px',
        padding: '2px 8px',
        borderRadius: '5px',
        fontWeight: 600,
        backgroundColor: `${tagColors[label]}`,
        border: '0.7px solid white'
    }

    return (
        <div style={tagStyles}>{label}</div>
    )
}

export default Tag