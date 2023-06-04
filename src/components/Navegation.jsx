import { Link } from "react-router-dom"
import './styles/Navegation.css'

function Navegation() {
  
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="logomovimiento">Caco</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li ><Link to='/'>Sobre Mi</Link></li>
            <li><Link to='/proyectos'>Proyectos</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navegation