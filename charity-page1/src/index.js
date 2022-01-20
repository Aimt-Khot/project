import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Charity from './Components/Charity-page1';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar/>
    <Charity />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();