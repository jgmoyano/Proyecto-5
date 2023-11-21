import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './routes/Home'
import { Productos } from './routes/Productos'
import { Contacto } from './routes/Contacto'
import { Footer } from './components/Footer'
import { AuthForm } from './AuthForm'
import { UserProvider } from './context/UserContext'

export const App = () => {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/Proyecto-5/' element={<Home />} />
          <Route path='/Proyecto-5/productos' element={<Productos />} />
          <Route path='/Proyecto-5/contacto' element={<Contacto />} />
          <Route path='/Proyecto-5/login' element={<AuthForm />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}
