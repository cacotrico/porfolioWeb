import perfil from './img/perfil.jpg'
import './styles/Inicio.css'

function Inicio() {
  return (
    <div className="container-inicio">
        <img src={ perfil } alt="mi imagen" className='mi-imagen' />
        <p className='sobreMi'>
            Aca va un pequeña descripcion sobre mi Aca va un pequeña descripcion sobre mi Aca va un pequeña descripcion sobre miAca va un pequeña descripcion sobre mi Aca va un pequeña descripcion sobre mi
        </p>
    </div>
  )
}

export default Inicio
