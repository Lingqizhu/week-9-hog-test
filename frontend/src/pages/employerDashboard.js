import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import MainScreen from "../components/MainScreen";
import {getProfiles,updateProfile,deleteProfile} from "../actions/profilesActions";
import { useDispatch,useSelector } from "react-redux";

export default function EmployerDashboard({history,search}) {
  const [mark, setMark] = useState("Mark")
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

const handClick=(_id)=>{

  /* e.target.style.color = 'red' */
  setMark(_id)
 }

  console.log(profilesList)

  const buildcard=()=>{
    return profilesList
    .reverse()
    .filter((availbaleprofile)=>availbaleprofile.available===true)
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
              variant="success"  onClick={()=>handClick(profile._id)}
            >
            {mark==profile._id ? "Marked": "Mark"}
             {/*  Mark */}
            </Button>
            <br/>
            <br/>
            <Button >
            <a href={'mailto:' + profile.email} target="_new">Contact</a>

            </Button>
          </div>
        </Card.Header>
        <Accordion.Body>
          <Card.Body>
            <Badge varian="success">{profile.avaiable}</Badge>
            <blockquote className="blockquote mb-0">
            <br/>
            <p> Skills:{' '}{profile.skills.map((skill)=>`#${skill}`)}</p>
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
        <div>{buildcard()}</div>
      </MainScreen>
    </>
  );
}
