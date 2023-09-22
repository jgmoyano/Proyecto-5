import './Home.css'
import imagenPrincipal from '../assets/imagenprincipal.jpg'

export const Home = () => {
  return (
    <>
    <div className='text-center'>
    <img className='imagenprincipal' src={imagenPrincipal}></img>
    </div>
    <h2 className='text-center'>Ven a probar la verdadera Pizza Napoletana !!</h2>
    <div className='containerparrafo'>
    <p>Ubicados en el corazón de Talca, somos una pizzeria familiar que pone todo su esfuerzo en entregar un producto de calidad, 
    utilizando ingredientes seleccionados de primer nivel, logrando así la receta mas fiel de la clasica pizza napoletana.</p>
    </div>
    </>
  )
}
