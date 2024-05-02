import React from 'react';
import logo from '../Img/logo.png'
;
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    

  return (
    <Navbar expand="lg" className={scolled? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo}alt='Inke logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            
            <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Join Us</Nav.Link>
        </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a> */}
              </div>
            
              </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;