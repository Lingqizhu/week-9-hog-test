import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import AuthContext from "./AuthProvider";
import { ApiClient } from "./apiClient";

function NaviBar(){
  const [profile, cProfile] = useState([]);
  const [user, cUser] = useState([]);
  const [users, cUsers] = useState([]);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const client = new ApiClient(auth.token);

  const logOut = async () => {
    window.localStorage.removeItem("token");
    setAuth({});
    navigate("/");
  };

 /*  const searchByEmail = (e) => {
    e.preventDefault();
    //console.log(current)
    let filtered = users.filter((current) =>
      current.email
        .toLowerCase()
        .includes(e.target.email.value.toLowerCase())
    );
    console.log(filtered)
    cUsers(filtered);
  }; */

  /* const refreshList = () => {
    client.getUsers().then((response) => cUsers(response.data));
  };
 */
   return(
<Navbar bg="light" expand="lg" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#">Jobsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/Dashboard" /* onClick={profile==""} */ style={{marginTop: "4px"}}>
            Dashboard
            </Nav.Link>
          <Nav.Link> <img src={auth.picture} className="nav-picture" /> </Nav.Link>

          <NavDropdown title={auth.email} id="navbarScrollingDropdown" style={{marginTop: "4px"}}>
            <NavDropdown.Item href="/profile"/*  onClick={profile==""} */>Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="/view" /* onClick={cProfile(user)} */>View Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => logOut()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>

          {/* <Button variant="warning" onClick={<Profile/>}>
            Profile
          </Button> */}
          {/* <Nav.Link href="#action2">{props.user.fname}</Nav.Link> */}
        </Nav>

      {/*   <Form onSubmit={(e) => searchByEmail(e)}>
        <Form.Label></Form.Label>
        <Form.Control  type="email" name="email" placeholder="searchbyemail" />
        <Button type="submit" >searchbyemail</Button>
      </Form> */}

    {/*   <Button variant="outline-success" type="submit" onClick={()=> {refreshList()}}>showAll</Button> */}

      </Navbar.Collapse>
    </Container>
    </Navbar>
   )


}

export default NaviBar;