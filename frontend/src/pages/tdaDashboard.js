import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import MainScreen from "../components/MainScreen";
import {getProfiles,updateProfile,deleteProfile} from "../actions/profilesActions";

import { useDispatch,useSelector } from "react-redux";

export default function TdaDashboard({history,search}) {

  const dispatch = useDispatch();

  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userLogin)
  console.log(userInfo)

 useEffect(() => {
  dispatch(getProfiles());
  if (!userInfo) {
    history.push("/");
  }
}, [
  dispatch,
  history,
  userInfo
]);

  console.log(profilesList)

  const buildcard=()=>{
    return profilesList
    .reverse()
    .filter((filteredprofile)=>filteredprofile.location.toLowerCase().includes(search.toLowerCase()))
    .map((profile)=>{
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
            <Accordion.Header>
            <img src={profile.picture}/>
              {profile.fname}{profile.sname}
              <br/>
              <br/>
              {profile.location}
              </Accordion.Header>
          </span>
          <div>
            <Button
              variant="success" onClick={()=>dispatch(updateProfile(profile._id))}
            >
              Edit
            </Button>
            <Button onClick={() => dispatch(deleteProfile(profile._id))} >
              Delete
            </Button>
          </div>
        </Card.Header>
        <Accordion.Body>
          <Card.Body>
            <Badge varian="success">{profile.avaiable}</Badge>
            <blockquote className="blockquote mb-0">
              <p> {profile.skills}</p>
              <p> {profile.bio}</p>
              <br />
              <footer className="blockquote-footer">
               Update date:
                <cite title="Source Title">{profile.updatedAt.substring(0,10)}</cite>
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
      <MainScreen title={`welcome back ${userInfo.username}`}>
        <Link to="createprofile">
          <Button>Create your profile</Button>
        </Link>
        <div>{buildcard()}</div>
      </MainScreen>
    </>
  );
}