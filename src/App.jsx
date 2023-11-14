import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './routes/Home'
import { Productos } from './routes/Productos'
import { Contacto } from './routes/Contacto'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/Proyecto-5/' element={<Home />} />
        <Route path='/Proyecto-5/productos' element={<Productos />} />
        <Route path='/Proyecto-5/contacto' element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  )
}
