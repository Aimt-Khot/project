import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header'
import Navbar from './Navbar'
import Bannerimg from './bannerimg';
import {FooterContainer} from "./footer000/containers/footer";


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar/>
    <Bannerimg />
    <FooterContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
