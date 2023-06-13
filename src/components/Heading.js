import { Nav, Navbar, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import HeaderImage from './../images/1.png'

const Heading = () => {
  return (
    <div>
      <Navbar bg="warning" variant="light" >
        <Container maxWidth="xl xs md">
          <Navbar.Brand href="#home">
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Menu"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#topanimelist">Top Anime List</NavDropdown.Item>
                <NavDropdown.Item href="#topanimelist">
                  Anime 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#topanimelist">Anime 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#topanimelist">
                  Anime 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button maxWidth="xl xs md" variant="outline-dark">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <img maxWidth="xl xs md" className='w-100' src={HeaderImage} alt='' />
    </div>
  );
}

export default Heading;