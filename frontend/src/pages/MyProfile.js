import React, { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import MainScreen from "../components/MainScreen";
import {getProfiles} from "../actions/profilesActions";
import axios from "axios";

import { useDispatch,useSelector } from "react-redux";

export default function MyProfile() {

  const dispatch = useDispatch();

  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 // const [profiles, setProfiles] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("hello")
    }
  };

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  console.log(profilesList)
  const buildcard=()=>{
    return profilesList.map((profile)=>{
      return(
      <Accordion key={profile._id}>
      <Card style={{ margin: 10 }}>
        <Card.Header style={{ display: "flex" }}>
          <span
            style={{
              color: "white",
              textDecoration: "none",
              flex: 1,
              cursor: "pointer",
              alignSelf: "center",
              fontSize: 18,
            }}
          >
            <Accordion.Header>{profile.bio}</Accordion.Header>
          </span>
          <div>
            <Button
              variant="success" href={`/profile/${profile._id}`}
            >
              Edit
            </Button>
            <Button Click={() => deleteHandler(profile._id)} >
              Delete
            </Button>
          </div>
        </Card.Header>
        <Accordion.Body>
          <Card.Body>
            <Badge varian="success">{profile.avaiable}</Badge>
            <blockquote className="blockquote mb-0">
              <p> {profile.skills}</p>
              <br />
              <footer className="blockquote-footer">
               Update date
                <cite title="Source Title">{profile.updatedAt}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Accordion.Body>
      </Card>
    </Accordion>

    )})
  }
  return (
    <>
      <MainScreen title="welcome back">
        <Link to="createprofile">
          <Button>Create your profile</Button>
        </Link>
        <div>{buildcard()}</div>
      </MainScreen>
    </>
  );
}
