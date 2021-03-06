import React from "react";
import "../Css/signup.css";
import "../Css/footer.css"
import GoogleMap from "../Components/googleMap";import { Form,Center, Container,Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default(props) =>{
    return(
    <div >
        <Row>
            <Col style={{color:'orangered'}}>
                <center>
                    <h5>Follow us</h5>
                </center>
            </Col>
        </Row>
        <Row className ="Row" id="social-media-icons">
            <Col>
            <center>
            <a href='https://web.facebook.com/omarguyguy.sterling.92/'>
                <FontAwesomeIcon icon={faFacebook} size='2x' color='dodgerblue' style={{margin:'5px'}}/>
            </a>
           <a href='#'>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='skyblue' style={{margin:'5px'}}/>
            </a> 
            <a href="#">
                <FontAwesomeIcon icon={faInstagram} size='2x' color='violet'  style={{margin:'5px'}}/>
            </a>
            <a>
                <FontAwesomeIcon icon={faYoutube} size='2x' color='red' style={{margin:'5px'}}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faGithub} size='2x' color='white' style={{margin:'5px'}}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} size='2x' color='green' style={{margin:'5px'}}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faShare} size='2x' color='white' style={{margin:'5px'}}/>
            </a>
           
            </center>
            </Col>
            
        </Row>
        <div className="row" style={{marginTop:'2%'}}>
            <div  className="col-sm-12 col-md-6" id="get-in-touch">
                <h4 >Get in Touch</h4>
                <center>
                <Form style={{width:'100%',margin:'10px',padding:'20px'}}>
                    <Form.Group controlId="formBasicMessage">
                        <textarea placeHolder='Enter message' />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control 
                             type="text" name ="name" id = "formBasicMessage" placeholder="Enter your name" required />
                        <Form.Control
                             type="text" id = "formBasicMessage" placeholder="Email" required />
                        <Form.Control 
                            type="text" id = "formBasicMessage" placeholder="Enter Subject" required />
                    </Form.Group>
                    <Button style={{width:'100%',float:'left',marginRight:'25px',marginBottom:'5%',height:'100px'}}   type="submit" variant="outline-dark" className="col-12 btn" >
                        SEND
                    </Button>
                    </Form>
                </center>
            </div>
            <div className="col-sm-12 col-md-6" id="locate-us">
                <center>
                   <h4  >Locate Us</h4>
                   <div style={{width:'100%',marginBottom:'5%',marginTop:'5%'}}>
                       <GoogleMap/>
                   </div>
                </center>
            </div>
        </div>
        <Row>
            <Col className="col-sm-12">
                <center>
                    <p style={{color:'white',marginTop:'2%',marginBottom:'5%'}}>
                        &copy; 2020 by Real Team <FontAwesomeIcon icon ={faHeart } size='2x' color='orangered'/>
                    </p>
                </center>
            </Col>
        </Row>
    </div>
    )
}