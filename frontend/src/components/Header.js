import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">HOG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/landingpage">Home</Nav.Link>
             {/*  {userInfo.role === "tda" ? (
                <> */}
                  <Nav.Link href="/tdaDashboard">TdaDashboard</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">
                      Register
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/participantDashboard">
                      ParticipantDashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/createprofile">
                      CreateProfile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/employerDashboard">
                      employerDashboard
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/piechart">
                      Statistics
                    </NavDropdown.Item>
                  </NavDropdown>
               {/*  </>
              ) : (
                <>null</>
              )} */}

              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
           {/*  <Form className="d-flex">
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option>skills</option>
                <option>location</option>
                <option>fname</option>
                <option>sname</option>
              </select>
            </Form> */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search skill"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
