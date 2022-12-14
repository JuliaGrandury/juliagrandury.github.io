import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsKeyboard } from 'react-icons/bs'
import { BsFolder2 } from 'react-icons/bs'
import { BsChatLeftQuote } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");

  return (
    <nav>
      <a href="#" onClick={() => setActiveIcon("#")} className={activeIcon==="#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveIcon("#about")} className={activeIcon==="#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveIcon("#experience")} className={activeIcon==="#experience" ? "active" : ""}><BsKeyboard /></a>
      {/* <a href="#services" onClick={() => setActiveIcon("#services")} className={activeIcon==="#services" ? "active" : ""}><RiServiceLine /></a> */}
      <a href="#portfolio" onClick={() => setActiveIcon("#portfolio")} className={activeIcon==="#portfolio" ? "active" : ""}><BsFolder2 /></a>
      <a href="#testimonials" onClick={() => setActiveIcon("#testimonials")} className={activeIcon==="#testimonials" ? "active" : ""}><BsChatLeftQuote /></a>
      <a href="#contact" onClick={() => setActiveIcon("#contact")} className={activeIcon==="#contact" ? "active" : ""}><AiOutlinePhone /></a>
    </nav>
  )
}

export default Nav