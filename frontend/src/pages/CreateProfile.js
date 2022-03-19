
import React,{ useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import "../style.css";
import { useNavigate } from 'react-router-dom';
import {createProfile,updateProfile} from '../actions/profilesActions'
import MainScreen from "../components/MainScreen";
import {getProfiles} from "../actions/profilesActions";
import FileBase from 'react-file-base64';

export default function CreateProfile() {

  const [profileData,setProfileData]=useState({fname:'',sname:'',email:'',bio:'',cv:'',github:'',linkedin:'',portfolio:'',available:'',location:'',picture:''});

  /* const [fname,setfname]=useState("")
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
  const [available,setavailable]=useState(false) */


  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;



  /* const profile = useSelector((state) =>
   (currentId ? state.profilesList.find((message) => message._id === currentId) : null)); */

  //const profileCreate = useSelector((state) => state.profileCreate)
  //const{profile}=profileCreate

  /* useEffect(()=>{
    if(profile){
      setData(profile)
    }
  },[profile]); */

  /* useEffect(() => {
    if(profile) setProfileData(profile);

  }, [
    dispatch,
  ]); */

  const resetHandler = () => {
    setProfileData({fname:'',sname:'',email:'',bio:'',cv:'',github:'',linkedin:'',portfolio:'',available:'',location:'',picture:''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createProfile(profileData));
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
                  value={profileData.fname}
                  placeholder="Enter Firstname"
                 onChange={(e)=>setProfileData({...profileData, fname:e.target.value})}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicsName">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                   name="sname"
                   value={profileData.sname}
                   placeholder="Enter Surtname"
                  onChange={(e)=>setProfileData({...profileData, sname:e.target.value})}
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
                   value={profileData.email}
                   placeholder="Enter Email"
                  onChange={(e)=>setProfileData({...profileData, email:e.target.value})}
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
                  value={profileData.location}
                  placeholder="Enter location"
                 onChange={(e)=>setProfileData({...profileData, location:e.target.value})}
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
             value={profileData.bio}
            placeholder="Tell us about yourself."
            onChange={(e)=>setProfileData({...profileData, bio:e.target.value})}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPortfolio">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control
                   name="portfolio"
                   value={profileData.portfolio}
                   placeholder="Enter portfolio"
                  onChange={(e)=>setProfileData({...profileData, portfolio:e.target.value})}
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
                  value={profileData.github}
                  placeholder="Enter github"
                 onChange={(e)=>setProfileData({...profileData, github:e.target.value})}
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
                  value={profileData.linkedin}
                  placeholder="Enter linkedin"
                 onChange={(e)=>setProfileData({...profileData, linkedin:e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicPicture">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              name="picture"
              value={profileData.picture}
              placeholder="Enter picture"
             onChange={(e)=>setProfileData({...profileData, picture:e.target.value})}
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
                  value={profileData.cv}
                  placeholder="cv"
                 onChange={(e)=>setProfileData({...profileData, cv:e.target.value})}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              value={profileData.available}
              placeholder="Available For Work?"
              onChange={(e)=>setProfileData({...profileData, available:e.target.value})}
            />
          </Form.Group>

          <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setProfileData({ ...profileData, selectedFile: base64 })} /></div>

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
