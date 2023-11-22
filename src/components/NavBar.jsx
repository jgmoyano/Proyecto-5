import './NavBar.css'
import logo from '../assets/logocw.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const isAuthenticated = localStorage.getItem("token")
  return (
    <div className='navbar-fluid'>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/Proyecto-5/"><h5>Home</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Proyecto-5/productos"><h5>Productos</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Proyecto-5/contacto"><h5>Contacto</h5></Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? <span onClick={() => localStorage.removeItem("token")}>Cerrar sesión</span> : <Link className="nav-link text-light" to="/Proyecto-5/login"><h5>Iniciar Sesión</h5></Link> }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
