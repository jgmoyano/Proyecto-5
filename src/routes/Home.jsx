import './Home.css'
import imagenPrincipal from '../assets/imagenprincipal.png'
import imagenXmas from '../assets/xmassale.png'
import { Link } from 'react-router-dom'
import imgProd1 from "../assets/cuerda.png"
import imgProd2 from "../assets/mochila.png"
import imgProd3 from "../assets/mosqueton.png"
import imgProd4 from "../assets/ropa.png"
import imgProd5 from "../assets/zapatillas.png"

export const Home = () => {
  return (
    <>
      <div className='row'>
        <div id='col1' className='col'>
          <h4>Es momento de llevar tu escalada al siguiente nivel, en CLIMBING WORLD encontraras todo lo necesario, empieza ya!</h4>
          <br />
          <br />
          <Link to="/Proyecto-5/productos">
            <div className='container-iconos'>
              <img className='iconos' src={imgProd1} alt="" />
              <img className='iconos' src={imgProd2} alt="" />
              <img className='iconos' src={imgProd3} alt="" />
              <img className='iconos' src={imgProd4} alt="" />
              <img className='iconos' src={imgProd5} alt="" />
            </div>
          </Link>
          <br />
          <br />
          <img className='imagenxmas' src={imagenXmas} />
        </div>
        <div id='col2' className='col text-center'>
            <img className='imagenprincipal' src={imagenPrincipal}></img>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}
