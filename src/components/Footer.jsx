import './styles/Footer.css'
import { SiLinkedin, SiGithub } from 'react-icons/si';


function Footer() {
  return (
    <div className='pie'>
      <a href='https://www.linkedin.com/in/carlos-alberto-couste-montesdeoca-2b31bb204' target='_blank' rel='noopener noreferrer'>
        <SiLinkedin className='icono-perfiles'/>
      </a>
      <a href='https://github.com/cacotrico' target='_blank' rel='noopener noreferrer'>
        <SiGithub className='icono-perfiles'/>
      </a>
    </div>
  )
}

export default Footer