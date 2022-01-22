import React from 'react';
import communitybanner from '../Images/community-banner.jpg'
import './bannerimg.css';

function Bannerimg() {
  return (
    <div  className="banner-container">
      <div className='banner-image'>
        <img src={communitybanner} />
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