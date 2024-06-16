import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Menu from './components/Menu';
import Registro from './components/Registro';
import Consulta from './components/Consulta';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/consulta' element={<Consulta />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
