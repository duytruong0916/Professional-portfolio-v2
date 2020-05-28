import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/angubetta/one.png";
import img2 from "../../assets/angubetta/two.png"
import img3 from "../../assets/angubetta/three.png";
import img4 from "../../assets/angubetta/four.png";
import img5 from "../../assets/angubetta/five.png";
import img6 from "../../assets/angubetta/six.png";
function Angubetta() {
    const title = "Angubetta Fish Store";
    const summary =
        "AnguBetta is an E-commerce web app. The application worked as a Betta fish store in which users can explore an amazing world of Betta fish and pick their favorite one for a reasonable price.";
    const description = [
        <>
            This application is 60% completed. Some front-end and back-end
            implementation still needs to be done, including fetching data from the
            server, user's shopping cart and orders, user checkout and so on. I'm
            currently in my senior year of college,so it is pretty hard for me to have
            a lot of time for it. I expect to get the work done in 3-4 months.
        </>,
    ];
    const techsDescription = [
        <>
            Responsive web application rendering well on a variety of devices and
            window or screen sizes.
        </>,
        <>
            Stand-alone Frontend Angular app, which connects to the API server via
            HTTP.
        </>,
        <>Extensive backend API with Express.js and Node.js</>,
        <>Continuous deployment using AWS CodePipeLine and GitHub.</>,
    ];
    const techUsed = [
        { name: "Angular", link: "https://angular.io/" },
        { name: "NodeJS", link: "https://nodejs.org/en/" },
        { name: "ExpressJS", link: "https://expressjs.com/" },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
        { name: "HTML", link: "https://html.com/" },
        { name: "CSS", link: "https://htmldog.com/guides/css/" },
    ];

    const imageLaptop = [
        { name: "Angular", link: img1 },
        { name: "NodeJS", link: img2 },
        { name: "ExpressJS", link: img3 },
        { name: "Bootstrap", link: img4 },
    ];

    const imageMobile = [
        { name: "Angular", link: img5 },
        { name: "NodeJS", link: img6 },
    ];

    return (
        <ProjectDetails
            title={title}
            onlineLink="http://angubetta-app.s3-website.us-east-2.amazonaws.com/home"
            summary={summary}
            description={description}
            techsDescription={techsDescription}
            techUsed={techUsed}
            imageLaptop={imageLaptop}
            imageMobile={imageMobile}
        />
    );
}

export default Angubetta;
