import React from "react";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { Row, Col, Accordion } from "react-bootstrap";
import profile from '../assets/avarta3.jpg'
import Constant from '../Constant';

function About(props) {
  const [isReadMore, setReadMore] = React.useState(true);
  const [activateAnimation, setActivateAnimation] = React.useState(false);
  const animationRef = React.useRef();
  const showMoreRef = React.useRef();
  const skills = [...Constant.skills];

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
  const readMore = () => {
    setReadMore(!isReadMore);
  };
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
    return (
      <div
        onClick={decoratedOnClick}
        ref={showMoreRef}
      >
        {children}
      </div>
    );
  }

  const mouseOutHandler = () => {
    if (isReadMore == false) {
      const timer = setTimeout(() => {
        showMoreRef.current.click();
        readMore();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }

  const renderAccordion = () => (
    <Accordion>
      <div onClick={readMore} className={`read-more ${isReadMore == true ? 'appear' : ''}`}>
        <CustomToggle eventKey="0">...show more</CustomToggle>
      </div>
      <Accordion.Collapse eventKey="0">
        <div>
          <p>
            Shortly after graduating from The University of Texas at Dallas,
            I joined the engineering team at Encore Multimedia
            where I work on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
          <div className="">
            I can help you with the following sides of your project:
          </div>
          <ul className="my-4">
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
      </Accordion.Collapse>
    </Accordion >
  )
  const renderProfile = () => (
    <div className="image-wrapper">
      <img src={profile} className="profile-image diamond-img shadow" />
    </div>
  );

  const renderOffer = () => (
    <div className="my-5" >
      <p>
        Hello! I'm Duy, a software engineer based in Dalls, TX.
      </p>
      <p>
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect,
        performant experiences. I also have serious passion for UI effects, animations and creating intuitive,
        dynamic user experiences.
      </p>
      {renderAccordion()}
    </div>
  );

  const renderSkillSet = () => (
    <div class="skill-set">
      <p>Here are a few technologies I've been working with recently:</p>
      <ul className="skills-list">
        {skills && skills.map((skill, i) => <li key={i}>{skill.name}</li>)}
      </ul>
    </div>
  );

  const renderSkillBar = () => (
    <div ref={animationRef} className="mt-5">
      {skills && skills.map((skill, index) => (
        <Row className="bar-main no-gutters mb-0 mb-lg-4 mt-5 mt-lg-0">
          <Col xs={5} xl={4} className="skill align-items-center d-flex justify-content-center"><div>{skill.name}</div></Col>
          <Col xs={6} xl={7}>
            <div className="bar">
              <div className={`${activateAnimation ? 'bar-' + skill.rate : ''} progress`}></div>
            </div>
          </Col>
          <Col xs={1} className="percent px-2 align-items-center d-flex justify-content-center"><div>{skill.rate}%</div></Col>
        </Row>
      ))}
    </div>
  );

  return (
    <>
      <div onMouseLeave={mouseOutHandler}>
        <Row className="content-wrapper" data-aos="fade-up" data-aos-delay="150" data-aos-once="true" data-aos-duration="500">
          <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 7 }}>
            {renderOffer()}
          </Col>
          <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 5 }}>
            {renderProfile()}
          </Col>
        </Row>
        <Row data-aos="fade-up" data-aos-delay="300" data-aos-once="true" data-aos-duration="1500">
          <Col xs={12} lg={5}>
            {renderSkillSet()}
          </Col>
          <Col xs={12} lg={7}>
            {renderSkillBar()}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
