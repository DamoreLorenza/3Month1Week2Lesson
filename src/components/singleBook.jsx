import { Button, Card, Container, Row, Col } from "react-bootstrap";

import horror from "../book/horror.json";

const SingleBook = (props) => {
    props=horror[30]
  return (
    <Container >
      <Row>
        <Col lg={2} md={3} sm={6}>
                
              <Card
                style={{ width: "10rem" }}
                className="card mt-4 ms-5 " border="light"
                key={horror.asin}
              >
                <Card.Img src={props.img}/>
                <Card.Body>
                  <Card.Title className="text-black fw-bolder">{props.title}</Card.Title>
                  <Card.Text className="text-black fw-bold">Price $ : {props.price}</Card.Text>
                  <Card.Text className="text-black fw-bold">Category: {props.category}</Card.Text>
                  <Button variant="success">Buy It Now!</Button>
                </Card.Body>
              </Card>
              </Col>
          
        
      </Row>
    </Container>
  );
};

export default SingleBook;


