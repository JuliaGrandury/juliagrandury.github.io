import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    name: 'Christopher Kuveke',
    title: 'CEO of Tiger Moth',
    review: 'I had the pleasure of working with her on my company website and internal products and absolutely love the girl. She\'s an extremely hard worker, a mature communicator and innovative mind that can tackle any task no matter how big or small. She worked tirelessly to get things done in a very professional manner. I am looking forward to working with Julia again in the future and believe anybody would be lucky to have her on their side!',
    relation: 'For whom I built multiple websites'
  },
  {
    name: 'Elaine Mir',
    title: 'Head of Stone Creek Inn',
    review: 'What we all know working with Julia is that she is smart, very kind, and intuitive. She always has a positive attitude, works hard and gracefully. Catering is difficult because we are never the same team and I don’t know the staff very well, so it’s often hard to get everyone in sync. Julia has natural leadership qualities that are so valuable but it’s her positive attitude and confidence that really make these qualities shine - so will SHE, once some lucky company hires her!',
    relation: 'For whom I worked as a Special Event Coordinator'
  },
  {
    name: 'Clara Charrin',
    title: 'Filmmaker',
    review: 'She\'s cool',
    relation: 'For whom I built a documentary website'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]} spaceBetween={40} slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonialData.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
