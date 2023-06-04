import perfil from './img/perfil.jpg'
import './styles/SobreMi.css'

function SobreMi() {
  return (
    <div className="container-inicio">
        <img src={ perfil } alt="mi imagen" className='mi-imagen' />
        <p className='sobreMi'>
            Aca va un pequeña descripcion sobre mi
        </p>
    </div>
  )
}

export default SobreMi
