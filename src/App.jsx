import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './routes/Home'
import { Menu } from './routes/Menu'
import { Reservas } from './routes/Reservas'
import { ListaReservas } from './routes/ListaReservas'
import { Contacto } from './routes/Contacto'
import { Domicilio } from './routes/Domicilio'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/Proyecto-4/' element={<Home />} />
        <Route path='/Proyecto-4/menu' element={<Menu />} />
        <Route path='/Proyecto-4/reservas' element={<Reservas />} />
        <Route path='/Proyecto-4/lista-reservas' element={<ListaReservas />} />
        <Route path='/Proyecto-4/contacto' element={<Contacto />} />
        <Route path='/Proyecto-4/domicilio' element={<Domicilio />} />
      </Routes>
      <Footer/>
    </>
  )
}
