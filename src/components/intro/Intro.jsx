import './intro.css';

import { FaAward } from 'react-icons/fa';
import React from 'react';
import { VscFolderLibrary } from 'react-icons/vsc';
import img from '../../assets/Me.jpeg';

const Intro = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={img} alt='Rasif Taghizade' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ year</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Full-Stack Developer currently focused on Front-End, specializing in
            React, JavaScript, TypeScript, and Flutter, creating intuitive and
            responsive interfaces and enhancing UX/UI skills.
            <br />
            <br />
            In addition to Front-End, I maintain knowledge in Artificial
            Intelligence, Python, and data science projects. I have practical
            experience with IBM Watson, IBM Cloud, Docker, MySQL, PostgreSQL,
            and Node.js, with a versatile background in Full-Stack development.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
