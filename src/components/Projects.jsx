import React from 'react'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import './projects.css'

const data=[
  {id:1,
   image: IMG1,
   title: 'A-Z Shop Using MERN Stack.',
   github: 'https://github.com/auqid/azshop',
   demo: 'https://azshop.onrender.com/'

  },

  {id:2,
   image: IMG2,
   title: 'Weather App using NodeJS.',
   github: 'https://github.com/auqid/weather-app',
   demo: 'https://github.com/auqid/weather-app'
  
    },
  {id:3,
   image: IMG3,
   title: 'TO-DO list using React Rick and Morty Theme.',
   github: 'https://github.com/auqid/todo-list-react',
   demo: 'https://github.com/auqid/todo-list-react',
  }



]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      
      <div className="container portfolio__container">
      
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href ={github} className='btn' target='blank'>Github</a>
                  <a href ={demo} className='btn btn-primary' target='blank'>Live Demo</a>

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