import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Navbar from './Navbar';
import App from './App';
import Center1 from './center1';
import Community from './community';
import {FooterContainer} from "./footer000/containers/footer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <Center1/>
    <App/>
    <Community/>
    <FooterContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
