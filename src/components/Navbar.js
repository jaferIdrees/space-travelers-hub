// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/my_profile',
    text: 'My Profile',
  },
];
function MainNavbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Logo" width="50" height="50" className="ms-0" />
          </Navbar.Brand>
          <Navbar.Brand>
            <h1 className="mainTitle">Space Travelers&apos; Hub</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {links.map((link) => (
                <Nav.Link href={link.path} key={link.id}>{link.text}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default MainNavbar;
