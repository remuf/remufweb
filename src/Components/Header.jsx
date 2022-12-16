import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Components/logo.png";
import './custom.css';

function Header() {
  return (
    <div className='bg-img'>
    <Navbar bg="light" expand="lg" className='position-sticky'>
      <Container fluid className='ps-2'>
        <Navbar.Brand href="#">
            <img
            className='ps-2' 
            src= {logo} alt="logo" width={"80px"} height ={"40px"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0" 
            style={{ maxHeight: '200px', fontWeight: '600', padding: '0 10px'  }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Work</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
            <Nav.Link href="#action2">Message</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            {/* button */}
            <Nav.Link href="#action2">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <div className='contain'> </div> */}
    </div>
  );
}

export default Header;