import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NaviBar(props){

    console.log(`navibar props`,props)
        return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Jobsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Button variant="warning" onClick={() => props.logOut()}>
            Logout
          </Button>
          {/* <Button variant="warning" onClick={<Profile/>}>
            Profile
          </Button> */}
          {/* <Nav.Link href="#action2">{props.user.fname}</Nav.Link> */}
        </Nav>

        <Form onSubmit={(e) => props.buildsearch(e)} className="d-flex">
          <FormControl
            type="search"
            name="search"
            placeholder="Search Profiles"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
        <Button variant="outline-success" type="submit" onClick={() => props.refreshList()}>Refresh</Button>
      </Navbar.Collapse>
    </Container>
    </Navbar>
          )
}

export default NaviBar;