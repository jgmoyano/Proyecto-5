import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export function ListaReservas(){

    const reservasCollectionRef = collection(db, 'reservas')
    const [reservas, setReservas] = useState([])

    const getReservas = async () => {
        const data = await getDocs(reservasCollectionRef)
        setReservas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getReservas();
    }, [])

    return (
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Nombre</th>
                        <th>Cantidad de Personas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservas.map(reserva => {
                            let fecha = new Date(reserva.fecha.seconds * 1000);
                            return (
                                <tr key={reserva.id}>
                                    <td>{fecha.toLocaleDateString("es-CL")}</td>
                                    <td>{reserva.hora}</td>
                                    <td>{reserva.nombre}</td>
                                    <td>{reserva.cantidad}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
    )
}