import React from "react";
import { Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { store } from "../Store";
import resume from "../assets/files/resume.pdf";
import ContactForm from '../untils/ContactForm';

function Contact(props) {
    AOS.init({ duration: 2000, delay: 500 });
    const globalState = React.useContext(store);

    const ontoggleHanle = (refName) => {
        globalState.dispatch({ type: "SET_REF", refName });
    };

    const renderMedia = () => (
        <div className="d-flex align-items-center justify-content-center my-5 my-md-4" style={{ height: '100%' }}>
            <div className="ml-5 git shadow icon-wrapper">
                <span>
                    <a href="https://www.linkedin.com/in/duytruongfdp/" target="_blank"><i className="fa fa-linkedin" ></i></a>
                </span>
            </div>
            <div className="ml-5 email shadow icon-wrapper">
                <span>
                    <a href="https://github.com/duytruong0916" target="_blank"><i className="fa fa-github icon" ></i></a>
                </span>
            </div>
            <div className="ml-5 fb shadow icon-wrapper">
                <span>
                    <a href="https://www.facebook.com/nhatduy.truong.90" target="_blank"><i className="fa fa-facebook icon" ></i></a>
                </span>
            </div>
            <div className="ml-5 last shadow icon-wrapper">
                <span>
                    <a href="https://www.instagram.com/nhatduy.truong.90/" target="_blank"><i className="fa fa-instagram icon" ></i></a>
                </span>
            </div>
        </div>
    );

    return (
        <div className="contact-wrapper p-3 px-md-5 py-5"> 
            <Row>
                <Col xs={12} lg={3}>
                <div className="section-title px-3">Contact</div>
                <div className="font-weight-bold px-3">Phone: 214-235-5014</div>
                <div className="font-weight-bold px-3">Email: duytruong169@gmail.com</div>
                {/* <div className="text-left px-3 mt-3">
                    <a href={resume} target="_blank" className="quote text-decoration-none">My RESUME</a>
                </div> */}
                </Col>
                <Col xs={12} lg={6} className="mt-md-0 mt-5">
                <div className="quote text-left my-4" data-aos="slide-left">
                    I am available for hire and open to any ideas of cooperation.
                </div>
                <div className="overflow-hidden px-4">
                      <ContactForm />
                </div>
                </Col>
                <Col xs={12} lg={3}>
                     {renderMedia()}
                </Col>
            </Row>
       
            <div className="text-center mt-5">
                    <button className="go-top-button" onClick={() => ontoggleHanle("homeRef")}>
                        <i class="fa fa-angle-double-right" style={{ fontSize: '4rem' }}></i>
                    </button>
                </div>
        </div>
    );
}

export default Contact;
