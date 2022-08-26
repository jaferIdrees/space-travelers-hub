import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

function MainNavbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Logo" width="50" height="50" className="ms-0" />
          </Navbar.Brand>
          <Navbar.Brand>
            <h1 className="mainTitle">Space Travelers&apos; Hub</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ms-auto mb-0">
            <Nav variant="tabs" defaultActiveKey="/" className="ms-auto mb-0">
              <Nav.Item>
                <Nav.Link href="#" className="ms-auto mb-0">
                  <Link to="/" key="1">Rockets</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item eventKey="link-1">
                <Nav.Link eventKey="link-1">
                  <Link to="/missions" key="2">Missions</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mt-auto mb-auto">|</Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled">
                  <Link to="/my_profile" key="3">My Profile</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="navbarContainer">
        <nav className="navbar">
          <h1 className="mainTitle">Bookstore CMS</h1>
          <ul className="navBarUl">
            {links.map((link) => (
              <li key={link.id} className={link.text}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
    </>
  );
}

export default MainNavbar;
