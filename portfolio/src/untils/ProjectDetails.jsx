import React from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "aos/dist/aos.css";

function ProjectDetails(props) {
  AOS.init({ duration: 500, delay: 100, once: true });
  return (
    <>
      <RouterLink to="/" className=" go-back-button svg-wrapper">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="long-arrow-alt-left"
          class="svg-inline--fa fa-long-arrow-alt-left fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
          ></path>
        </svg>
      </RouterLink>
      <div className="project-details-wrapper" id="Top">
        <div className="project-title">{props.title}</div>
        <div className="">
          <div className="project-detail-summary">{props.summary}</div>
          {props.description.map((des, i) => (
            <div className="project-description" key={i}>
              {des}
            </div>
          ))}
          <div className="tech-inner-wrapper">
            <div
              className="tech-wrapper-1"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="project-tech-title">Tech wrap-up:</div>
              <div className="tech-list">
                {props.techsDescription.map((tech, i) => (
                  <div key={i} className="item">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tech-wrapper-2"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="tech-inner-wrapper-2">
                <div className="project-tech-title">Technologies used:</div>
                <div className="list">
                  {props.techUsed.map((tech, i) => (
                    <a
                      href={tech.link}
                      className="text-decoration-none mt-2"
                      target="_blank"
                    >
                      {tech.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <a href={props.onlineLink} target="_blank">
              <button className="button-link mt-4">
                <span>View Online</span>
              </button>
            </a>
          </div>
          <div>
            {props.imageLaptop.map((im, i) => (
              <div key={i} className="mt-5" data-aos="fade-up">
                <img src={im.link} alt={im.name} className="w-100" />
              </div>
            ))}
          </div>
          <div>
            <Row className="">
              {props.imageMobile.map((im, i) => (
                <Col xs={12} md={6} key={i} data-aos="fade-up">
                  <img src={im.link} alt={im.name} className="w-100" />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <Link
          to="Top"
          className="go-top-button"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <div className="circle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-alt-left"
              className="svg-inline--fa fa-long-arrow-alt-left fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProjectDetails;
