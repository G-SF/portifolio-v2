import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/marcelo-asf/',
      name: 'Marcelo Alves',
      role: 'Fullstack Developer',
      test: 'As a developer and a problem solver, I think Gabriel is a great collaborative partner to have. I met Gabriel in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/alessandro-polanski-409b0a187/',
      name: 'Alessandro Polanski',
      role: 'Software Engineer',
      test: "It was a pleasure collaborating with Gabriel on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/murilo-rerison-de-sousa-paz-9b6042168/',
      name: 'Murilo Rerison de Sousa Paz',
      role: 'Full Stack Developer',
      test: "I worked with Gabriel in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    },
  ];
  return (
    <section id='testimonials'>
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className='testimonial' key={test.id}>
            <div className='client__avatar'>
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className='client__review'>{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
