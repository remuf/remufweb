import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import './custom.css';
import { useState } from 'react';
import Dialogue from './Dialogue';


function Header() {
  const[color, setColor] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  
  // console.log(window.location.href);
  //   console.log('current Pathname 👉️', window.location.pathname);
    const pathName = window.location.pathname === "/";
 
  window.onscroll = function() {
    if(window.scrollY > window.innerHeight){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  return (
    <>
    <Navbar  bg="white" expand="lg" className= {color ? 'navbar scrolled fixed-top navbar-expand-lg ' :'navbar fixed-top navbar-expand-lg'}>
      <Container fluid className='ps-2'>
        <Navbar.Brand href="/">
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
            <Nav.Link className="text-dark mx-2" href="/">Home</Nav.Link>
            <Nav.Link className="text-dark mx-2" href="/about">About Us</Nav.Link>
            <Nav.Link className="text-dark mx-2" href="/#work">Work</Nav.Link>
            <Nav.Link className="text-dark mx-2" href="/news">News</Nav.Link>
            <Nav.Link className="text-dark mx-2" href="/#contact">Contact Us</Nav.Link>
            {/* button */}
            <button className="text-white donation rounded-pill"
            onClick={() => setModalShow(true)}
            >Donate
            </button>
             <Dialogue 
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {pathName && <div className='container-fluid bg-img'>
      <div className='d-flex justify-content-start align-items-center container-md' 
      style={{display:"flex", minHeight:"100vh", height: "auto"}}>
      <div className="row d-flex flex-column align-items-center justify-content-center ">
        <div className="col d-flex justify-content-sm-start align-items-sm-start flex-column">
          <h1 className='text-white ps-5 ms-3 fs-1 fw-bold lh-sm'
          data-delay=".2s"
          data-animation="fadeInUp"
          style={{animationDelay: "0.2s" }}
          >SUPPORT RAUTE COMMUNITY <br/> REMUF NEPAL</h1> <br/>
          <p className='text-white ps-5 ms-3 fs-2 lh-sm '> An Organisation build for social service 
          <br/>to help humanity 
          <br/>and social justice
          </p>
        </div>
        <div className="col px-5 pt-2 gap-2 d-flex mt-3">
          <button className='text-white donation rounded-pill p-2 ms-4 fs-5 '
          onClick={() => setModalShow(true)}
          >Donate
          </button>
          <Nav.Link 
          className='btn btn-light text-dark ms-2 p-2 fs-5 rounded-pill'
          href="/#contact"
          style={{width: "140px", }} >Contact</Nav.Link>
          </div>
      </div>
    </div>
    </div>}

    </>
     
  
  );
}

export default Header;