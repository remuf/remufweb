import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Components/logo.png";
import './custom.css';
import { useState } from 'react';

function Header() {
  const[color, setColor] = useState(false);
 
  window.onscroll = function() {
    if(window.scrollY > window.innerHeight){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  return (
    <>
    <div className='bg-img'>
    <Navbar  expand="lg" className= {color ? 'navbar scrolled fixed-top navbar-expand-lg ' :'navbar fixed-top navbar-expand-lg'}>
      <Container fluid className='ps-2'>
        <Navbar.Brand href="#">
            <img
            className='ps-2' 
            src= {logo} alt="logo" width={"80px"} height ={"40px"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 " 
            style={{ maxHeight: '200px', fontWeight: '600', padding: '0 10px'  }}
            navbarScroll
          >
            <Nav.Link className="text-dark" href="#action1">Home</Nav.Link>
            <Nav.Link className="text-dark" href="#action2">About Us</Nav.Link>
            <Nav.Link className="text-dark" href="#action2">Work</Nav.Link>
            <Nav.Link className="text-dark" href="#action2">News</Nav.Link>
            <Nav.Link className="text-dark" href="#action2">Message</Nav.Link>
            <Nav.Link className="text-dark" href="#action2">Contact Us</Nav.Link>
            {/* button */}
            <Nav.Link className="text-dark border border-dark" href="#action2">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-flex justify-content-start align-items-center container-md' style={{display:"flex", minHeight:"100vh", height: "auto"}}>
      <div className="row">
        <div className="col">
          <h1 className='text-white ps-5 ms-3 fs-1 fw-bold lh-lg'>Remuf Nepal</h1>
          <p className='text-white ps-5 ms-3 fs-2 lh-sm'> An Organisation build for Rautey's, <br/> to the Rautey's.</p>
        </div>
      </div>
    </div>
    {/* <div className='contain'> </div> */}
    </div>
    
    </>
  );
}

export default Header;