import axios from 'axios'
import Card from "react-bootstrap/Card";
import { useEffect, useState } from 'react'

export const Profile = () => {

  const localToken = localStorage.getItem("token")
  const localMail = localStorage.getItem("mail")
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${localToken}`
        }
      });
      setUsers(response.data.detail);
    }
    getUsers();
  }, [])

  const user = users.find(user => user.mail === localMail)
  if (!user) return null

  console.log(user)

  return (
    <>
      <div className='container-card'>
        <Card
          bg="dark"
          id="detalle-card"
          text="light"
          className="mb-5 mt-3 m-5 p-4"

        >
          <div className='row'>
            <div className='col'>
              <Card.Img variant="top" style={{ width: '18rem' }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            </div>
            <div className='col'>
              <Card.Body>
                <h4>Nombre</h4>
                <Card.Text id="nombre">{user.firstName}</Card.Text>
                <h4>Apellido</h4>
                <Card.Text id="apellido">{user.lastName}</Card.Text>
                <h4>Correo Electrónico</h4>
                <Card.Text id="email">{user.mail}</Card.Text>
                <div id="boton" >
                  <button id="elboton" onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("mail")
                    location.reload()
                  }} type="button" className="btn btn-light">Cerrar Sesión</button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card >
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
