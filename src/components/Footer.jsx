import React from 'react'
import { Link } from 'react-router-dom'
import logoPequeño from '../assets/logopequeño.png'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div>
                <footer className='text-white bg-secondary'>
                    <div className="p-3">
                        <nav id='footer-row' className="row text-center">
                            <Link to='/Proyecto-5/' id='cols-1' className='col-md-3 col-sm-4 col-12 align-self-center'>
                                <img src={logoPequeño} height='80' />
                            </Link>
                            <ul className="col-md-3 col-sm-4 col-12 list-unstyled">
                                <li id='foot-name' className='mb-2'>CW: CLIMBINGWORLD</li>
                                <li>+56 9 98756435 <br />Calle 2 1/3 Norte 4680, Talca <br />Region del Maule</li>
                            </ul>
                            <ul id='enlaces' className="col-md-3 col-sm-4 col-12 list-unstyled">
                                <li id='foot-name' className='mb-2'>ENLACES</li>
                                <li>
                                    <Link to='/Proyecto-5/' className='text-decoration-none text-reset'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/Proyecto-5/productos' className='text-reset text-decoration-none'>Productos</Link>
                                </li>
                                <li>
                                    <Link to='/Proyecto-5/contacto' className='text-reset text-decoration-none'>Contacto</Link>
                                </li>
                            </ul>
                            <ul className="col-md-3 col-sm-4 col-12 list-unstyled">
                                <li id='foot-name' className='mb-2 text-center'>SIGUENOS</li>
                                <li className="d-flex justify-content-center pt-3" id='footer-rrss'>
                                    <i className="px-3 bi bi-facebook" />
                                    <i className="px-3 bi bi-instagram" />
                                    <i className="px-3 bi bi-twitter" />
                                    <i className="px-3 bi bi-youtube" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    )
}
