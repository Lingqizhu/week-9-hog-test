
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import "../style.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {createProfile,updateProfile} from '../actions/profilesActions'

export default function CreateProfile({currentId,setCurrentId}) {

  const [profile,setProfile]=useState({});

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const newprofile = useSelector((state) =>
   (currentId ? state.profilesList.find((message) => message._id === currentId) : null));

  //const { profiles } = profilesList;

  useEffect(()=>{
    if(newprofile){
      setProfile(newprofile)
    }
  },[newprofile]);

  const clear = () => {
    setCurrentId(0);
    setProfile({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createProfile(profile));
      clear();
    } else {
      dispatch(updateProfile(currentId, profile));
      clear();
    }
  };

  return (
    <>
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
                 onChange={(e)=>setProfile({...profile,fname:e.target.value})}
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
                  onChange={(e)=>setProfile({...profile,sname:e.target.value})}
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
                  onChange={(e)=>setProfile({...profile,email:e.target.value})}
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
                 onChange={(e)=>setProfile({...profile,location:e.target.value})}
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
            onChange={(e)=>setProfile({...profile,bio:e.target.value})}
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
                  onChange={(e)=>setProfile({...profile,portfolio:e.target.value})}
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
                 onChange={(e)=>setProfile({...profile,github:e.target.value})}
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
                 onChange={(e)=>setProfile({...profile,linkedin:e.target.value})}
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
             onChange={(e)=>setProfile({...profile,picture:e.target.value})}
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
                 onChange={(e)=>setProfile({...profile,cv:e.target.value})}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              value={profile.available}
              placeholder="Available For Work?"
              onChange={(e)=>setProfile({...profile,available:e.target.value})}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={clear}>
            Clear
          </Button>
        </Form>
      </div>
    </>
  );
}
