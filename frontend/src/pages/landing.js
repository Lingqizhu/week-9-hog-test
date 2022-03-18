import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingStyles.css";
import { useDispatch,useSelector } from "react-redux";
import {getProfiles} from "../actions/profilesActions";

function LandingPage(history) {
  const dispatch = useDispatch();
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getProfiles());
  }, [
    dispatch,
    history,
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
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
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
