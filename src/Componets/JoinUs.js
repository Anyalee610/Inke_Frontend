import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';


export const Contact = () => {
  const formInitialDetails = {
    firstname: '',
    lastname: '',
    email: '',    
    message: ''
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const data = JSON.stringify(formDetails);
    console.log(data)
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/joinus/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    try {
      const response = await axios.request(config);
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      console.log(response.status)
      if (response.status === 201) {
        setStatus({ success: true, message: 'Profile sent successfully' });
        setButtonText("Sent");
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ success: false, message: 'Error sending profile. Please try again later.' });
    }
  };

  return (
    <section className="Contact" id="Contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" value={formDetails.message} placeholder="Leave Us A Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}