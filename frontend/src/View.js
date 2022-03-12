import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Login from "./Login";
import Multi from "./components/MultiSelectSkills.js";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./style.css";

function View(props) {

    // console.log(`Profile props`, props.token);
    console.log("View props", props)
    // console.log("props.user.email", props.user.email)
    // console.log("available?", props.user.available)

  const checkRoleType = () => {
    if(props.profile?.role === "employer") {
    //   return (
    //     <Form.Group className="mb-1 view-details" controlId="formViewDetails">
    //       <Form.Label><b>{props.profile?.company}</b></Form.Label>
    //     </Form.Group>
    //   )
    // } else {
      return (
        <Form.Group className="mb-1 view-details" controlId="formViewDetails">
          <Form.Label><b>{props.profile?.fname} {" "} {props.profile?.sname}</b></Form.Label>
        </Form.Group>
      )
    }
  }

  const contactPerm = () => {
    if(props.user.role =="employer" || props.user.role =="tda") {
      return (
        <Form.Group className="mb-3" controlId="formBasicSkills">
          <hr/>
        <Button variant="primary" type="submit">
       {" "}
        Contact{" "}
       </Button>
       </Form.Group>
      )
    }
  }

    return (
        <center>
        {props.token ? (
            <div className="profile-container"><br/>
<Card id="profileCards" className="view-container">

<Form className="formProfile">
    <Row>

<img src={props.profile?.picture} className="view-container" />
        <Col></Col>
    <Col>
{checkRoleType()}
  </Col>
  <Col>
  </Col>
  </Row>
  <Row>
      <Col></Col>
      <Col>
      <Form.Group className="mb-1 view-details" controlId="formBasicEmail">
    <Form.Label>{props.profile?.location}</Form.Label>
  </Form.Group>
            </Col>
            <Col>
  </Col></Row>
  <Row>
  <Col></Col>
  <Col xs={8}>
  <Form.Group className="mb-3" controlId="formBasicSkills">
    <Form.Label>Skills</Form.Label>
    <Multi />
  </Form.Group>
</Col>
  </Row>

  <Form.Group className="mb-3" controlId="formBasicBio">
    <Form.Label>Bio</Form.Label>
    <Form.Control readOnly name="bio" type="text" as="textarea" placeholder="Empty." rows={5} defaultValue={props.profile?.bio} />
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group> */}
  <Form.Label>Links</Form.Label>
  <Row className="view-links-container">

  <Col>
      <Form.Group className="mb-1 view-details view-links" controlId="formBasicCv">
    <Form.Label title={props.profile?.cv}><a href={props.profile?.cv} target="_new">Download CV</a></Form.Label>
  </Form.Group>
            </Col>
      <Col>
      <Form.Group className="mb-1 view-details view-links" controlId="formBasicPortfolio">
    <Form.Label title={props.profile?.portfolio}><a href={props.profile?.portfolio} target="_new">Portfolio</a></Form.Label>
  </Form.Group>
            </Col>
            <Col>
  <Form.Group className="mb-1 view-details view-links" controlId="formBasicGithub">
    <Form.Label title={props.profile?.github}><a href={props.profile?.github}><BsGithub /> Github</a></Form.Label>
  </Form.Group>
            </Col>
            <Col>
  <Form.Group className="mb-1 view-details view-links" controlId="formBasicsLinkedin">
    <Form.Label title={props.profile?.linkedin}><a href={props.profile?.linkedin}><BsLinkedin /> Linkedin</a></Form.Label>
  </Form.Group>
            </Col>
            </Row>
{contactPerm(props)}
</Form>

</Card>
</div>
) : (

  <Login client={props.client} loggedIn={props.loggedIn}/>
)
}
        </center>
    )
}

export default View;