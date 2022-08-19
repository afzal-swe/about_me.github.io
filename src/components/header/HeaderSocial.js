import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'



const HeaderSocial = () => {
  return (
    <div className='header_socials'>

        <a href="https://www.linkedin.com/in/afzal-swe/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/afzal-swe" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/afzalswe" target="_blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocial