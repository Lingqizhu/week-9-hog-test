import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React, { useState, useEffect, useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
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

  console.log(auth)
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
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll>
          <NavDropdown title={auth.email} id="navbarScrollingDropdown" style={{marginTop: "4px"}}>
            <Link to="/home"/*  onClick={profile==""} */>Edit Profile</ Link>
            <Link to="/view" /* onClick={cProfile(user)} */>View Profile</Link>
            <Link to="/ParticipantDashboard">View ParticipantDashboard</Link>
            <Link to="/EmployerDashboard">View EmployerDashboard</Link>
            <NavDropdown.Divider />
            <Link to="/TdaDashboard">View TdaDashboard</Link>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Button variant="outline-success" type="submit" onClick={() => logOut()}>Logout</Button>
    </Container>
    </Navbar>
   )


}

export default NaviBar;