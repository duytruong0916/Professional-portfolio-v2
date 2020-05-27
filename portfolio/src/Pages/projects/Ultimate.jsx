import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/authenticate/im3.png";
import img2 from "../../assets/authenticate/img2.png";
import img3 from "../../assets/authenticate/img4.png";
import img4 from "../../assets/authenticate/img5.png";
import img5 from "../../assets/authenticate/Untitled.png";
function Ultimate() {
  const title = "Ultimate-Authentication";
  const summary =
    "This project is an ultimate authentication system for web apps with features like account activation, forgot password, reset password, login with Facebook as well as Google using private and protected routes for authenticated user and users with the role of admin.";
  const description = [
    <>
      I found it time-consuming and and effort-wasting repeating building a user
      authentication system for each web app, so I decided to build a product
      ready authentication system for all the web apps I will make in the
      future.
    </>,
  ];
  const techsDescription = [
    <>
      Front-end was written down in React environment.
    </>,
    <>
      Back-end server using Node.js, Express.js and MongoDB taking advantage of well-developed RESTful API.
    </>,
    <>Utilizing SendGrid service to implement account acctivation and reset password</>,
    <>Continuous deployment using AWS CodePipeLine and GitHub.</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "NodeJS", link: "https://nodejs.org/en/" },
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

  const imageMobile = [];

  return (
    <ProjectDetails
      title={title}
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Ultimate;
