import React from 'react';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card(props) {
    AOS.init();
    return (
        <div className="card">
            <div className="card-content" style={{}}>
                <div className="icon">
                    <div className="folder" />
                    <Link to={props.project.link}>
                        <div className="detail" />
                    </Link>
                </div>
                <div className="project-name">{props.project.name}</div>
                <div className="project-sammary">{props.project.summary}</div>
                <div className="project-tech">{props.project.tech}</div>
            </div>
        </div>
    )
}

export default Card;
