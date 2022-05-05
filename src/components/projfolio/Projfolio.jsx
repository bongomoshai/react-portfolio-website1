import React from 'react'
import './projfolio.css'
import IMG1 from '../../assets/portfolio5.png'
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project Anion",
    github: "https://github.com",
    demo: "https://github.com",
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: "Fake News Detection",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Fake News Detection",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
];
const projfolio = () => {
  return (
<section id='projfolio'>
      <h2>My recent Work</h2>
      <div className='container portfolio_container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a
                  rel='noreferrer'
                  href={github}
                  className='btn'
                  target='_blank'>
                  Github
                </a>
                <a
                  rel='noreferrer'
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default projfolio