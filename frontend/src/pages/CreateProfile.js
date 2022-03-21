import React,{ useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import "../style.css";
import { useNavigate } from 'react-router-dom';
import {getProfiles,createProfile,updateProfile} from '../actions/profilesActions'
import MainScreen from "../components/MainScreen";

export default function CreateProfile(currentId) {

  const [fname,setfname]=useState("")
  const [sname,setsname]=useState("")
  const [email,setemail]=useState("")
  const [bio,setbio]=useState("")
  const [cv,setcv]=useState("")
  const [github,setgithub]=useState("")
  const [linkedin,setlinkedin]=useState("")
  const [portfolio,setportfolio]=useState("")
  const [location,setlocation]=useState("")
  const [picture,setpicture]=useState("")
  //const [skills,setskills]=useState([])
  const [available,setavailable]=useState(false)
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;

  const profile = useSelector((state) => currentId?state.profilesList.find((p)=>p._id === currentId.currentId):null);
  console.log(currentId)
  console.log(profilesList)
  console.log(profile)



  useEffect(() => {
    dispatch(updateProfile());
  }, [
    dispatch,
    userInfo
  ]);

  const resetHandler = () => {
    setfname("");setsname("");setemail("");setbio("");setcv("");setgithub("");setlinkedin("");setportfolio("");setavailable("");setlocation("");setpicture("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updateProfile(currentId,fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture))
    }else{
      dispatch(createProfile(fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture));
    }

    //resetHandler();

  };

  return (
    <MainScreen title="Create a profile">
      <div className="profile-container">
        <br />
        <Form onSubmit={handleSubmit} className="formProfile">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicfName">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  name="fname"
                  value={profile.fname}
                  placeholder="Enter Firstname"
                 onChange={(e)=>setfname(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicsName">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                   name="sname"
                   value={profile.sname}
                   placeholder="Enter Surtname"
                  onChange={(e)=>setsname(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                   name="email"
                   value={profile.email}
                   placeholder="Enter Email"
                  onChange={(e)=>setemail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name="location"
                  value={profile.location}
                  placeholder="Enter location"
                 onChange={(e)=>setlocation(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
             as="textarea"
             rows={5}
             name="bio"
             value={profile.bio}
            placeholder="Tell us about yourself."
            onChange={(e)=>setbio(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPortfolio">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control
                   name="portfolio"
                   value={profile.portfolio}
                   placeholder="Enter portfolio"
                  onChange={(e)=>setportfolio(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicGithub">
                <Form.Label>
                  <BsGithub /> Github
                </Form.Label>
                <Form.Control
                  name="github"
                  value={profile.github}
                  placeholder="Enter github"
                 onChange={(e)=>setgithub(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicLinkedin">
                <Form.Label>
                  <BsLinkedin /> Linkedin
                </Form.Label>
                <Form.Control
                  name="linkedin"
                  value={profile.linkedin}
                  placeholder="Enter linkedin"
                 onChange={(e)=>setlinkedin(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicPicture">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              name="picture"
              value={profile.picture}
              placeholder="Enter picture"
             onChange={(e)=>setpicture(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="forumUploadDoc">
            <Row>
              <Col>
                <Form.Label>Upload Your CV</Form.Label>
                <br />
                <Form.Control type="file" />
              </Col>
              <Col>
                <Form.Label>or URL</Form.Label>
                <Form.Control
                  name="cv"
                  value={profile.cv}
                  placeholder="cv"
                 onChange={(e)=>setcv(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              value={profile.available}
              placeholder="Available For Work?"
              onChange={(e)=>setavailable(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={resetHandler}>
            Reset
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
}