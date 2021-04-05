import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../untils/ProjectCard";
import FeaturedCard from "../untils/FeatureProjectCard";
import Constants from "../Constant";
import { Link, animateScroll as scroll } from "react-scroll";

function Projects() {
  const [options, setOptions] = React.useState([
    { name: "All", active: true },
    { name: "ReactJS", active: false },
    { name: "Angular", active: false },
  ]);
  const [count, setCount] = React.useState(6);
  const projects = Constants.projects;
  const featureProjects = Constants.features;
  const [filterdProjects, setFilteredProjects] = React.useState([]);

  const onCountHandle = () => {
    if (count < projects.length) {
      setCount(count + 3);
    } else {
      setCount(6);
    }
  };

  const onOptionChange = (name) => {
    let new_options = [];
    options.forEach((option) =>
      option.name === name
        ? new_options.push({ ...option, active: true })
        : new_options.push({ ...option, active: false })
    );
    setOptions(new_options);
    if (name === "All") {
      setFilteredProjects(projects.slice());
    } else {
      setFilteredProjects(projects.filter((project) => project.type === name));
    }
  };

  const renderFeatureProject = () => (
    <div className="feature-project-list-wrapper">
      {featureProjects &&
        featureProjects.map((project, index) => (
          <FeaturedCard key={index} project={project} index={index} />
        ))}
    </div>
  );

  const renderProjects = () => {
    return (
      <>
        <Row className="no-gutters">
          {projects.map((project, i) => {
            if (i < count) {
              return (
                <Col xs={12} md={6} lg={4} key={i} className="p-3">
                  <Card project={project} />
                </Col>
              );
            }
          })}
        </Row>
        <div className="text-center">
          <button className="button-link mt-5" onClick={onCountHandle}>
            {count < projects.length ? (
              "Show more"
            ) : (
              <Link
                onClick={onCountHandle}
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Show Less
              </Link>
            )}
          </button>
        </div>
      </>
    );
  };

  const renderOption = () => (
    <div className="option-wrapper w-100 my-5">
      {options.map((option, i) => (
        <div
          key={i}
          className={`mx-5 mb-4 option ${option.active ? "option-active" : ""}`}
          onClick={() => onOptionChange(option.name)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );

  return (
    <div className="">
      <div>{renderFeatureProject()}</div>
      <div className="project-listing">
        <div
          className="my-4"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-once="true"
          data-aos-duration="1200"
        >
          <div id="Projects" className="subsection-title mb-5">
            Other Interesting Projects
          </div>
          {/* <div className="highlight-text text-center">view the archive</div> */}
        </div>
        {/* {renderOption()} */}
        {renderProjects()}
      </div>
    </div>
  );
}

export default Projects;
