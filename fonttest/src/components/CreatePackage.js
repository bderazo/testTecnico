import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/paquete'
const endpointCli = 'http://localhost:8000/api/clientes'
//

const CreatePackage = () => {
    const initcoord = {lat:0, lon:0}
    const [ coord, setCoord ] = useState( initcoord )

    const getLocation = async (lat,lon) =>{
        console.log("lat"+lat+'long'+lon)
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=c08d0f2842dfb61e96bad69fa449eef4`)
        return(response.json());
    }

    if ( !navigator.geolocation){
        alert('El navegador no tiene la opción de Gaolocalización');
        throw new Error('El navegador no tiene la opción de Gaolocalización');
    }else{
        navigator.geolocation.getCurrentPosition(async function (position) {
            let lati = position.coords.latitude;
            let long = position.coords.longitude;
            console.log("Latitude is :", lati);
            console.log("Longitude is :", long);
            const ciudad = await getLocation(lati,long);
            
            console.log(ciudad[0].name)
            setOrigen(ciudad[0].name);
        });
        console.log('si hay geo');
    }


    const [ client, setClient ] = useState( [] )

    useEffect ( ()=> {
        getAllClients()
    }, [])


    const getAllClients = async () =>{
        const response = await axios.get(`${endpointCli}`)
        setClient(response.data)
        console.log(response.data)
    }

  
    const [descripcion ,setDescripcion] = useState('')
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [peso, setPeso] = useState(0)
    const [fecha, setFecha] = useState(0)
    const [id_cliente, setCliente] = useState(0)
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {descripcion: descripcion, origen: origen, destino: destino, peso: peso, fecha: fecha, id_cliente: id_cliente})
        navigate('/')
    }

    return (
    <div>
        <h3>Crear Pedido</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'> Cliente</label>
                    <select className='form-control' onChange={ (e)=> setCliente(e.target.value)}>
                        { client.map( (elemento) => (
                            <option key={elemento.id} value={elemento.id}>{elemento.nombre}</option>
                        ))}
                    </select>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Descripción</label>
                <input
                    value={descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'> Origen</label>
                <input
                    value={origen}
                    onChange={ (e)=> setOrigen(e.target.value)}
                    type='text'
                    className='form-control'
                    disabled = {true}
                />
            </div><div className='mb-3'>
                <label className='form-label'> Destino</label>
                <input
                    value={destino}
                    onChange={ (e)=> setDestino(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div><div className='mb-3'>
                <label className='form-label'> Peso</label>
                <input
                    value={peso}
                    onChange={ (e)=> setPeso(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div><div className='mb-3'>
                <label className='form-label'> Fecha</label>
                <input
                    value={fecha}
                    onChange={ (e)=> setFecha(e.target.value)}
                    type='date'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Crear</button>
        </form>
    </div>
  )
}

export default CreatePackage