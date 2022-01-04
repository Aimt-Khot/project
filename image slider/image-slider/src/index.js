import React , { useState } from 'react';
import ReactDom from 'react-dom';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import './styles.css';
import {arr} from './Data';

const App = () =>{
  const [value, setValue] = useState(0);
  
  return(
  <>
  <div className="container">
      <div className="pics">
        <img src = {arr[value].image} alt={arr[value].id}/>
        <div className='img-text'>
          <h2>{arr[value].name}</h2>
          <p>{arr[value].info}</p>
          <button type="button" onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}><BsArrowLeft /></button>
          <button type="button" onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}><BsArrowRight /></button>
        </div>
      </div>
      <div className='disc'>
        <div className='logo'>
          <h2>ATHLEATS MAKE THE <br></br>WORLD GO AROUND</h2>
          <img src="http://stage.forathletes.com/media/wysiwyg/running.png" />
        </div>
        <div className='info'>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in 
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
         deserunt mollit anim id est laborum.
         </p>
         <button type="button"><text>Learn More</text></button>
        </div>
     </div>
  </div>
  </>
  );
}
ReactDom.render(
  <App />,
  document.getElementById('root')
);