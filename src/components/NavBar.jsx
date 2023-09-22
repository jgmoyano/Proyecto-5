import './NavBar.css'
import logo from '../assets/logopizza.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navbar-fluid'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/Proyecto-4/"><h5>Home</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Proyecto-4/menu"><h5>Menu</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Proyecto-4/contacto"><h5>Contacto</h5></Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h5>
                  Comer</h5>
                </a>
                <ul className="dropdown-menu bg-secondary">
                  <li><Link className="dropdown-item text-light hover-dark" to="/Proyecto-4/reservas">Reservar en Local</Link></li>
                  <li><Link className="dropdown-item text-light" to="/Proyecto-4/domicilio">Pedir a Domicilio</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
