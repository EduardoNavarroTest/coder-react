import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="./index.html">
          <img className="logo__principal" src="/clock.png" alt="Logo web" />
          <span className="title">Mi Tiempo.com</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto containerNav">
            <Nav.Item>
              <Nav.Link href="#" className="nav-link active" aria-current="page">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">Mis pedidos</Nav.Link>
            </Nav.Item>
            <Nav.Item className="cart-link">
              <CartWidget />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;