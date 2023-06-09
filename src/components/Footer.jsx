import './styles/Footer.css'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';


function Footer() {
  return (
    <div className='pie'>
      <a href='https://www.linkedin.com/in/carlos-alberto-couste-montesdeoca-2b31bb204' target='_blank' rel='noopener noreferrer'>
        <SiLinkedin className='icono-perfiles'/>
      </a>
      <a href='https://github.com/cacotrico' target='_blank' rel='noopener noreferrer'>
        <SiGithub className='icono-perfiles'/>
      </a>
      <a href='https://www.instagram.com/cacoc35/' target='_blank' rel='noopener noreferrer'>
        <SiInstagram className='icono-perfiles'/>
      </a>
    </div>
  )
}

export default Footer