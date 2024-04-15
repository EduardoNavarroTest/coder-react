import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="./index.html">
          <Link to="/">
          <img className="logo__principal" src="/clock.png" alt="Logo web" />
          </Link>
          <span className="title">LaBaratija.com</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto containerNav">
            <Nav.Item>
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/clothes" className="nav-link">Clothes</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/electronics" className="nav-link">Electronics</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/shoes" className="nav-link">Shoes</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/miscellaneous" className="nav-link">Miscellaneous</Link>
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