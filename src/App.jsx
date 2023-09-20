import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './routes/Home'
import { Menu } from './routes/Menu'
import { Reservas } from './routes/Reservas'
import { ListaReservas } from './routes/ListaReservas'

export const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/Proyecto-4/' element={<Home/>}/>
      <Route path='/Proyecto-4/menu' element={<Menu/>}/>
      <Route path='/Proyecto-4/reservas' element={<Reservas/>}/>
      <Route path='/Proyecto-4/lista-reservas' element={<ListaReservas />} />
    </Routes>
    </>
  )
}
