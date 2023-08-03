import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddRemoveCustomer from './components/add-remove';
import configureStore from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <div className='App-header'>
      <Routes>
      <Route path="/" element={<App/>}/>
      <Route index element={<App />} />
      <Route path="add-remove" element={<AddRemoveCustomer/>}/>
      </Routes>
            </div>
    </BrowserRouter> */}
    <BrowserRouter>
    <Provider store={configureStore()}>
        <App/>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
