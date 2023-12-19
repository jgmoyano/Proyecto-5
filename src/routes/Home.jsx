import './Home.css'
import imagenPrincipal from '../assets/imagenprincipal.png'
import imagenXmas from '../assets/xmassale.png'
import { Link } from 'react-router-dom'
import imgProd1 from "../assets/cuerda.png"
import imgProd2 from "../assets/mochila.png"
import imgProd5 from "../assets/mosqueton.png"
import imgProd4 from "../assets/ropa.png"
import imgProd3 from "../assets/zapatillas.png"

export const Home = () => {
  return (
    <>
      <div id='row' className='row'>
        <div className='col'>
          <h4>Es momento de llevar tu escalada al siguiente nivel, en CLIMBING WORLD encontraras todo lo necesario. <br /> Descubre las mejores marcas a los mejores precios en un solo lugar. ¡empieza ya!</h4>
          <Link to="/Proyecto-5/productos">
            <div className='container d-flex justify-content-between'>
              <img className='iconos' src={imgProd1} alt="" />
              <img className='iconos' src={imgProd2} alt="" />
              <img className='iconos' src={imgProd3} alt="" />
              <img className='iconos' src={imgProd4} alt="" />
              <img className='iconos' src={imgProd5} alt="" />
            </div>
          </Link>
          <div className='container'>
            <img className='imagenxmas' src={imagenXmas} />
          </div>
        </div>
        <div id='col2' className='container col d-flex justify-content-end'>
          <img className='imagenprincipal' src={imagenPrincipal}></img>
        </div>
      </div>
      <img className='imagenxmas2' src={imagenXmas} />
      <br />
      <br />
    </>
  )
}
