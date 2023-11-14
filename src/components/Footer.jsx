import React from 'react'
import { Link } from 'react-router-dom'
import logoPequeño from '../assets/logopequeño.png'

export const Footer = () => {
    return (
        <>
            <div>
                <footer className='text-white py-2 bg-secondary'>
                    <div className="container">
                        <nav className="row">
                            <Link to='/Proyecto-5/' className='mb-3 col-12 col-md-3 d-flex align-items-center'>
                                <img src={logoPequeño} height='80' />
                            </Link>
                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className='font-weight-bold mb-2'>CW: CLIMBINGWORLD</li>
                                <li>+56 9 98756435 <br />Calle 2 1/3 Norte 4680, Talca <br />Region del Maule</li>
                            </ul>
                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className='font-weight-bold mb-2'>ENLACES</li>
                                <li>
                                    <Link to='/Proyecto-5/' className='text-reset'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/Proyecto-5/productos' className='text-reset'>Productos</Link>
                                </li>
                                <li>
                                    <Link to='/Proyecto-5/contacto' className='text-reset'>Contacto</Link>
                                </li>
                            </ul>
                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className='font-weight-bold mb-2 text-center'>SIGUENOS</li>
                                <li className="d-flex justify-content-between pt-3">
                                    <i className="bi bi-facebook" />
                                    <i className="bi bi-instagram" />
                                    <i className="bi bi-twitter" />
                                    <i className="bi bi-youtube" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    )
}
