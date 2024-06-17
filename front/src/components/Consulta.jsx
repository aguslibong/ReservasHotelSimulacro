import React from 'react';
import './Consulta.css'
import service from '../services/reservas.services.js'

const Consulta = ({rows, onVolver, loadData}) => {
    
  
    const onClickDelete =( reserva )=>{
      service.deleteReserva(reserva)
      loadData()
    }

    const onClickUpdate =( reserva )=>{
      service.updateReserva(reserva)
      loadData()
    }
    
    const tbody = rows.map(e => 
        <tr key={e.Id}>
            <td>{e.Dni}</td>
            <td>{e.FechaIngreso}</td>
            <td>{e.FechaSalida}</td>
            <td>{e.TipoEstadia}</td>
            <td>{e.Huespedes}</td>
            <td>
              <button type="button" className ="btn btn-secondary" onClick={()=> onClickUpdate(e)}>Modificar</button>
              <button type="button" className="btn btn-danger" onClick={() => onClickDelete(e)}>Eliminar</button>
            </td>
        </tr>
    )


  return (
    <div className="container mt-5">
      <div className="p-3 mb-2 bg-primary text-white rounded">
        <h2 className="mb-0" style={{ fontFamily: 'monospace' }}>RESERVAS</h2>
      </div>
      <table className="table table-bordered">
        <thead className="bg-light">
          <tr>
            <th scope="col">Dni</th>
            <th scope="col">Fecha ingreso</th>
            <th scope="col">Fecha salida</th>
            <th scope="col">Tipo servicio</th>
            <th scope="col">Huéspedes</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>

      <button className="btn btn-secondary mt-3" onClick={onVolver}>Volver</button>
 
    </div>

  );
};

export default Consulta;
