import React from "react";
import { useSpring, animated as a } from 'react-spring'
import { Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../untils/ProjectCard';
import Angubetta_image from '../assets/angubetta/profile.jpg';
import Scrumstubs_iamge from '../assets/scrumstub/pic1.png'
import Aleph_image from '../assets/aleph/pic1.png'
import epic_image from '../assets/epicsteambuilder/pic1.png'
import Ulti_image from '../assets/authenticate/img2.png'
import Ex_image from '../assets/budget-app/two.png'
import portfolio_image from '../assets/portfolio/po1.png'
import secret_image from '../assets/images/pic4.png'
import timefox_image from '../assets/timefoxwatch/im1.png'

function Projects() {
    AOS.init({ duration: 400, delay: 50 });
    const [options, setOptions] = React.useState([
        { name: 'All', active: true },
        { name: 'ReactJS', active: false },
        { name: 'Angular', active: false },
    ])
    const projects =
        [
            { name: 'AnguBetta store', type: 'Angular', tech: 'Angular / NodeJS / MongoDB', photo: `${Angubetta_image}`, link: '/projects/angubetta' },
            { name: 'ScrumStubs.com', type: 'ReactJS', tech: 'React / Python / Django', photo: Scrumstubs_iamge, link: '/projects/scrumstub' },
            { name: 'Aleph-techonologies.com', type: 'ReactJS', tech: 'React / Bootstrap / JavaScripts', photo: `${Aleph_image}`,link:'/projects/aleph' },
            { name: 'Epics Team Builder', type: 'ReactJS', tech: 'React / Redux / Bootstrap', photo: `${epic_image}`,link:'/projects/epics'},
            { name: 'Ultimate Authentication', type: 'ReactJS', tech: 'React / NodeJS / MongoDB', photo: `${Ulti_image}`,link:'/projects/ultimate' },
            { name: 'Expensify App', type: 'ReactJS', tech: 'React / Firebase / Bootstrap', photo: `${Ex_image}`, link:'/projects/banking'},
            { name: 'My Portfolio', type: 'Angular', tech: 'Angular / Angular Material / Bootstrap', photo: `${portfolio_image}`,link: '/projects/portfolio'},
            { name: 'Secret Storage', type: 'Angular', tech: 'Angular / NodeJS / ExpressJS', photo: `${secret_image}`, link: '/projects/secret' },
            { name: 'Timefoxwatch.com', type: 'ReactJS', tech: 'ReactJS / Redux / NodeJS', photo: `${timefox_image}`,link:'/projects/timefoxwatch'},
        ]
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


    const renderProjects = () => {
        if (filterdProjects.length > 0) {
            return (
                <div className="project-list-wrapper">
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
                <div className="project-list-wrapper">
                    <Row className="">
                        {projects.map((project, i) => (
                            <Col xs={12} md={6} lg={4} key={i} className="mt-5">
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
        <div className="project-wrapper d-flex align-items-center p-md-5 p-3 py-5">
            <div className="w-100">
                <div className="my-4 font-weight-bold about-list text-center" data-aos="slide-left">
                    <span className="text-white">See my works below. Unless explicitly stated otherwise, </span>
                    <span>all their back-end and front-end parts were completely done by me</span>
                </div>
                <div className="section-title p-3">Projects</div>
                {renderOption()}
                {renderProjects()}
            </div>
        </div>
    )
}

export default Projects;
