import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navegation from './components/Navegation'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Sobremi from './components/Sobremi'

function App() {

  return (
    <div className="App">
      <Navegation />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremi' element={<Sobremi />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
