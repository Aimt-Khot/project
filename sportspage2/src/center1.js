import React from 'react';
import './center1.css';

function Center1() {
    return (
      <div className='central-conatiner'>
        <div className="top-container">
          <div class="top-box top-box-e">
           <h1> TENNIS</h1> 
         </div>
         <div class="top-box top-box-a">
            <h1> SHOP THORNE NUTRITION</h1>
         </div>
         <div class="top-box top-box-b">
            <h1> EXPLORE NUTRITION COMMUNITY</h1>
         </div>
         </div>
  
         <h2 style={{ fontFamily:"popinns",fontSize:40,  color: "black", textAlign: "center",marginBottom:"20px",marginTop: "10px" }}>
		        <b>New Arrivals</b><hr/>
	      </h2>
        <div className="newarrival-container">
               <div className="item-1">
                  <h2>Theragun Pro<br></br>$449.99</h2>
               </div>
               <div className="item-2">
                  <h2>Therabody PowerDot 2.0<br></br>$399.99</h2>
               </div>
               <div className="item-3">
                  <h2>Roll Recovery R8<br></br>$129.00</h2>
               </div>
               <div className="item-4">
                  <h2>Smart Tools SmartCuffs<br></br>$299.99</h2>
               </div>
               <div className="item-5">
                 <h2>SURVIVING THE HOLDAY TREATS</h2>
              </div>
          </div>
      </div>
    )
}

export default Center1;


// import React from 'react';
// import './center1.css';

// function Center1() {
//     return (
//       <div className="grid-container">
          
//           <div className="grid-container1">
//                <div className="grid-item item-1">
//                   <h1 className="product1">NUTRITION</h1>
//                    <img src="./Images/Image5.png"quire('./Images/Image1.png')} alt='Image1'/>
//                </div>            
//               <div className="grid-item item-2">
//               <h1 className="product2">SHOP THORNE<br></br> NUTRITION</h1>
//                    <img src="./Images/Image5.png"quire('./Images/Image3.png')} alt='Image3'/>
//               </div>    
//               <div className="grid-item item-3">
//               <h1 className="product3">WHAT<br></br>PROBIOTICS<br></br>CAN DO<br></br>FOR YOU <hr/></h1>
//                    <img src="./Images/Image5.png"quire('./Images/Image2.png')} alt='Image2'/>
//                    <a href="#">READ+SHOP</a>
//              </div>  
//               <div className="grid-item item-4">
//               <h2 className="product4">EXPLORE NUTRITION <br></br>COMMUNITY</h2>
//                    <img src="./Images/Image5.png"quire('./Images/Image4.png')} alt='Image4'/>
//                    <a href="#">VIEW COMMUNITY </a>
//               </div>    
//                <div className="grid-item item-5">
//                <h3 className="product5">HOW SOON <br></br>AFTER YOU<br></br>EAT<br></br>SHOULD YOU<br></br>GO TO SLEEP?</h3>
//                    <img src="./Images/Image5.png"quire('./Images/Image6.png')} alt='Image6'/>
//                    <a href="#">READ+SHOP</a>
//              </div>
//              <div className="grid-item item-6">
//              <h2 className="product6">WHICH<br></br>MACROS<br></br>IS RIGHT<br></br>FOR ME?</h2>
//                    <button className="Quiz">Take Quiz</button>
//                    {/* <img src="./Images/Image5.png"quire('./Image5.png')} alt='Image5'/> */}
//              </div>
//           </div>
// 	                <h2 style={{ color: "black",
// 				                textAlign: "center",
// 				                marginBottom:"20px",
// 				                marginTop: "10px" }}>
// 		                        <b>New Arrivals</b>
//                             <hr/>
// 	                </h2>


//           <div className="grid-container2">
//                <div className="grid-item item-7">
//                   <h6 className="product7">Theragun Pro<br></br>$449.99</h6>
//                    <img src="./Images/Image5.png"quire('./Images/Image7.jpg')} alt='Image7'/>
//                </div>
//                <div className="grid-item item-8">
//                   <h6 className="product8">Therabody PowerDot 2.0<br></br>$399.99</h6>
//                    <img src="./Images/Image5.png"quire('./Images/Image7.jpg')} alt='Image7'/>
//                </div>
//                <div className="grid-item item-9">
//                   <h6 className="product9">Roll Recovery R8<br></br>$129.00</h6>
//                    <img src="./Images/Image5.png"quire('./Images/Image7.jpg')} alt='Image7'/>
//                </div>
//                <div className="grid-item item-10">
//                   <h6 className="product10">Smart Tools SmartCuffs<br></br>$299.99</h6>
//                    <img src="./Images/Image5.png"quire('./Images/Image7.jpg')} alt='Image7'/>
//                </div>
//           </div>


//           <div className="grid-container3">
//                <div className="grid-item item-11">
//                   <h2 className="product11">SHOP<br></br>PROTEIN</h2>
//                    <img src="./Images/Image5.png"quire('./Images/Image8.png')} alt='Image8'/>
//                </div>
//                <div className="grid-item item-12">
//                   <h2 className="product12">SHOP<br></br>VITAMINS</h2>
//                    <img src="./Images/Image5.png"quire('./Images/Image9.png')} alt='Image9'/>
//                </div>
//                <div className="grid-item item-13">
//                   <h2 className="product13">TOP<br></br>SELLERS</h2>
//                    <img src="./Images/Image5.png"quire('./Images/Image10.png')} alt='Image10'/>
//                </div>
//                <div className="grid-item item-14">
//                   <h2 className="product14">SURVIVING THE HOLDAY TREATS</h2>
//                    <img src="./Images/Image5.png"quire('./Images/Image11.png')} alt='Image11'/>
//                </div>
//           </div>



//       </div>
//     )
// }

// export default Center1;