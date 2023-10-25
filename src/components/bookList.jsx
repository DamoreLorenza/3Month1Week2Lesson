import { Carousel, Container, Row, Col } from 'react-bootstrap'


import horror from "../book/horror.json";

const BookList = (SingleBook) => {
  return (
    
    <Container style={{ width: "30rem", height:"30rem"}} className='mb-5'>
      <Row className="justify-content-center">
        {/* <div className="col col-12 col-md-6 col-lg-4"> */}
        <Col md={6}>
          <Carousel className="mt-4 text-black">
            {horror.map((SingleBook) => {
              return (
                <Carousel.Item key={SingleBook.asin}>
                  <img src={SingleBook.img} alt="book img"  style={{ width: "100%", height:"30rem", overflow: "hidden", display: "block"}}/>
                  
                  
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )

        }

        export default BookList