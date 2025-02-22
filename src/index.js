import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes,Switch, Redirect } from "react-router-dom";
import Cheader from './Components/Cheader';
import Bproject from './Components/Bproject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Routes>
      <Route path="/about" render={(props) => <Bproject {...props} />} />
      <Route path="/FAQs" render={(props) => <Cheader {...props} />} />
      </Routes>
  </React.StrictMode>
);


reportWebVitals();
