import { Button, Card, Container, Row, Col } from "react-bootstrap";

import horror from "../book/horror.json";

const Carta = () => {
  return (
    <Container fluid="true">
      <Row>
        
          {horror.map((book) => {
            return (
<Col md={3}>
                
              <Card
                style={{ width: "14rem" }}
                className="mt-4 ms-3 border border-black me-3"
                key={book.asin}
              >
                <Card.Img src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Price $ : {book.price}</Card.Text>
                  <Card.Text>Category: {book.category}</Card.Text>
                  <Button variant="success">Buy It Now!</Button>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
        
      </Row>
    </Container>
  );
};

export default Carta;
