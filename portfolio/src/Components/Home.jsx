import React from "react";
import Hero from './heroes/version-2';
import Contact from './Contact';
import About from "./About";
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';


function Home() {

  const renderMedia = () => (
    <div className="media-wrapper" data-aos="fade-up" data-aos-delay="2500" data-aos-once="true">
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

  return (
    <>
      <Navbar />
      <div className="main-wrapper overflow-hidden">
        <div className="home-wrapper" id="Home">
          <Hero />
          {renderMedia()}
        </div>
        <div id="About">
          <div className="section-title p-3" data-aos="fade-up" data-aos-delay="150" data-aos-once="true" data-aos-duration="500">
            <div className="wrapper mb-5 mb-lg-0">
              <span className="highlight-text">01.</span>About Me
            </div>
          </div>
          <About />
        </div>
        <div id="Experience">
          <div className="section-title p-3" data-aos="fade-up" data-aos-delay="150" data-aos-once="true" data-aos-duration="500">
            <div className="wrapper mb-5 mb-lg-0">
              <span className="highlight-text">02.</span>Where I've Worked
            </div>
          </div>
          <Experience />
        </div>
        <div id="Works">
          <div className="section-title p-3" data-aos="fade-up" data-aos-delay="150" data-aos-once="true" data-aos-duration="500">
            <div className="wrapper mb-5 mb-lg-0">
              <span className="highlight-text">03.</span>Some Things I’ve Built
            </div>
          </div>
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </>

  );
}

export default Home;
