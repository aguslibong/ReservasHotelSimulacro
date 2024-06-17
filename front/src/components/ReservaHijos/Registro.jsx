
import { useForm } from 'react-hook-form';
import service from '../../services/reservas.services.js';


export default function Registro({setAction, loadData}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await service.saveReserva(data);
    loadData()
    setAction('C');
  };


  return (
    <div className='container_app'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5>Registro de Reserva de estadía</h5>
            <div className="form-group">
              <label htmlFor="Dni">DNI reserva:</label>
              <input type="text" className="form-control" id="Dni" {...register("Dni", { required: 'Este campo es requerido' })} />
              {errors.Dni && <span className='error'>{errors.Dni.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="FechaIngreso">Fecha ingreso:</label>
              <input type="date" className="form-control" id="FechaIngreso" {...register("FechaIngreso", { required: 'Este campo es requerido' })} />
              {errors.FechaIngreso && <span className='error'>{errors.FechaIngreso.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="FechaSalida">Fecha salida:</label>
              <input type="date" className="form-control" id="FechaSalida" {...register("FechaSalida", { required: 'Este campo es requerido' })} />
              {errors.FechaSalida && <span className='error'>{errors.FechaSalida.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="TipoEstadia">Tipo servicio:</label>
              <select className="form-control" id="TipoEstadia" {...register("TipoEstadia", { required: 'Este campo es requerido' })}>
                <option value="">Seleccione una opción</option>
                <option value="Full">Full</option>
                <option value="Media Pensión">Media Pensión</option>
                <option value="Solo Desayuno">Solo Desayuno</option>
              </select>
              {errors.TipoEstadia && <span className='error'>{errors.TipoEstadia.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="Huespedes">Huéspedes:</label>
              <input type="number" className="form-control" id="Huespedes" {...register("Huespedes", { required: 'Este campo es requerido', min: { value: 1, message: 'Debe haber al menos un huésped' } })} />
              {errors.Huespedes && <span className='error'>{errors.Huespedes.message}</span>}
            </div>
            <div>
              <button type="submit" className="btn btn-primary mt-3 me-2">Registrar</button>
              <button type="button" className="btn btn-danger mt-3" onClick={() => setAction('C')}>Cancelar</button>
            </div>
          </form>
          
    </div>
  );
}
