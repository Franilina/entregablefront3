import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente principal App
import Card from './Card'; // Importa el componente Card

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);