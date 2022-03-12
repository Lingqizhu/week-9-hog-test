import React, { useState, useEffect,useContext } from "react";
import { ApiClient } from "./apiClient";
import AuthContext from "./AuthProvider";
import NaviBar from "./NaviBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Permissions from "./components/FilePermissions";
import "./style.css";
import {
  BsLinkedin,
  BsGithub,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsFillEnvelopeFill,
  BsTrashFill,
  BsCursor,
} from "react-icons/bs";

//import { faBiohazard } from "@fortawesome/free-solid-svg-icons";

function TdaDashboard() {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [profile, cProfile] = useState([]);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const client = new ApiClient(auth.token);
  // console.log(`Dashboard props`,props)

  const refreshList = () => {
    client.getProfiles().then((response) => cProfiles(response.data));

  };

  useEffect(() => {
    refreshList();
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

  const filterProfile = (data) => {
    let theProfile = profiles.filter((current) =>
      current.email.toLowerCase().includes(data)
    );
    cProfile(theProfile[0]);
    navigate("/view");
  };

  const deleteProfile = (id) => {
    client.deleteProfile(id).then(() => refreshList());
  };

  const updateProfile = (id) => {
    cCurrent(id);
  };

  const buildcards = () => {
    // character limiting
    const bioCharLimits = (current) => {
      let bio = current.bio;
      if (bio == null) {
        return;
      } else {
        if (bio.length <= 250) {
          return bio;
        }
        const toShow = bio.substring(0, 250) + " ...";
        return (
          <>
            {toShow}{" "}
            <span
              style={{ fontWeight: "bolder", cursor: "pointer" }}
              onClick={() => filterProfile(current.email)}
            >
              read more
            </span>
          </>
        );
      }
    };

    return profiles.map((current) => {
      return (
        <center>
          <Card key={current._id} id="profileCards" className="ad-container">
            <Card.Header
              className="ad-userdetails"
              onClick={() => filterProfile(current.email)}
            >
              <Card.Text as="h1">
                <div className="avatar-container">
                  <img src={current.picture} />
                </div>
              </Card.Text>
              <div className="avatar-container spacer"> </div>
              <Card.Text>
                <Card.Text className="available-indicator float-right">
                  {isAvailable(current.available)}
                </Card.Text>
                <Card.Text as="h3">
                  {current.username}
                </Card.Text>
              </Card.Text>
              <div className="avatar-container spacer"> </div>
              <Button
                className="float-right"
                size="sm"
                onClick={() => filterProfile(current.email)}
                variant="secondary"
              >
                View Profile
              </Button>
              <Card.Title as="h6">Location: {current.location}</Card.Title>

            </Card.Header>
            <br />
            <Card.Text>{bioCharLimits(current)}</Card.Text>
            {/* <Card.Text>{current.bio}</Card.Text> */}

            {/*   <Permissions refreshList={props.refreshList} client={props.client} user={props.user} current={current} profile={props.profile} cProfile={props.cProfile} users={props.users}/> */}
          </Card>

          <div className="ad-footer">
            <strong>Admin Tools: </strong>&nbsp;&nbsp;
            <Button variant="warning" onClick={() => updateProfile(current)}>
                {" "}
                Edit Profile
              </Button>
              &nbsp;&nbsp;
              <Button variant="danger" onClick={() => deleteProfile(current._id)}>
                {" "}
                <BsTrashFill />
              </Button>
            </div>

          <br />
        </center>
      );
    });
  };

  return (
    <>
      <NaviBar/>
      <br />
      {buildcards()}
    </>
  );
}
export default TdaDashboard;
