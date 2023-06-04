import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navegation from './components/Navegation'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Navegation />
      <Routes>
        <Route path='/' element={<SobreMi />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
