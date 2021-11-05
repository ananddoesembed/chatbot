import React from "react";
import {Container,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect variant="light">
  <Container fluid>
    <Navbar.Brand href="#">Proshop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <LinkContainer to="/cart">
       <Nav.Link > <ShoppingCartIcon/>Cart</Nav.Link>
      </LinkContainer>
        {/* <NavDropdown title="Cart" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
      <LinkContainer to="/login">
    
        <Nav.Link ><LoginIcon/>Login</Nav.Link>
       </LinkContainer>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;
