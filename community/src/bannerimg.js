import React from 'react';
import './bannerimg.css';

function Bannerimg() {
  return (
    <div  className="banner-container">
      <div className='banner-image'>
        <img src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      </div>
      <div className='banner-disc'>
        <h1>Community Coming Soon</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat
       </p>
       <div className='buttons'>
         <button type='button'>Donate</button>
      </div>
    </div>
    </div>
  );
}

export default Bannerimg;