import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Sistema Reservas Hotel</h1>
      <Link to="/registro">Reservas Registro</Link>
      <Link to="/consulta">Reservas Consulta</Link>
    </div>
  );
}

export default Menu;
