import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Profile from "./Profile";
import NaviBar from "./NaviBar";
import { Route } from 'react-router';
import { useNavigate } from 'react-router-dom'

import {
  BsLinkedin,
  BsGithub,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsFillEnvelopeFill,
  BsTrashFill,
} from "react-icons/bs";
import "./style.css";

function Dashboard(props) {
const navigate = useNavigate();

  console.log(`Dashboard props`,props)
  // const [datas, cDatas] = useState([]);
  const [current, cCurrent] = useState(undefined);
  // const [user, cUser] = useState([]);

  // const currentUserEmail = window.localStorage.getItem("email")

  // const refreshUser = () => {
  //   datas.map((current) => {
  //     if(current.email == currentUserEmail){
  //     cUser(current)
  //     }
  //   })
  // }

  // const refreshList = () => {
  //   props.client.getDatas().then((response) => props.cDatas(response.data));
  // };

  const deleteData = (id) => {
    props.client.deleteDatas(id).then(() => props.refreshList());
  };

  const updateData = (data) => {
    cCurrent(data);
  };

  useEffect(() => {
    props.refreshList();
    // refreshUser()
  }, []);

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

  // const buildsearch = (e) => {
  //   e.preventDefault();
  //   // console.log(`Searched for`, e.target.search.value);
  //   // console.log(`datas`, datas);
  //   let filtered = props.datas.filter((current) =>
  //     current.email
  //       .toLowerCase()
  //       .includes(e.target.search.value.toLowerCase())
  //   );
  //   props.cDatas(filtered);
  //   // console.log(`filtered =`, filtered);
  // };

// const buildnav = () => {
//     return (
// <Navbar bg="light" expand="lg">
// <Container fluid>
//   <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//   <Navbar.Toggle aria-controls="navbarScroll" />
//   <Navbar.Collapse id="navbarScroll">
//     <Nav
//       className="me-auto my-2 my-lg-0"
//       style={{ maxHeight: '100px' }}
//       navbarScroll
//     >
//       <Nav.Link href="#action1">Home</Nav.Link>
//       <Nav.Link href="#action2">Link</Nav.Link>
//       <NavDropdown title="Link" id="navbarScrollingDropdown">
//         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action5">
//           Something else here
//         </NavDropdown.Item>
//       </NavDropdown>
//       <Button variant="warning" onClick={() => props.logOut()}>
//         Logout
//       </Button>
//       {/* <Button variant="warning" onClick={<Profile/>}>
//         Profile
//       </Button> */}
//       {/* <Nav.Link href="#action2">{props.user.fname}</Nav.Link> */}
//     </Nav>

//     <Form onSubmit={(e) => buildsearch(e)} className="d-flex">
//       <FormControl
//         type="search"
//         name="search"
//         placeholder="Search Profiles"
//         className="me-2"
//         aria-label="Search"
//       />
//       <Button variant="outline-success" type="submit">Search</Button>
//     </Form>
//     <Button variant="outline-success" type="submit" onClick={() => refreshList()}>Refresh</Button>
//   </Navbar.Collapse>
// </Container>
// </Navbar>
//       )
// }

  const buildcards = () => {
    return props.datas.map((current) => {
      return (
        //   console.log(current)
        <center>
          <Card key={current._id} id="profileCards" className="ad-container">
            {/* <span className="ad-main"> */}
              <Card.Header className="ad-userdetails">
                <Card.Text as="h1">
                  <div className="avatar-container">
                    <img src={current.picture} />
                  </div>
                  </Card.Text>
                  <div width="15"></div>
                  <Card.Text>
                  <Card.Text as="h3">{current.fname} {current.sname}
                  <span className="view-profile"><Button variant="outline-primary" onClick={()=>navigate("/profile")}>View</Button></span></Card.Text>
                </Card.Text>
                <Card.Text className="available-indicator">{isAvailable(current.available)}</Card.Text>
                <Card.Title as="h6">Location: {current.location}</Card.Title>

              </Card.Header>
              <br />
              <Card.Text>{current.bio}</Card.Text>

              <Card.Text className="center">
              <a href={current.cv}>
                <Button variant="success">Download CV</Button>
              </a>&nbsp;&nbsp;
              <a href={current.portfolio}>
                <Button variant="success">Portfolio</Button>
              </a>
              </Card.Text>
              {/* <Card.Text name="contact">
                <BsGithub /> <a href={current.github} target="_new">{current.github}</a>
              </Card.Text>
              <Card.Text>
                <BsLinkedin /> <a href={current.linkedin} target="_new">{current.linkedin}</a>
              </Card.Text>
              <Card.Text>
                <BsFillEnvelopeFill />{" "}
                <a href={'mailto:' + current.email} target="_new">{current.email}</a>
              </Card.Text> */}
            {/* </span> */}
          </Card>

          <div className="ad-footer">
            <strong>Admin Tools: </strong>&nbsp;&nbsp;
            <Button variant="warning" onClick={() => updateData(current)}>
                {" "}
                Edit Profile
              </Button>
              &nbsp;&nbsp;
              <Button variant="danger" onClick={() => deleteData(current._id)}>
                {" "}
                <BsTrashFill />
              </Button>

            </div>


          <br />
        </center>
      );
    });
  };


// console.log(`user`,user)
  return (
    <>

      {/* <h1>{userGroup()}</h1> */}
      {/* {buildnav()} */}
    <br/>
      {buildcards()}

    </>
  );
}
export default Dashboard;
