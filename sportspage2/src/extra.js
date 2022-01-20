import React from "react"
import complan from './shop/complan.jpg'
import c from './shop/supplement.jpg'
import o from './shop/equipment.jpg'
import m from './shop/maxtorc.jpg'
import p from './shop/mental.jpg'
import s from './shop/theragun.jpg'
import i from './shop/playmakar.jpg'
import n from './shop/reathlete.jpg'
import './above.css'

function Above () {
return <div className="master"> 

<div className="top-container"> 

     <div class="top-box top-box-e">
         <h1>Your ONE STOP SHOP FOR RECOVERY FITNESS AND NUTRTION</h1> 
     </div>
     
        <div class="top-box top-box-a">
            <h4>Shop Thorne Nutrition</h4>
         </div>
         <div class="top-box top-box-b">
            <h4>find your next cycling group</h4>
            <a href="" class="toplinks" >view community</a>
         </div>
          <div class="top-box top-box-c">
            <h4>how does sleep promote better health</h4>
            <a href="" class="toplinks">view+shop</a>
         </div>
         <div class="top-box top-box-d">
            <h4>aviron impact series home interactive rowing machine</h4>
            <a href="" class="toplinks">shop Now</a>
         </div>  
     </div>
     <div class="products">
             <div class="prd">
                <img src={complan} class="prd1" /><h1 class="prdname">Nutrition</h1>
               </div>
               <div class="prd">
                <img src={c} class="prd1" /><h1 class="prdname">Supplements</h1>
               </div>
               <div class="prd">
                <img src={o} class="prd1" /><h1 class="prdname">Training</h1>
               </div>
               <div class="prd">
                <img src={m} class="prd1" /><h1 class="prdname">Recovery</h1>
               </div>
               <div class="prd">
                <img src={p} class="prd1" /><h1 class="prdname">Mental</h1>
               </div>
     </div>
     <div class="products2">
           <div class="prod1">
              <img src={s} class="prd2"  />
              <h1>Theragun pro </h1>
              <p>569.99</p>
           </div>
           <div class="prod2">
              <img src={i} class="prd2"  />
              <h1>Theragun pro </h1>
              <p>569.99</p>
           </div>
           <div class="prod3">
              <img src={n} class="prd2"  />
              <h1>Theragun pro </h1>
              <p>569.99</p>
           </div>
           <div class="prod4">
              <img src={n} class="prd2"  />
              <h1>Theragun pro </h1>
              <p>569.99</p>
           </div>
           <div class="massage">
                <h1>New Arrivals </h1>
           </div>
     </div>
     <div class="treat">
            <h4 class="mr">surviving the holiday treats  <a href="" class="mlink">Read+Shop</a></h4>
           
         </div>  
     <div className="charity">
     <div class="char">
            <h1>charity</h1>
            <p class="price">lorem Ever need to create some  formatting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English. Here's how to use the sample text generator.</p>
            <a href="" class="btn">Learn More</a>
          </div>
          <div class="comm">
            <h1>community</h1>
            <p class="price">loremEver need to create sometting and layout? Microsoft Office can quickly create this dummy text for you with lorem ipsum Latin or random sentences in English. Here's how to use the sample text generator.</p>
            <a href="" class="btn">Learn More</a>
          </div>
     </div>

    </div>
}

export default Above