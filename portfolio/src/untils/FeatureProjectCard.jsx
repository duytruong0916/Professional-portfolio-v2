import React from 'react';
import { Link } from 'react-router-dom'

function FeaturedCard({ project, index }) {
    return (
        <div className="feature-card" >
            <div className={`column-1`} style={{ order: `${index % 2 == 0 ? 1 : 2}` }}>
                <div className="feature-image-wrapper">
                    <Link to={project.link} className="link"><img src={project.photo} alt="photo" /></Link>
                </div>
            </div>
            <div className={`column-2`} style={{ order: `${index % 2 == 0 ? 2 : 1}`, textAlign: `${index % 2 == 0 ? 'right' : 'left'}` }}>
                <div className="feature-card-content">
                    <div className="highlight-text">Featured Project</div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-sammary">{project.summary}</div>
                    <div className="project-tech">{project.tech}</div>
                    <div className="icon">
                        <Link to={project.link && project.link}>
                            <div className="detail" />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeaturedCard;
