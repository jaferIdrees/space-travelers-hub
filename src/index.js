import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MainNavbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <MainNavbar />
    <BrowserRouter>
      <div className="mainContainer">
        <App />
      </div>
    </BrowserRouter>

  </>,

);
