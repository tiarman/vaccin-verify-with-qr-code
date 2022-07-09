import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavPdfForm.css'
import logo from '../../../../Images/nexus.png';
import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { Button, Dropdown, Menu } from 'antd';



const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Nav.Link smooth as={HashLink} to="/login" className="mr-3"><strong>Admin Panel</strong></Nav.Link>
        ),
      },
    ]}
  />
);

const NavPdfForm = () => {


  return (
    <section>
      <Navbar className='main-nav-align' collapseOnSelect expand="lg" bg="blue" variant="dark">
      <Container>
        <Navbar.Brand className='border-align-right' href="#home"><img style={{ width: "200px" }} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link className='text-gradient' style={{ fontSize: "30px" }} href="#"></Nav.Link>


          </Nav>
           <Nav>
            <Nav.Link smooth as={HashLink} to="/" className="mr-3">হোম</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link smooth as={HashLink} to="/" className="mr-3">নিবন্ধন</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link smooth as={HashLink} to="/" className="mr-3">টিকা কার্ড</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link smooth as={HashLink} to="/" className="mr-3">টিকা সনদ</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link smooth as={HashLink} to="/" className="mr-3">টিকা সনদ যাচাই</Nav.Link>
            </Nav>

        
      <button className='btn btn-danger'>English</button>


        </Navbar.Collapse>
      </Container>
  </Navbar>
    </section>
  );
};

export default NavPdfForm;