import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MainNavbar from './components/Navbar';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <React.StrictMode>
      <MainNavbar />
      <Provider store={store}>
        <BrowserRouter>
          <div className="mainContainer">
            <App />
          </div>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </>,

);
