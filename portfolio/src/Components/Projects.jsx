import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from '../untils/ProjectCard';
import FeaturedCard from '../untils/FeatureProjectCard';
import Constants from '../Constant';

function Projects() {

    const [options, setOptions] = React.useState([
        { name: 'All', active: true },
        { name: 'ReactJS', active: false },
        { name: 'Angular', active: false },
    ])
    const projects = Constants.projects;
    const featureProjects = Constants.features;
    const [filterdProjects, setFilteredProjects] = React.useState([]);

    const onOptionChange = (name) => {
        let new_options = [];
        options.forEach(option => option.name === name ? new_options.push({ ...option, active: true }) : new_options.push({ ...option, active: false }))
        setOptions(new_options);
        if (name === 'All') {
            setFilteredProjects(projects.slice());
        }
        else {
            setFilteredProjects(projects.filter(project => project.type === name));
        }
    };

    const renderFeatureProject = () => (
        <div className="feature-project-list-wrapper">
            {featureProjects && featureProjects.map((project, index) => <FeaturedCard key={index} project={project} index={index} />)}
        </div>
    )
    const renderProjects = () => {
        if (filterdProjects.length > 0) {
            return (
                <div>
                    <Row className="">
                        {filterdProjects.map((project, i) => (
                            <Col xs={12} md={6} lg={4} key={i} className="mt-5">
                                <Card project={project} />
                            </Col>
                        ))}
                    </Row>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Row className="no-gutters">
                        {projects.map((project, i) => (
                            <Col xs={12} md={6} lg={4} key={i} className="p-3">
                                <Card project={project} />
                            </Col>
                        ))}
                    </Row>
                </div>
            )
        }
    };

    const renderOption = () => (
        <div className="option-wrapper w-100 my-5">
            {options.map((option, i) => (
                <div key={i} className={`mx-5 mb-4 option ${option.active ? 'option-active' : ''}`} onClick={() => onOptionChange(option.name)}>
                    {option.name}
                </div>
            ))}
        </div>
    )

    return (
        <div className="">
            <div>
                {renderFeatureProject()}
            </div>
            <div className="project-listing">
                <div className="my-4" data-aos="fade-up" data-aos-delay="150" data-aos-once="true" data-aos-duration="500">
                    <div className="subsection-title">Other Interesting Projects</div>
                    <div className="highlight-text text-center">view the archive</div>
                </div>
                {/* {renderOption()} */}
                {renderProjects()}
            </div>
        </div>
    )
}

export default Projects;
