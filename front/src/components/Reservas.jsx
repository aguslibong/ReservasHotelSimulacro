import React, { useState, useEffect } from 'react';
import Consulta from './ReservaHijos/Consulta.jsx';
import Registro from './ReservaHijos/Registro.jsx';
import service from '../services/reservas.services.js'
import { Link } from 'react-router-dom';
import './Reservas.css'


export default function Reservas() {
    const [action, setAction] = useState('C');
    const [rows, setRows] = useState([]);

    useEffect(() => {
        loadData();
    }, []);
    
    const loadData = async () => {
        const data = await service.getReservas();
        setRows(data);
      };

    const onRegistrar = () => {
        setAction('R');
    };


    return (
        <div>
            {
                action === 'R' && (
                    <Registro setAction={setAction} loadData={loadData} />
                )
            }
            {
                action === 'C' && (
                    <>
                        <Consulta rows={rows} onRegistrar={onRegistrar} loadData={loadData} />
                        <Link to="/" className="btn btn-primary position-absolute bottom-0 start-0 m-3">Menu</Link>

                    </>
                    
                )
            }
        </div>
    )
}
