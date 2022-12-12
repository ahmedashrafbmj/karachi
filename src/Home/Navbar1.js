import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar1() {
  return (
    <>
      <Navbar style={{background:"#CCFF33",fontWeight:"bold"}} expand="lg">
      {/* <Navbar style={{background:"#CCFF33",fontWeight:"bold"}} expand="lg"> */}
      <Container fluid>
        <Navbar.Brand href="#">13karachi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Catgories</Nav.Link>
            <Nav.Link href="/My-Orders">My Orders</Nav.Link>
            <Nav.Link href="/sign-in">Sign in</Nav.Link>
          </Nav>
          <Nav>
        <Nav.Link href="/My-Profile">Profile</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Cart
        </Nav.Link>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbar1;