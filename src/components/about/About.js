import React from 'react'
import './about.css'
import ME from '../../assets/smile.jpg'
import {FaAward} from 'react-icons/fa'
import {FaProjectDiagram} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About my image" />
          </div>
        </div>

        <div className='about_content'>

          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ years Working</small>

            </article>

            <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Clients</small>

            </article>

            <article className='about_card'>
              <BsFillPeopleFill className='about_icon'/>
              <h5>Project</h5>
              <small>20+ Project</small>

            </article>

          </div>

        <p>
        I consider myself a hardworking person. To pursue a challenging career in a competitive world. A self- motivated and enthusiastic web developer with a deep interest in JavaScript.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About;