import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import toastr from "toastr";
import Login from "./Login";
import {
    BsGithub,
    BsLinkedin,
  } from "react-icons/bs";
import "./style.css";
import "toastr/build/toastr.min.css";

toastr.options = {
  closeButton: true,
  debug: false,
  extendedTimeOut: "3000",
  hideDuration: "1000",
  hideEasing: "linear",
  hideMethod: "fadeOut",
  newestOnTop: false,
  onClick: null,
  positionClass: "toast-top-full-width",
  preventDuplicates: true,
  progressBar: true,
  showDuration: "1000",
  showEasing: "swing",
  showMethod: "fadeIn",
  timeOut: "5000",
};

function Employer(props) {
    console.log("full props in Employer", props)

    const submitHandler = (e) => {
      e.preventDefault();
      props.client.updateEmployer(
        props.user._id,
        e.target.company.value,
        e.target.industry.value,
        e.target.bio.value,
        e.target.linkedin.value,
        e.target.website.value,
        e.target.email.value,
        e.target.location.value,
        e.target.picture.value
        // e.target.htmlyes.checked,
        // e.target.cssyes.checked,
        // e.target.jsyes.checked,
        // e.target.reactyes.checked,
        // e.target.expressyes.checked,
        // e.target.nodeyes.checked
      );
      toastr.success("Your profile updated successfully");
    }

    return (
      <>
        {props.token ? (
          <div className="profile-container"><br/>
            <Card id="profileCards" className="view-container">
              <Form onSubmit={(e) => submitHandler(e)} className="formProfile">
                <Row>
                  <img src={props.user.picture} className="view-container" />
                <Col></Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicfName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control name="company" type="name" placeholder="Name of your company" defaultValue={props.user?.company}/>
                  </Form.Group>
                </Col><Col>
                  <Form.Group className="mb-3" controlId="formBasicfName">
                      <Form.Label>Industry</Form.Label>
                      <Form.Control name="industry" type="name" placeholder="Your industry" defaultValue={props.user?.industry}/>
                  </Form.Group>
                </Col></Row>

                <Row>
                <Col></Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  name="email" type="email" placeholder="Enter email" defaultValue={props.user?.email} />
                    <Form.Text className="text-muted">
                      We'll never share your email.
                    </Form.Text>
                  </Form.Group>
                </Col><Col>
                  <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control  name="location" type="name" placeholder="Enter Location" defaultValue={props.user?.location} />
                  </Form.Group>
                </Col></Row>

                <Row>
                  <Form.Group className="mb-3" controlId="formBasicBio">
                    <Form.Label>Overview</Form.Label>
                    <Form.Control name="bio" type="text" as="textarea" placeholder="Details about your business" rows={5} defaultValue={props.user?.bio} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicBio">
                    <Form.Label>Skills you require</Form.Label>
                    <Row>
                      <Col><Form.Check name="htmlyes" type="checkbox" label="HTML" checked={props.user?.htmlyes}  /></Col>
                      <Col><Form.Check name="cssyes" type="checkbox" label="CSS" checked={props.user?.cssyes}  /></Col>
                      <Col><Form.Check name="jsyes" type="checkbox" label="JS" checked={props.user?.jsyes}  /></Col>
                      <Col><Form.Check name="reactyes" type="checkbox" label="React" checked={props.user?.reactyes}  /></Col>
                      <Col><Form.Check name="expressyes" type="checkbox" label="Express" checked={props.user?.expressyes}  /></Col>
                      <Col><Form.Check name="nodeyes" type="checkbox" label="Nodejs" checked={props.user?.nodeyes}  /></Col>
                    </Row>
                  </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPortfolio">
                      <Form.Label>Website</Form.Label>
                      <Form.Control name="website" type="link" placeholder="Enter Website" defaultValue={props.user?.website}/>
                    </Form.Group>
                  </Col><Col>
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

                  <Button variant="primary" type="submit">
                  {" "}
                  Update Profile{" "}
                  </Button>
              </Form>
            </Card>
          </div>

) : (
  <Login client={props.client} loggedIn={props.loggedIn} isEmployer={props.isEmployer} isTDA={props.isTDA} isEmail={props.isEmail}/>
)
}
      </>
    )
}

export default Employer;