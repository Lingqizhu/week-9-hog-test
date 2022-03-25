import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  Badge,
  Button,
  Card,
  Accordion,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import MainScreen from "../components/MainScreen";
import {
  getProfiles,
  updateProfile,
  deleteProfile,
} from "../actions/profilesActions";
import { useDispatch, useSelector } from "react-redux";

export default function EmployerDashboard({ history, search, select }) {
  const [searchSkill, setSearchSkill] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userLogin);
  console.log(userInfo);
  console.log(profilesList);
  console.log(profiles);

  useEffect(() => {
    dispatch(getProfiles());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  const buildcard = () => {

    return profiles
      .reverse()
      .filter((availbaleprofile) => availbaleprofile.available === true)
      .filter((filteredprofile) =>
        filteredprofile.skills.join("").toLowerCase().includes(search.toLowerCase())
      )
      .map((profile) => {
        return (
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
                  <Accordion.Header>
                    <img src={profile.picture} />
                    {profile.fname}
                    {profile.sname}
                    <br />
                    <br />
                    {profile.location}
                  </Accordion.Header>
                </span>
                <div>
                  <br />
                  <Button
                    variant="success"
                    onClick={() => navigate(`/profile/${profile._id}`)}
                  >
                    Details
                  </Button>
                  <br />
                  <br />
                  <Button>
                    <a href={"mailto:" + profile.email} target="_new">
                      Contact
                    </a>
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
                <Card.Body>
                  <Badge varian="success">{profile.avaiable}</Badge>
                  <blockquote className="blockquote mb-0">
                    <br />
                    <p> Skills: {profile.skills.map((skill) => `#${skill}`)}</p>
                    <p> {profile.bio}</p>
                    <br />
                    <footer className="blockquote-footer">
                      Update date:
                      <cite title="Source Title">
                        {profile.updatedAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion>
        );
      });
  };
  return (
    <>
      <MainScreen title={`welcome back ${userInfo.username}`}>
        <div>{buildcard()}</div>
      </MainScreen>
    </>
  );
}
