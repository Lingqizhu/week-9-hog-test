import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Login from "./Login";
import {
    BsGithub,
    BsLinkedin,
  } from "react-icons/bs";
import "./style.css";

function Profile(props) {



    // console.log(`Profile props`, props.token);
    console.log("full props in Profile", props)
    console.log("props.user.email", props.user.email)
    console.log("available?", props.user.available)

    const navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault();
      props.client.updateDatas(
        props.user._id,
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
        e.target.picture.value
      );
    }

//     const doNav=() => {
//     navigate("/");
// }

// onSubmit={(e) => submitHandler(e)}

    return (
        <>
        {props.token ? (
            <div className="profile-container"><br/>
<Form onSubmit={(e) => submitHandler(e)} className="formProfile">
    <Row>
    <Col>
<Form.Group className="mb-3" controlId="formBasicfName">
    <Form.Label>Firstname</Form.Label>
    <Form.Control  name="fname" type="name" placeholder="Enter Firstname" defaultValue={props.user?.fname} />
  </Form.Group>
  </Col>
  <Col>
  <Form.Group className="mb-3" controlId="formBasicsName">
    <Form.Label>Surname</Form.Label>
    <Form.Control  name="sname" type="name" placeholder="Enter Surname" defaultValue={props.user?.sname} />
  </Form.Group>
  </Col>
  </Row>
  <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  name="email" type="email" placeholder="Enter email" defaultValue={props.user?.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
            </Col>
            <Col>
  <Form.Group className="mb-3" controlId="formBasicLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control  name="location" type="name" placeholder="Enter Location" defaultValue={props.user?.location} />
  </Form.Group>
  </Col></Row>

  <Form.Group className="mb-3" controlId="formBasicBio">
    <Form.Label>Bio</Form.Label>
    <Form.Control  name="bio" type="text" as="textarea" placeholder="Tell us about yourself." rows={5} defaultValue={props.user?.bio} />
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group> */}
  <Row>
      <Col>
  <Form.Group className="mb-3" controlId="formBasicPortfolio">
    <Form.Label>Portfolio</Form.Label>
    <Form.Control name="portfolio" type="link" placeholder="Enter Website" defaultValue={props.user?.portfolio}/>
  </Form.Group>
            </Col>
            <Col>
  <Form.Group className="mb-3" controlId="formBasicGithub">
    <Form.Label><BsGithub /> Github</Form.Label>
    <Form.Control name="github" type="link" placeholder="Enter Github" defaultValue={props.user?.github} />
  </Form.Group>
            </Col>
            <Col>
  <Form.Group className="mb-3" controlId="formBasicLinkedin">
    <Form.Label><BsLinkedin /> Linkedin</Form.Label>
    <Form.Control name="linkedin" type="link" placeholder="Enter Linkedin" defaultValue={props.user?.linkedin} />
  </Form.Group>
            </Col>
            </Row>
  <Form.Group className="mb-3" controlId="formBasicPicture">
    <Form.Label>Profile Photo</Form.Label>
    <Form.Control name="picture" type="link" placeholder="Profile Photo" defaultValue={props.user?.picture} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="forumUploadDoc">
  <Row><Col>
    <Form.Label>Upload Your CV</Form.Label><br/>
    <Form.Control type="file" />
    </Col>
    <Col>
    <Form.Label>or URL</Form.Label>
    <Form.Control name="cv" type="text" placeholder="https://..." defaultValue={props.user?.cv} ></Form.Control>
    </Col>
    </Row>
</Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check name="available" type="checkbox" label="Available For Work?" checked={props.user?.available}  />
  </Form.Group>
  <Button variant="primary" type="submit">
  {" "}
   Submit{" "}
  </Button>
</Form>
</div>
) : (

  <Login client={props.client} loggedIn={props.loggedIn} isEmployer={props.isEmployer} isTDA={props.isTDA} isEmail={props.isEmail}/>
)
}
        </>
    )
}

export default Profile;