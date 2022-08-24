import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MainNavbar from './components/Navbar';
import missionsStore from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <MainNavbar />
    <Provider store={missionsStore}>
      <BrowserRouter>
        <div className="mainContainer">
          <App />
        </div>
      </BrowserRouter>
    </Provider>

  </>,

);
