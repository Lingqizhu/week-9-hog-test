import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthProvider";
//import NaviBar from "./NaviBar";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React, { useState, useEffect } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown'

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = async () => {
    window.localStorage.removeItem("token");
    setAuth({});
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#">Jobsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
       {/*  <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/" onClick={props.profile==""} style={{marginTop: "4px"}}>Dashboard</Nav.Link>
          <Nav.Link> <img src={props.user.picture} className="nav-picture" /> </Nav.Link>

          <NavDropdown title={props.user.email} id="navbarScrollingDropdown" style={{marginTop: "4px"}}>
            <NavDropdown.Item href="/profile" onClick={props.profile==""}>Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="/view" onClick={props.cProfile(props.user)}>View Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => props.logOut()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav> */}

        <Button variant="outline-warning" onClick={() => logOut()}>
            Logout
          </Button>
      </Navbar.Collapse>
    </Container>
    </Navbar>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/ParticipantDashboard">Go to the ParticipantDashboard</Link>
      <br />
      <Link to="/EmployerDashboard">Go to the EmployerDashboard</Link>
      <br />
      <Link to="/TdaDashboard">Go to the TdaDashboard</Link>
      <br />

      <Link to="/Profile">Go to the Profile</Link>
      <br />
      <Link to="/Employer">Go to the Employer</Link>
      <br />
      <Link to="/Dashboard">Go to the Dashboard</Link>
      <br />
      <Link to="/View">Go to the View</Link>
      <br />
      <Link to="/Navibar">Go to the Navibar</Link>

     {/*  <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div> */}
    </>
  );
};

export default Home;
