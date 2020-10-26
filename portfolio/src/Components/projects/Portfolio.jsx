import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/portfolio/p0.jpg";
import img2 from "../../assets/portfolio/p1.jpg"
import img3 from "../../assets/portfolio/p2.jpg";
import img4 from "../../assets/portfolio/p3.jpg";
import img5 from "../../assets/portfolio/p4.jpg";
import img6 from "../../assets/portfolio/po1.png";
import img7 from "../../assets/portfolio/po2.png";
import img8 from "../../assets/portfolio/po3.png";
import img9 from "../../assets/portfolio/po4.png";
function Portfolio() {
    const title = "My Professional Website";
    const summary =
        "This is my professional website. I use it to showcase the projects I have done since I started learning about web development. I designed and implemented this site in summer 2019. It took me about 2 weeks to get the work done.";
    const description = [
        <>
        </>,
    ];
    const techsDescription = [
        <>
           Single-page web application ultilizing Angular routing.
        </>,
        <>
          Reponsive site rendering well on a variety of devices and window or screen sizes with Bootstrap grid system and Angular Material.
        </>,
        <>Static website hosting with AWS S3 with custom domain.</>,
        <>Continuous deployment using AWS CodePipeLine and GitHub.</>,
    ];
    const techUsed = [
        { name: "Angular", link: "https://angular.io/" },
        { name: "Angular Material", link: "https://material.angular.io/" },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
        { name: "HTML", link: "https://html.com/" },
        { name: "CSS", link: "https://htmldog.com/guides/css/" },
    ];

    const imageLaptop = [
        { name: "Angular", link: img6 },
        { name: "NodeJS", link: img7 },
        { name: "Angular", link: img8 },
        { name: "NodeJS", link: img9 },
    ];

    const imageMobile = [
        { name: "Angular", link: img1 },
        { name: "NodeJS", link: img2 },
        { name: "ExpressJS", link: img3 },
        { name: "Bootstrap", link: img4 },
        { name: "Angular", link: img5 },
    ];

    return (
        <ProjectDetails
            title={title}
            onlineLink= "http://newportfoliodnt.s3-website.us-east-2.amazonaws.com/"
            summary={summary}
            description={description}
            techsDescription={techsDescription}
            techUsed={techUsed}
            imageLaptop={imageLaptop}
            imageMobile={imageMobile}
        />
    );
}

export default Portfolio;
