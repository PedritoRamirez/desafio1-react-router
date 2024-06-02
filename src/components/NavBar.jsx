import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/'} className='textBlank'>🏠Home</Link>
            <Link to={'/Contactos'} className='textBlank'>📒Contacto</Link>
          </Nav>
          <Nav.Link href="#Happy-Cake" className='textBlank'>Happy-Cake🍰</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar