import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className="text-light">
              <MdLocalOffer className="text-warning"/> &nbsp; &nbsp;
              Free Home Delivery On Order!</h6>
            <Nav className="ms-auto">
              <LinkContainer to="/" className='hover'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" className='hover'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" className='hover'>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/policy" className='hover'>
                <Nav.Link>Term and Policy</Nav.Link>
              </LinkContainer>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
