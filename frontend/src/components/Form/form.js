import React, { useState, useEffect, useContext} from "react";
import { useDispatch } from "react-redux";
import { createProfile } from "../../actions/profiles";

import CreatableSelect from "react-select/creatable";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from 'react-bootstrap/FormSelect'
import toastr from "toastr";
import { BsGithub, BsLinkedin, BsSlack } from "react-icons/bs";
import "../../style.css";
import "toastr/build/toastr.min.css";


toastr.options = {
  closeButton: true,
  debug: false,
  extendedTimeOut: "1000",
  hideDuration: "1000",
  hideEasing: "linear",
  hideMethod: "fadeOut",
  newestOnTop: false,
  onclick: null,
  positionClass: "toast-top-full-width",
  preventDuplicates: true,
  progressBar: true,
  showDuration: "500",
  showEasing: "swing",
  showMethod: "fadeIn",
  timeOut: "1000",
  paddingTop: "70",
  color: "black",
};

export default Form=()=> {
    const [profile,setProfile]=useState("")
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
      e.preventDefault();
      dispatch(createProfile(profile))
    }

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
                  type="name"
                  placeholder="Enter Firstname"
                  defaultValue={profile.fname}
                  onChange={(e)=>setProfile({...profile,fname:e.target.value})}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicsName">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  name="sname"
                  type="name"
                  placeholder="Enter Surname"
                  defaultValue={profile.sname}
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
                  type="email"
                  placeholder="Enter email"
                  defaultValue={profile.email}
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
                  type="name"
                  placeholder="Enter Location"
                  defaultValue={profile.location}
                  onChange={(e)=>setProfile({...profile,location:e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              name="bio"
              type="text"
              as="textarea"
              placeholder="Tell us about yourself."
              rows={5}
              defaultValue={profile.bio}
              onChange={(e)=>setProfile({...profile,bio:e.target.value})}
            />
          </Form.Group>

         {/*  <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicSkills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
              name="bio"
              type="text"
              as="textarea"
              placeholder="Tell us about yourself."
              rows={5}
              defaultValue={profile.skills}
              onChange={(e)=>setProfile({...profile,skills:e.target.value})}
            />
              </Form.Group>
            </Col>
          </Row> */}

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPortfolio">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control
                  name="portfolio"
                  type="link"
                  placeholder="Enter Website"
                  defaultValue={profile.portfolio}
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
                  type="link"
                  placeholder="Enter Github"
                  defaultValue={profile.github}
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
                  type="link"
                  placeholder="Enter Linkedin"
                  defaultValue={profile.linkedin}
                  onChange={(e)=>setProfile({...profile,linkedin:e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicPicture">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              name="picture"
              type="link"
              placeholder="Profile Photo"
              defaultValue={profile.picture}
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
                  type="text"
                  placeholder="https://..."
                  defaultValue={profile.cv}
                  onChange={(e)=>setProfile({...profile,cv:e.target.value})}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              type="checkbox"
              label="Available For Work?"
              checked={profile.available}
              onChange={(e)=>setProfile({...profile,available:e.target.value})}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Profile
          </Button>
         {/*  <Button variant="primary"  onClick={UpdateProfile}>
            Update Profile
          </Button>
          <Button variant="primary"  onClick={ClearProfile}>
            Clear Profile
          </Button> */}
        </Form>
      </div>
    </>
  );
}
