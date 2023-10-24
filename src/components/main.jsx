import {Button, Card, Container, Row, Col} from 'react-bootstrap';

import horror from '../book/horror.json'





const Carta = () => {
    return (
     
      <Container fluid="true">
        <Row>
          
          <Col md={4}>
            
              {horror.map((book) => {
                return (
                    

                  <Card style={{ width: '14rem' }} className="mt-4 ms-3 border border-black me-3" key={book.asin}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      
                       <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        Price $ : {book.price}
                      </Card.Text>
                      <Card.Text>
                        Category: {book.category}
                      </Card.Text>
                         <Button variant="success">Buy It Now!</Button>
                    </Card.Body>
                  </Card>


                )
              })}
            
          </Col>
        </Row>
      </Container>
    )
  }
  
export default Carta;