import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';

function ProjectDetails(props) {
    AOS.init({ duration: 700, delay: 100 });
    const topRef = React.createRef();

    return (
        <>
            <div><Link to="/" className="go-back-button">Projects</Link></div>
            <div className="project-details-wrapper p-md-5 p-3" ref={topRef}>
                <div className="project-title my-3">{props.title}</div>
                <div className="p-md-5 p-2">
                    <Row>
                        <Col xs={12} md={7} style={{ borderRight: '1px solid black' }}>
                            <div className="project-summary">{props.summary}</div>
                            {props.description.map((des, i) => (
                                <div className="project-description mt-4" key={i}>
                                    {des}
                                </div>
                            ))}
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="project-tech-title my-4">Tech wrap-up</div>
                            <ul className="tech-list">
                                {props.techsDescription.map((tech, i) => (
                                    <li key={i} className="mt-2">{tech}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <div className="my-5">
                        <div className="project-tech-title">Technologies used</div>
                        <div>
                            {props.techUsed.map((tech, i) => (
                                <a href={tech.link} className="text-decoration-none" target="_blank">
                                    <button className="button-tech mx-2 my-2">{tech.name}</button>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center my-5">
                        <a href={props.onlineLink} target="_blank">
                            <button className="go-top-button">
                                <i className="fa fa-share-square-o" aria-hidden="true"></i> View online
                            </button>
                        </a>
                    </div>
                    <div>
                        {props.imageLaptop.map((im, i) => (
                            <div key={i} className="p-md-4 p-3" data-aos='zoom-out'>
                                <img src={im.link} alt={im.name} className="w-100" />
                            </div>))}
                    </div>
                    <div>
                        <Row className="p-md-4 p-3" >
                            {props.imageMobile.map((im, i) => (
                                <Col xs={12} md={6} key={i} data-aos='zoom-out'>
                                    <img src={im.link} alt={im.name} className="w-100" />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <div className="text-center my-5">
                    <button className="go-top-button" onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}>Back to top</button>
                </div>
            </div>
        </>
    )

}

export default ProjectDetails;