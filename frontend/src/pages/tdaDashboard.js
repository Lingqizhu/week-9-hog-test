import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import MainScreen from "../components/MainScreen";
import {getProfiles,updateProfile,deleteProfile} from "../actions/profilesActions";
import { useDispatch,useSelector } from "react-redux";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";


export default function TdaDashboard({search,setCurrentId}) {

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userLogin)
  console.log(profilesList)

 useEffect(() => {
  dispatch(getProfiles());
}, [
  dispatch,
  userInfo
]);

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
              {profile.fname}{' '}{profile.sname}
              <br/>
              <br/>
              {profile.location}


              </Accordion.Header>
          </span>
          <div>
            <Button
              variant="success" onClick={()=>{
                setCurrentId(profile._id);
                navigate("/createprofile")
              }}
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
              <p> Skills:{' '}{profile.skills.map((skill)=>`#${skill}`)}</p>
              <p> {profile.bio}</p>
              <p>{isAvailable(profile.available)}</p>
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