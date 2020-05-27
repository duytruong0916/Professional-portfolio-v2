import React from "react";
import { Row, Col } from "react-bootstrap";
import Contact from './Contact';
import About from "./About";
import Projects from './Projects';
import { store } from "../Store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

function Home() {
  const homeRef = React.createRef();
  const aboutRef = React.createRef();
  const projectRef = React.createRef();
  const contactRef = React.createRef();
  const globalState = React.useContext(store);

  React.useEffect(() => {
    AOS.init({ duration: 700, delay: 100 });
    switch (globalState.state.refName) {
      case "homeRef":
        scrollToRef(homeRef);
        break;
      case "aboutRef":
        scrollToRef(aboutRef);
        break;
      case "projectRef":
        scrollToRef(projectRef);
        break;
      case "contactRef":
        scrollToRef(contactRef);
        break;
      default:
        break;
    }

  }, [globalState.state]);

  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
  
  const renderMedia = () => (
    <div className="media-wrapper">
      <div className="ml-md-5 git">
        <span>
          <a href="https://www.linkedin.com/in/duytruongfdp/" target="_blank"><i className="fa fa-linkedin" ></i></a>
        </span>
      </div>
      <div className="ml-md-5 email">
        <span>
          <a href="https://github.com/duytruong0916" target="_blank"><i className="fa fa-github icon" ></i></a>
        </span>
      </div>
      <div className="ml-md-5 fb">
        <span>
          <a href="https://www.facebook.com/nhatduy.truong.90" target="_blank"><i className="fa fa-facebook icon" ></i></a>
        </span>
      </div>
      <div className="ml-md-5 last">
        <span>
          <a href="https://www.instagram.com/nhatduy.truong.90/" target="_blank"><i className="fa fa-instagram icon" ></i></a>
        </span>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="w-100">
      <div className="p-md-5 p-4">
        <div class="hello-message-1 text-white">Hi, I'm Duy,</div>
        <div class="hello-message-2 text-white"> a web developer specialized in</div>
        <div class="hello-message-3">front-end development.</div>
        <div className="text-center mt-5">
          <button className="button-link link-2" onClick={() => scrollToRef(projectRef)}>
            <span>View My Work</span>
            <span className="ml-3"><i class="fa fa-long-arrow-right rotate-arrow" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAnimation = () => (
    <div>
      <div className="d-md-none d-block">
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="d-md-block d-none">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </div>
  )

  return (
    <div className="main-wrapper overflow-hidden">
      {renderAnimation()}
      {renderMedia()}
      <Navbar />
      <div className="home-wrapper d-flex align-items-center" ref={homeRef}>
        {renderHome()}
      </div>
      <div ref={aboutRef} style={{ background: 'black' }}>
        <div data-aos="flip-up"><About /></div>
      </div>
      <div ref={projectRef} className="bg-white">
        <div data-aos="fade"><Projects /></div>
      </div>
      <div ref={contactRef} className="bg-white">
        <div data-aos="zoom-in"><Contact/></div>
      </div>
    </div>
  );
}

export default Home;
