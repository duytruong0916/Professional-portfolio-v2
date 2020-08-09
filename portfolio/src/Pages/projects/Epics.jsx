import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/epicsteambuilder/pic1.png";
import img2 from "../../assets/epicsteambuilder/pic2.png";
import img3 from "../../assets/epicsteambuilder/pic3.png";
import img4 from "../../assets/epicsteambuilder/pic4.png";
import img5 from "../../assets/epicsteambuilder/pic5.png";
function Epics() {
  const title = "Epics Team Builder";
  const summary =
    "Epic team builder is a program automates the process of building teams and allows users to select team formations based on a variety of desired factors.";
  const description = [
    <>
      It was the project I had for my senior design project at UTD. Along with
      the other team members, I created a user-friendly, platform agnostic,
      standalone application that was used to generate teams for the UTDesign
      EPICS program. Along the way we also attempted to improve the existing
      algorithm in order to create more, well balanced teams.
    </>,
    <>
      This project delivered the improvement of functionality present in the
      current application and made forming a team more robust. We modified the
      existing algorithm used to automate the team formation and make it more
      efficient. In addition, the variables processed via the user interface,
      such as team size and number of choices, were adjusted by using this
      algorithm.
    </>,
  ];
  const techsDescription = [
    <>
      Single-page React application
    </>,
    <>
      Redux for state management and data transition
    </>,
    <>Bootstrap and CSS grid for styling</>,
    <>GitHub for project management</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "Redux", link: "https://redux.js.org/basics/basic-tutorial" },
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
      onlineLink="http://epics-team-builder.s3-website-us-east-1.amazonaws.com/"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Epics;
