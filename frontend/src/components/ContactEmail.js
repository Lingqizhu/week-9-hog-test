import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactEmail(props) {

const popUpContact = () => {
    let popup = document.getElementById("contactForm");
    console.log(popup)
if(popup.visibility=="hidden") {
    popup.classList.toggle("show");
} else {
    popup.classList.toggle("hide");
}
}

    return (
    <>
        {/* Contact Email Pop */}
        <div className="popup" onClick={() => popUpContact()}>
        <span className="popuptext" id="contactForm">
        <Form className="contactForm">
            <Row><Col xs={3}>
                <Form.Control name="contactName" type="name" placeholder="Business Name" />
            </Col><Col xs={5}>
                <Form.Control name="contactSender" type="email" placeholder="Enter email address" />
            </Col><Col xs={3}>
                <Button variant="success">Send Email</Button>
            </Col><Col xs={1}>
            <CloseButton onClick={() => popUpContact()} />
            </Col></Row><br/>
            <Row><Col>
                <Form.Control name="contactBody" type="text" as="textarea" rows={3} placeholder="..." />
            </Col></Row>
        </Form>
        </span>
        </div>
    </>
    )
}

export default ContactEmail;