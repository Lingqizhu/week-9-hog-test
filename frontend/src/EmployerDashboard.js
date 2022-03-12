import React, { useState, useEffect, useContext} from "react";
//import { useNavigate } from "react-router-dom";
import NaviBar from "./NaviBar";
import { ApiClient } from "./apiClient";
import AuthContext from "./AuthProvider";
//import Add from "./Add";
//import SearchBar from "./searchBar";
//import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardHeader from "react-bootstrap/esm/CardHeader";

import {
  BsLinkedin,
  BsGithub,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsFillEnvelopeFill,
  BsTrashFill,
} from "react-icons/bs";
import "./style.css";

function EmployerDashboard() {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  //const [users, cUsers] = useState([]);
  const [search, cSearch] = useState('');
  /* const [location, cLocation] = useState(undefined);
  const [name, cName] = useState(undefined); */
  const { auth } = useContext(AuthContext);
  const client = new ApiClient(auth.token);


  const refreshList = () => {
    client.getProfiles().then((response) => cProfiles(response.data));
  };

  const isAvailable = (bCheck) => {
    if (bCheck == true) {
      return [
        <span className="ad-available">
          I'm Available For Hire <BsFillHandThumbsUpFill />
        </span>,
      ];
    } else {
      return [
        <span className="ad-not-available">
          I'm Unavailable <BsFillHandThumbsDownFill />
        </span>,
      ];
    }
  };

  const searchByEmail = (e) => {
    e.preventDefault();
    //console.log(current)
    let filtered = profiles.filter((current) =>
      current.email
        .toLowerCase()
        .includes(e.target.email.value.toLowerCase())
    );
    console.log(filtered)
    cProfiles(filtered);
  };

  /* const searchByLocation = (e) => {
    e.preventDefault();
    console.log(current)
    let filtered = users.filter((current) =>
      current.location
        .toLowerCase()
        .includes(e.target.location.value.toLowerCase())
    );
    cUsers(filtered);
  };

  const searchSkills = (e) => {
    e.preventDefault();
   users.map((current)=>{
      current.skills.map((skill)=>{
        if(skill === e.target.skills.value){
          console.log(current);
        }
      })
    })
  };
 */


  /* const searchAvaiable = (e) => {
    e.preventDefault();
    let filtered = users.filter((current) =>
      current.available
        .toLowerCase()
        .includes(e.target.search.value.toLowerCase())
    );
    cUsers(filtered);
  }; */


  useEffect(() => {
    refreshList();
  }, []);

  const buildcards = () => {
    return profiles.map((current) => {
     //console.log(current)
      return (
        <center>
          <NaviBar/>
          <Card key={current._id} id="profileCards" className="ad-container">
            <Card.Header className="ad-userdetails">
              <Card.Text as="h1">
                <div className="avatar-container">
                  <img src={current.picture} />
                </div>
              </Card.Text>
              <Card.Text className="available-indicator float-right">
              {isAvailable(current.available)}
              </Card.Text>
              <Card.Text as="h3">
                {current.username}
              </Card.Text>
              <Card.Title as="h6">{current.location}</Card.Title>
            </Card.Header>
            <br />
            <Card.Text>{current.bio}</Card.Text>
            <Card.Text className="center">
              <a href={current.cv}>
                <Button size="sm" variant="success">
                  Download CV
                </Button>
              </a>
            </Card.Text>
            <Card.Text name="contact">
              <BsGithub />{" "}
              <a href={current.github} target="_new">
                {current.github}
              </a>
            </Card.Text>
            <Card.Text>
              {" "}
              <BsLinkedin />{" "}
              <a href={current.linkedin} target="_new">
                {current.linkedin}
              </a>
            </Card.Text>
            <Card.Text>
              <BsFillEnvelopeFill />{" "}
              <a href={"mailto:" + current.email} target="_new">
                {current.email}
              </a>
            </Card.Text>
            <Card.Text>{current.skills}</Card.Text>
            <Card.Text>{current.portfolio}</Card.Text>
            <Card.Text>{current.createdAt}</Card.Text>
            <Card.Text>{current.updatedAt}</Card.Text>
          </Card>
        </center>
      );
    });
  };

  return (
    <div className="dashboard">
     {/*  <Form onSubmit={(e) => searchByEmail(e)}>
        <Form.Label></Form.Label>
        <Form.Control
        type="email"
        placeholder="searchbyemail"
        value={search}
        onChange={(e) => cSearch(e.target.value)}/>
        <Button type="submit" >searchbyemail</Button>
      </Form> */}

      <Form onSubmit={(e) => searchByEmail(e)}>
        <Form.Label></Form.Label>
        <Form.Control  type="email" name="email" placeholder="searchbyemail" />
        <Button type="submit" >searchbyemail</Button>
      </Form>
      <br/>
    {/*  <Form onSubmit={(e) => searchByLocation(e)}>
        <Form.Label></Form.Label>
        <Form.Control  type="text" name="location" placeholder="searchByLocation" />
        <Button type="submit" >searchByLocation</Button>
      </Form>
      <br />
        <Button variant="outline-success" type="submit" onClick={()=> {refreshList()}}>showAll</Button>


      <Form onSubmit={(e) => searchSkills(e)}>
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="searchSkills" />
        <Button type="submit">searchSkills</Button>
      </Form> */}
      <br />

     {/*  <Form onSubmit={(e) => searchAvaiable(e)}>
        <Form.Label></Form.Label>
        <Form.Control  type="search" name="search" placeholder="searchAvaiable" />
        <Button type="submit" >searchAvaiable</Button>
      </Form> */}

      <div>{buildcards()}</div>
      <br />
    </div>
  );
}

export default EmployerDashboard;