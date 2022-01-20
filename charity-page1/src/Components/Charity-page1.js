import React from 'react';
import charitybanner from '../Images/charitybanner.jpg'
import './Charity-page1.css';

function Charity() {
  return (
    <div  className="banner-container">
      <div className='banner-image'>
        <img src={charitybanner}  />
      </div>
      <div className='banner-disc'>
        <h1>Charity Page Title</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat
       </p>
       <div className='buttons'>
         <button type='button'>Sign Up</button>
      </div>
    </div>
    </div>
  );
}

export default Charity;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
// import './Charity-page1.css';
// import charitybanner from './images/charitybanner.jpg'

// export default function Charity(){
// return (
//  <Container >
//      <figure className='position-relative'>
//           <img src={charitybanner} alt='charitybanner' className='img-fluid'/>
//           <figcaption>
//               <h1>Charity Page Title</h1>
//               <p>
//                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//                  nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <div className='buttons'>
//                   <button type='button'>Sign Up</button>
//               </div>
//            </figcaption>
//         </figure>
//  </Container>
// );
// };
