import { Link } from "react-router-dom"
import './styles/Navegation.css'
import { FiMenu } from 'react-icons/fi'

function Navegation() {
  
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="logomovimiento">Caco</h1>
        </div>
        <button className="menu-toggle"><FiMenu/></button>
        <div className="nav-links">
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/sobremi'>Sobre Mi</Link></li>
            <li><Link to='/proyectos'>Proyectos</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navegation