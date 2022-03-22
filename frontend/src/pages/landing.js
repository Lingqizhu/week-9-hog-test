import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingStyles.css";
import { useDispatch,useSelector } from "react-redux";
import {getProfiles} from "../actions/profilesActions";

function LandingPage() {
  const dispatch = useDispatch();
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userLogin)
  console.log(userInfo)
  console.log(profilesList)
  useEffect(() => {
    dispatch(getProfiles());
  }, [
    dispatch,

    userInfo
  ]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to My Jobsite</h1>
            </div>
            <div className="buttonContainer">

              <a href={profilesList.map((p)=>p.email).includes(userInfo.email)?"/participantDashboard":"/createprofile"}>
                <Button size="lg" className="landingbutton">
                I am a participant
                </Button>
              </a>

              <a href= "/employerDashboard">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  I am an employer
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
