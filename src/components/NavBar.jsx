import { Container, Nav, Navbar,  } from 'react-bootstrap';

function NavBar() {
  return (
    
    <Navbar expand="lg" className="bg-black container-fluid">
      <Container fluid>
        <Navbar.Brand className='text-white fw-bold fs-3' href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white '>About</Nav.Link>
            <Nav.Link href="#link" className='text-white '>Browse</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;