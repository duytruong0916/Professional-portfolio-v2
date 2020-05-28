import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/images/home.png";
import img2 from "../../assets/images/pic1.png";
import img3 from "../../assets/images/pic2.png";
import img4 from "../../assets/images/pic3.png";
import img5 from "../../assets/images/pic4.png";
function Secret() {
  const title = "Secret Fish Store";
  const summary =
    "Have you ever tried to find a place to secretly store your memories? It is where you can look back to the beautiful moments that happened in the past. That’s what this web app is all about.";
  const description = [
    <>
      I built this web application during my summer break.It was my first
      front-end project. Whole web platform (back-end and front-end) was
      completely my work. Overall, about one month of my full-time work resulted
      in a responsive web application, with features like:
    </>,
    <>Sign up/log in/log out.</>,
    <>Add/edit/remove a memory post.</>,
    <>Add multiple images to a memory post</>,
  ];
  const techsDescription = [
    <>
      Stand-alone Frontend Angular app, which connects to the API server via HTTP
    </>,
    <>
      Bootstrap-responsive web application rendering well on a variety of devices and window or screen sizes.
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
    { name: "Angular", link: img5 },
  ];

  const imageMobile = [

  ];

  return (
    <ProjectDetails
      title={title}
      onlineLink="http://yoursecretstorage.com/home"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Secret;
