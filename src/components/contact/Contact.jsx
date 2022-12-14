import React, { useRef } from 'react'
import './contact.css'

const Contact = () => {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required></input>
          <input type="email" name="email" placeholder='Your Email' required></input>
          <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact