import React from "react";
import {Card , Row , Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

export default function App() {
  return (
  <div className="img-container">
   <div className="title">
     <text>Athletes</text>
   </div>
   <div className="card-container">
     <Card >
       <Card.Img variant="top" src="https://i.pinimg.com/originals/43/a3/61/43a3617aaa7388c17befe921b8614160.jpg" />
       <Card.ImgOverlay>
         <Card.Title>Card title</Card.Title>
         <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text>
       </Card.ImgOverlay>
     </Card>
     <Card >
       <Card.Img variant="top" src="https://i.pinimg.com/originals/43/a3/61/43a3617aaa7388c17befe921b8614160.jpg" />
       <Card.ImgOverlay>
         <Card.Title>Card title</Card.Title>
         <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text>
       </Card.ImgOverlay>
     </Card>
     <Card >
       <Card.Img variant="top" src="https://i.pinimg.com/originals/43/a3/61/43a3617aaa7388c17befe921b8614160.jpg" />
       <Card.ImgOverlay>
         <Card.Title>Card title</Card.Title>
         <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
         </Card.Text>
       </Card.ImgOverlay>
     </Card>
   </div>
 </div>
);
}