import './portfolio.css';

import IMG1 from '../../assets/portal3.png';
import IMG2 from '../../assets/Ecommerce.png';
import IMG3 from '../../assets/mobile.webp';
import IMG4 from '../../assets/Raise.png';
import IMG5 from '../../assets/Potsave.png';
import IMG6 from '../../assets/Health.png';
import React from 'react';

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Softinova Portal',
      img: IMG1,
      description:
        'Internal company portal is a streamlined hub for employees, offering interactive dashboards for real-time metrics and secure daily logins tailored to individual roles, enhancing collaboration and informed decision-making.',
      technologies: 'React.js | HTML | SCSS | Prime React',
      link: 'https://github.com/G-SF/projetoPortal',
    },
    {
      id: 2,
      title: 'E-Commerce',
      img: IMG2,
      description:
        'E-commerce portal serves as a dynamic hub for customers, featuring intuitive dashboards for real-time sales metrics and secure logins for personalized shopping experiences, enhancing convenience and customer satisfaction.',
      technologies: 'HTML | CSS | Twig',
      link: 'https://github.com/G-SF/htmlECommerce.git',
    },
    {
      id: 3,
      title: 'Listas Diárias',
      img: IMG3,
      description:
        'App focuses on efficient list management, allowing users to create and organize items and sub-items effortlessly. It enhances daily productivity by providing intuitive lists that streamline everyday tasks and activities.',
      technologies: 'Fluter | Dart ',
      link: 'https://github.com/G-SF/list_interview/tree/master',
    },
    {
      id: 4,
      title: 'Raise',
      img: IMG4,
      description:
        'Get started with free educational courses to mastery the foundations of startup equity as an African business.',
      technologies: 'Remix | React.js | Webflow | jQuery',
      link: 'Private Code',
    },
    {
      id: 5,
      title: 'Potsave',
      img: IMG5,
      description:
        'Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.',
      technologies: 'React | Next.js | Lodash | Tailwind CSS',
      link: 'Private Code',
    },
    {
      id: 6,
      title: 'Health',
      img: IMG6,
      description:
        "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
      technologies: 'Angular | Drupal | Nginx | TypeScript',
      link: 'Private Code',
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {soloProjects.map((pro) => (
          <article className='portfolio__item' key={pro.id}>
            <div className='portfolio__item-image'>
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className='portfolio__item-content'>
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className='portfolio__item-cta'>
              {pro.id >= 4 && pro.id <= 6 ? (
                <span className='btn btn-primary'>
                  Live Demo (Private Code)
                </span>
              ) : (
                <a
                  href={pro.link}
                  target='_blank'
                  className='btn btn-primary'
                  rel='noreferrer'
                >
                  Git Repository
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
