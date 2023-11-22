import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './routes/Home'
import { Productos } from './routes/Productos'
import { Contacto } from './routes/Contacto'
import { Footer } from './components/Footer'
import {Profile } from './routes/Profile'
import { AuthForm } from './AuthForm'
import { UserProvider, UserContext } from './context/UserContext'
import { useContext } from 'react'


const ProtectedRoute = () => {
  const token = localStorage.getItem("token")
  
  if (!token) {
    return <Navigate to="/Proyecto-5/login" replace />;
  }

  return <Outlet />;
};

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

          <Route element={<ProtectedRoute />}>
            <Route path='/Proyecto-5/profile' element={<Profile />} />
          </Route>

        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}
