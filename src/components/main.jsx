import { Button, Card, Container, Row, Col } from "react-bootstrap";

import horror from "../book/horror.json";
import { Component } from "react";

class Carta extends Component  {

 
  

  render(){
  return (
    <Container fluid="true">
      <Row>
        
          {horror.map((book) => {
            return (
<Col lg={2} md={3} sm={6}>
                
              <Card
                style={{ width: "10rem" , height:"20rem"}}
                className="mt-3 ms-5 mb-2"
                key={book.category}
                
              >
                <Card.Img src={book.img} style={{ width: "100%", height:"20rem", overflow: "hidden", display: "block"}} />
                <Card.Body>
                  <Card.Title className="text-black fw-bolder">{book.title}</Card.Title>
                  <Card.Text className="text-black fw-bold">Price $ : {book.price}</Card.Text>
                  <Card.Text className="text-black fw-bold">Category: {book.category}</Card.Text>
                  <Button variant="success">Buy It Now!</Button>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
        
      </Row>
    </Container>
  );
}
};

export default Carta;
