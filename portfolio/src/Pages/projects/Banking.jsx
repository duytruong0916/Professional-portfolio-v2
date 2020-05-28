import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/budget-app/one.png";
import img2 from "../../assets/budget-app/two.png";
import img3 from "../../assets/budget-app/three.png";
import img4 from "../../assets/budget-app/four.png";
import img5 from "../../assets/budget-app/five.png";
import img6 from "../../assets/budget-app/six.png";
import img7 from "../../assets/budget-app/seven.png";
function Banking() {
  const title = "Expensify";
  const summary =
    "The application helped users track their income, expenses and offered them a snapshot of their remaining budget to help them avoid overspending.";
  const description = [
    <>
      This was my first web application writen in React-Redux environment. Whole
      web platform (back-end and front-end) was completely done by me. Overall,
      about 1 month of my full-time work resulted in a responsive web
      application, with features like:
    </>,
    <>Register/LogIn/LogOut.</>,
    <>Add/edit/remove an expense.</>,
    <>Search by name/filter by date and amount.</>,
  ];
  const techsDescription = [
    <>
      Single-page Application written in React
    </>,
    <>
     Firebase back-end services, including authentication, database and API.
    </>,
    <>Responsive web application rendering well on a variety of devices and window or screen sizes.</>,
    <>Redux for state management.</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "Redux", link: "https://redux.js.org/basics/basic-tutorial" },
    { name: "Firebase", link: "https://firebase.google.com/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "HTML", link: "https://html.com/" },
    { name: "CSS", link: "https://htmldog.com/guides/css/" },
  ];

  const imageLaptop = [
    { name: "NodeJS", link: img7 },
    { name: "NodeJS", link: img2 },
    { name: "ExpressJS", link: img3 },
    { name: "Bootstrap", link: img4 },
  ];

  const imageMobile = [
    { name: "Angular", link: img1 },
    { name: "Angular", link: img5 },
    { name: "NodeJS", link: img6 },
  ];

  return (
    <ProjectDetails
      title={title}
      onlineLink="http://expensify-budget-app.s3-website.us-east-2.amazonaws.com/"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Banking;
