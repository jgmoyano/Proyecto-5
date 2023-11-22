import './Contacto.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Contacto = () => {
    return (
        <>
            <div className='containercontacto'>
                <div className='containercontacto1'>

                    <h3 className='pt-5 mx-5'>Hablemos!</h3> 
                    <br />
                    <Form>
                        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control className='inputform' type="text" placeholder="Ingresa tu nombre" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control className='inputform' type="text" placeholder="Ingresa tu E-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control className='inputform' type="text" placeholder="Ingresa tu numero de telefono" />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} className='inputform2' type="text" placeholder="Ingresa tu mensaje, agradecimiento, reclamo, sugerencia, etc." />
                        </Form.Group>

                        <Button className='mx-5 mt-2' variant="secondary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
                <div className='containercontacto2'></div>
            </div>
            <div className='row mx-4 mb-5 text-center'>
                <div className='col mt-4'><h5>TELEFONO</h5>
                <h6>+56 9 98554455</h6>
                </div>
                <div className='col mt-4'>
                <h5>UBICACION</h5>
                <h6>Calle 2 1/3 Norte 4680, Talca</h6>
                </div>
                <div className='col mt-4'>
                <h5>CORREO</h5>
                <h6>contacto@climbingworld.cl</h6>
                </div>
                <div className='col mt-4'>
                <h5>HORARIO</h5>
                <h6>Lunes a Viernes de 09:00 a 18:00 Hrs</h6>
                </div>

            </div>

        </>
    )
}
