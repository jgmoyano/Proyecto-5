import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const Reservas = () => {

    const reservasCollectionRef = collection(db, 'reservas')

    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')

    

    const createReserva = async () => {
        await addDoc(reservasCollectionRef, { fecha, hora, nombre, cantidad })
    }


    return (
        <>

            <DatePicker
                selected={fecha}
                placeholderText="Fecha"
                onChange={(date) => setFecha(date)} />

            <input
                type="string"
                placeholder='hora'
                value={hora}
                onChange={(event) => setHora(event.target.value)} />

            <input
                type="string"
                placeholder='nombre'
                value={nombre}
                onChange={(event) => setNombre(event.target.value)} />

            <input
                type="string"
                placeholder='cantidad'
                value={cantidad}
                onChange={(event) => setCantidad(event.target.value)} />

            <Button onClick={createReserva} variant='success'>Add</Button>

            
        </>
    )
}
