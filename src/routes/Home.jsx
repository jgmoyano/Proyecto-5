import './Home.css'
import imagenPrincipal from '../assets/imagenprincipal.png'
import imagenXmas from '../assets/xmassale.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className='row'>
        <div id='col1' className='col'>
          <h4>Es momento de llevar tu escalada al siguiente nivel, en CW encontraras todo lo necesario, visitanos ya!</h4>
          <br />
          <br />
          <img className='imagenxmas' src={imagenXmas} />
        </div>
        <div id='col2' className='col text-center'>
          <Link to="/Proyecto-5/productos">
            <img className='imagenprincipal' src={imagenPrincipal}></img>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}
