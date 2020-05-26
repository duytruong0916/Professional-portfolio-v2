import React from "react";
import { useSpring, animated as a } from 'react-spring'
import { Row, Col } from "react-bootstrap";
import profile from '../assets/avarta3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(props) {
  AOS.init({ duration: 2000, delay: 500});
  const [flipped, set] = React.useState(false)
  const [activateAnimation, setActivateAnimation] = React.useState(false);
  const animationRef = React.useRef();

  React.useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(animationRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        setActivateAnimation(true);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const Card = () => {
  //   const { transform, opacity } = useSpring({
  //     opacity: flipped ? 1 : 0,
  //     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  //     config: { mass: 5, tension: 500, friction: 80 }
  //   })
  //   return (
  //     <div>
  //       <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
  //         {renderSkillBar()}
  //       </a.div>
  //       <a.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
  //         {renderSkillSet()}
  //       </a.div>
  //     </div>
  //   )
  // }

  const renderProfile = () => (
    <div className="content px-3 px-md-5">
      <div className="text-center"><img src={profile} className="profile-image diamond-img shadow" /></div>
      <div className="mt-3 text-center">
        <span className="bold">A </span>
        <span className="hightlight">front-end web developer</span>
        <span className="bold"> with over </span>
        <span className="hightlight">2 years of experience.</span>
      </div>
      <div className="text-center">
        I have serious passion for UI effects, animations and creating intuitive,
        dynamic user experiences.
    </div>
    </div>
  );

  const renderOffer = () => (
    <div className="my-5">
      <div className="font-weight-bold content">
        I can help you with the following sides of your project:
      </div>
      <ul className="mt-3 about-list" data-aos="slide-right">
        <li className="mt-3">Verifying good UI/UX design.</li>
        <li className="mt-3">
          Building and implementing front-end web single page
          applications that integrate with back-end services and
          third-party partners.
      </li>
        <li className="mt-3">Designing and implementing REST APIs.</li>
        <li className="mt-3">
          Testing/Debugging new projects and site issues as they arise.
      </li>
        <li className="mt-3">Researching possible techs.</li>
      </ul>
    </div>
  );

  const renderSkillBar = () => (
    <div className="w-100 mx-auto" ref={animationRef}>
      <div className="section-title p-3">Skills</div>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>HTML</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'html' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>90%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>CSS</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'html' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>90%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>JavaScript</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'react' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>80%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>React</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'react' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>80%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>Angular</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'angular' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>50%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>Node.js</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'node' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>65%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>UI Design</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'ui-design' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>50%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>PHP</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'ui-design' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>50%</div></Col>
      </Row>
      <Row className="no-gutters mt-4" style={{ border: '#006c6c solid 1px' }}>
        <Col xs={3} className="skill  align-items-center d-flex justify-content-center"><div>Java</div></Col>
        <Col xs={8}>
          <div className="bar">
            <div className={`${activateAnimation ? 'ui-design' : ''} progress`}></div>
          </div>
        </Col>
        <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>50%</div></Col>
      </Row>
    </div>
  );

  const renderSkillSet = () => (
    <div className=" w-100 p-lg-4 position-absolute" onClick={() => set(state => !state)}>
      <div className="shadow p-md-5 p-4">
        <div className="subtile text-danger">
          <span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
        FRONT-END WEB DEVELOPMENT
      </div>
        <div className="mt-3">
          <span className="bold">I specialise in single-page applications written in Angular and
          React</span>
          <span className="bold">. I have created many responsive websites and web applications</span>
        that allow the user to experience the products in the best and most
        appropriate way suited to the device they are using.<span>
            Recently I became also a huge fan of one-way data flow and Redux-like
          architecture and also typed languages, e.g. TypeScript.</span>
        </div>
        <div className="bold mt-3">My current front-end toolset includes:</div>
        <div className="mt-3">
          HTML/CSS/Bootstrap,JavaScript/ES6, Angdivar 2+/Angular Material, React/Redux/Jest, Jquery, CASS/LESS, Ionic 4 +, WordPress,
      </div>
      </div>
      <div className="shadow p-4 p-md-5 mt-4">
        <div className="subtile text-danger">
          <span><i className="fa fa-pencil-square" aria-hidden="true"></i></span> BACK-END
        WEB DEVELOPMENT
      </div>
        <div className="mt-3">
          <span className="bold">In back-end development, my current stack involves Node.js, Java </span>, and a variety of
        frameworks, libraries and technologies related to them
      </div>
        <div className="mt-3">
          Nearly every app I have lanched in the past had the back-end done by me. My
          favorite server-side programming language is Node.js that allows me to
          comfortably use JaveScript in the server-side.
      </div>
        <div className="mt-3 bold">My current back-end toolset includes:</div>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Firebase</li>
          <li>RESTful API</li>
          <li>MySOL</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="about-wrapper d-flex align-items-center p-md-5 p-3 mb-md-5">
      <div>
        <div className="my-4 font-weight-bold about-list text-center text-danger" data-aos="slide-left">
          Let's make something special. 
        </div>
        <div className="section-title p-3">About me</div>
        <Row>
          <Col xs={12} xl={7}>
            {renderProfile()}
            {renderOffer()}
          </Col>
          <Col xs={12} xl={5} style={{paddingBottom:'10rem'}}>
            {renderSkillBar()}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
