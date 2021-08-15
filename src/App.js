import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
