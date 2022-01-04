import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Slider from './Components/Slider';

ReactDOM.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ReactDom from 'react-dom';
// import './App.css';
// import React , {useState} from 'react';
// import {arr} from './data';

// export const App = () =>{
//   const [value] = useState(0);
//   return (
// <div className='container'>
//    <div className='slide'>
//       <Carousel fade>
//         <Carousel.Item>
//            <img
//             src={arr[value].img}
//             alt={arr[value].id}
//           />
//          <Carousel.Caption>
//            <h2>{arr[value].name}</h2> 
//            <p>{arr[value].info1}</p>
//            <p>{arr[value].info2}</p>
//          </Carousel.Caption>
//         </Carousel.Item>
//    </Carousel>
//    </div>
//   <div className='disc'>
//      <div className='logo'>
//           <h2>ATHLEATS MAKE THE <br></br>WORLD GO AROUND</h2>
//           <img src="http://stage.forathletes.com/media/wysiwyg/running.png" />
//         </div>
//          <p>
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//          nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in 
//          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
//          deserunt mollit anim id est laborum.
//          </p>
//          <div className='buttons'>
//             <button type='button'>Learn More</button>
//          </div>
//     </div>
// </div>
// );
// }


// ReactDom.render(
//   <App />,
//   document.getElementById('root')
// );