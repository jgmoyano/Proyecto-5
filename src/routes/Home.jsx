import './Home.css'
import imagenPrincipal from '../assets/imagenprincipal.png'

export const Home = () => {
  return (
    <>
    <div className='text-center'>
    <img className='imagenprincipal' src={imagenPrincipal}></img>
    </div>
    <h2 className='text-center'>Climbing World !!</h2>
    <div className='containerparrafo'>
    <p>Toda lo que necesitas para escalada</p>
    </div>
    <br />
    <br />
    </>
  )
}
