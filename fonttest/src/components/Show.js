import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const Show = () => {

    const [ packages, setPackages ] = useState( [] )

    useEffect ( ()=> {
        getAllPackages()
    }, [])

    const getAllPackages = async () =>{
        const response = await axios.get(`${endpoint}/paquetes`)
        setPackages(response.data)
        console.log(response.data)
    }

    const deletePackage = async (id) =>{
        axios.delete(`${endpoint}/paquete/${id}`)
        getAllPackages()
    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Descripción</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Peso</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { packages.map( (packag) => (
                        <tr key={packag.id}>
                            <td>{packag.descripcion}</td>
                            <td>{packag.origen}</td>
                            <td>{packag.destino}</td>
                            <td>{packag.peso}</td>
                            <td>{packag.fecha}</td>
                            <td>{packag.id_cliente}</td>
                            <td><button onClick={ ()=> deletePackage(packag.id)} className='btn btn-danger'>Borrar</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Show