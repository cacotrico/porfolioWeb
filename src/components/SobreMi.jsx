import './styles/Sobremi.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


function Sobremi() {
  return (
    <div className="container-sobremi">
        <div className="description">
            <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
        </div>
        <div> 
            <h1>Lenguajes aprendidos y los que estoy viendo</h1>
        </div>
        <Carousel>
          <div>
            <img src='' alt='Imagen 1'></img>
            <p className='legend'>Descripción de la imagen 1</p>
          </div>
          <div>
            <img src='' alt='Imagen 2'></img>
            <p className='legend'>Descripción de la imagen 2</p>
          </div>
          <div>
            <img src='' alt='Imagen 3'></img>
            <p className='legend'>Descripción de la imagen 3</p>
          </div>    
          <div>
            <img src='' alt='Imagen 4'></img>
            <p className='legend'>Descripción de la imagen 4</p>
          </div>
          <div>
            <img src='' alt='Imagen 5'></img>
            <p className='legend'>Descripción de la imagen 5</p>
          </div>
          <div>
            <img src='' alt='Imagen 6'></img>
            <p className='legend'>Descripción de la imagen 6</p>
          </div>
        </Carousel>
    </div>
    
  )
}

export default Sobremi