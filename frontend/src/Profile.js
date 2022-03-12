import React, { useState, useEffect, useCallback, useContext } from "react";
import CreatableSelect from "react-select/creatable";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Select from 'react-bootstrap/FormSelect'
import toastr from "toastr";
import Login from "./Login";
import { ApiClient } from "./apiClient";
import AuthContext from "./AuthProvider";
import Multi from "./components/MultiSelectSkills.js";
import { BsGithub, BsLinkedin, BsSlack } from "react-icons/bs";
import "./style.css";
import "toastr/build/toastr.min.css";
import Select from "react-select";

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

function Profile() {
  const [profile, cProfile] = useState([]);
  const [courseVal, setCourseValue] = useState({
    label: "June 2021",
    value: 0,
  });

  const client = new ApiClient(auth.token);
  const { auth } = useContext(AuthContext);

  const handleCourseChange = (e) => {
    console.log(`e = `, e);
    setCourseValue(e);
  };

  /* const chooseProfile = () => {
    if (profile == "") {
      cProfile(auth);
    }
  }; */

  const courseOptions = [
    {
      label: "June 2021",
      value: 0,
    },
    {
      label: "January 2022",
      value: 1,
    },
    {
      label: "March 2022",
      value: 2,
    },
  ];

   /* const setSelectVal = () => {
    const tstVal = profile?.course;
    const typeOf = typeof tstVal;
    console.log(`tstVal `, tstVal)
    console.log(typeOf)
    return (tstVal);
  };  */

  // console.log(`Profile props`, props.token);
  //console.log("Profile props", props)
  // console.log("props.user.email", props.user.email)
  // console.log("available?", props.user.available)

  const submitHandler = (e) => {
    e.preventDefault();
    /* console.log(`new select id: `, e.id)
      console.log(`DB Course: `, props.profile?.course)
      console.log(`Target Course: `, e.target.course) */

    const courseId = Number(e.target.course.value);
    /* console.log(`Course Val: `, courseId) */

    client.updateUser(
      profile._id,
      e.target.fname.value,
      e.target.sname.value,
      e.target.bio.value,
      e.target.cv.value,
      e.target.github.value,
      e.target.linkedin.value,
      e.target.portfolio.value,
      e.target.available.checked,
      e.target.email.value,
      e.target.location.value,
      e.target.picture.value,
      courseId

      // e.target.htmlyes.checked,
      // e.target.cssyes.checked,
      // e.target.jsyes.checked,
      // e.target.reactyes.checked,
      // e.target.expressyes.checked,
      // e.target.nodeyes.checked
    );
    toastr.success("Your profile updated successfully");
  };

  const updateCourseDets = () => {
    /* console.log(`use effects `, profile.course) */
    setCourseValue(courseOptions[profile.course]);
  };

  useEffect(() => {
    updateCourseDets();
  }, []);

 /*  useEffect(() => {
    chooseProfile();
  }, []); */

  //console.log(`new props val `, props.profile?.course)
  return (
    <>
      <div className="profile-container">
        <br />
        <Form onSubmit={(e) => submitHandler(e)} className="formProfile">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicfName">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  name="fname"
                  type="name"
                  placeholder="Enter Firstname"
                  defaultValue={profile?.fname}
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
                  defaultValue={profile?.sname}
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
                  defaultValue={profile?.email}
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
                  defaultValue={profile?.location}
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
              defaultValue={profile?.bio}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicSkills">
                <Form.Label>Skills</Form.Label>
                <Multi />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className="mb-3" controlId="formBasicCourse">
                <Form.Label>Course Date</Form.Label>
                <Select
                  options={courseOptions}
                  name="course"
                  // defaultValue={courseVal ? courseOptions[courseVal] : courseOptions[0]}
                  value={courseVal}
                  onChange={handleCourseChange}
                ></Select>
              </Form.Group>
            </Col>
          </Row>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPortfolio">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control
                  name="portfolio"
                  type="link"
                  placeholder="Enter Website"
                  defaultValue={profile?.portfolio}
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
                  defaultValue={profile?.github}
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
                  defaultValue={profile?.linkedin}
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
              defaultValue={profile?.picture}
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
                  defaultValue={profile?.cv}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              type="checkbox"
              label="Available For Work?"
              checked={profile?.available}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {" "}
            Update Profile{" "}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Profile;
