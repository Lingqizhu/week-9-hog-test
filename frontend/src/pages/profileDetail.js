import React, { useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import MainScreen from "../components/MainScreen";
import {getProfiles,getProfile} from "../actions/profilesActions";
import { useDispatch,useSelector } from "react-redux";
import {
  BsLinkedin,
  BsGithub,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsFillEnvelopeFill,
  BsTrashFill,
} from "react-icons/bs";


export default function ProfileDetail() {
  const navigate=useNavigate();
  const{id}=useParams();
  const dispatch = useDispatch();
  const {profiles,profile} = useSelector((state) => state.profilesList);
  //const { profiles } = profilesList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getProfile(id));
  }, [id]);

  if(!profile) return null;

  console.log(userLogin)
  console.log(userInfo)
  console.log(profiles)
  console.log(profile)



/* const handClick=(_id)=>{
e.target.style.color = 'red'
  setMark(_id)
 } */
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
    return (
      <div>
         <center>
            <Card  id="profileCards" className="ad-container">
              {/* <span className="ad-main"> */}
                <Card.Header className="ad-userdetails">
                  <Card.Text as="h1">
                    <div className="avatar-container">
                      <img src={profile.picture} />
                    </div>
                    </Card.Text>
                    <div width="15"></div>
                    <Card.Text>
                    <Card.Text as="h3">{profile.fname} {profile.sname}
                   {/*  <span className="view-profile"><Button variant="outline-primary" onClick={()=>navigate("/profile")}>View</Button></span> */}</Card.Text>
                  </Card.Text>
                  <Card.Text className="available-indicator">{isAvailable(profile.available)}</Card.Text>
                  <Card.Title as="h6">Location: {profile.location}</Card.Title>

                </Card.Header>
                <br />
                <Card.Text>{profile.bio}</Card.Text>

                <Card.Text className="center">
                <a href={profile.cv}>
                  <Button variant="success">Download CV</Button>
                </a>&nbsp;&nbsp;
                <a href={profile.portfolio}>
                  <Button variant="success">Portfolio</Button>
                </a>
                </Card.Text>
                <Card.Text name="contact">
                  <BsGithub /> <a href={profile.github} target="_new">{profile.github}</a>
                </Card.Text>
                <Card.Text>
                  <BsLinkedin /> <a href={profile.linkedin} target="_new">{profile.linkedin}</a>
                </Card.Text>
                <Card.Text>
                  <BsFillEnvelopeFill />{" "}
                  <a href={'mailto:' + profile.email} target="_new">{profile.email}</a>
                </Card.Text>
              {/* </span> */}
            </Card>
            <br />
          </center>
      </div>
    )

  }
  return (
    <>
      <MainScreen title={`welcome back ${userInfo.username}`}>
        <div>{buildcard()}</div>
      </MainScreen>
    </>
  );
}
