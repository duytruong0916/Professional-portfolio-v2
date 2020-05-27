import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/scrumstub/pic1.png";
import img2 from "../../assets/scrumstub/pic2.png";
import img3 from "../../assets/scrumstub/pic3.png";
import img4 from "../../assets/scrumstub/pic4.png";
import img5 from "../../assets/scrumstub/pic5.png";
import img6 from "../../assets/scrumstub/pic6.png";
import img7 from "../../assets/scrumstub/pic7.png";
import img8 from "../../assets/scrumstub/img1.jpg";
import img9 from "../../assets/scrumstub/img2.jpg";
import img10 from "../../assets/scrumstub/img3.jpg";
import img11 from "../../assets/scrumstub/img4.jpg";
import img12 from "../../assets/scrumstub/img5.jpg";
import img13 from "../../assets/scrumstub/img6.jpg";
function Scrumstub() {
  const title = "Scrumstubs.com";
  const summary =
    "Scrumstubs.com is a platform created in order to facilitate workshops, meet ups, conferences, and coaching in the world of the agile frameworks. The platform aims to provide a workflow driven solution which serves to expedite the process of managing and creating a large number of events.";
  const description = [
    <>
      Scrumstubs was the second project after Aleph-technologies.com that I and
      the team had developed during my time at Aleph Technologies. The entire
      platform was built from scratch and later maintained and guaranteed the
      stability and success. Overall, about 1 month of the team's full-time work
      resulted in a responsive web application, with features like:
    </>,
    <>
      For user usage: international marketplace allowing end-customers to browse
      workshops, meeting and courses, see their schedule and prices, and
      purchase them online; huge single page application for Partners (built in
      React.js) to manage their offers, schedules, prices, orders, customers and
      agents’ network; custom widgets written in JS, which Partners can put in
      order to advertise and sell their courses directly on their website; an
      ability for marketplace to list and sell the courses under a Partner’s or
      an Agent’s own branding and logo (and his own commision); notifications
      and orders management centre for customers and course organisers/pilots.
    </>,
    <>
      For admin usage: Create courses/events, Remove courses/events, View and
      manage orders, Manage courses/events update/delete, Role based access.
    </>,
  ];
  const techsDescription = [
    <>
      Responsive React web application rendering well on a variety of devices and window or screen sizes.
    </>,
    <>
     Back-end server using Python/Django taking advantage of well-developed RESTful API.
    </>,
    <>Stripe for checkout feature</>,
    <>GitHub for project management</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "Python", link: "https://docs.python.org/3/tutorial/" },
    { name: "Django", link: "https://docs.djangoproject.com/en/3.0/intro/tutorial01/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "HTML", link: "https://html.com/" },
    { name: "CSS", link: "https://htmldog.com/guides/css/" },
  ];

  const imageLaptop = [
    { name: "Angular", link: img1 },
    { name: "NodeJS", link: img2 },
    { name: "ExpressJS", link: img3 },
    { name: "Bootstrap", link: img4 },
    { name: "Bootstrap", link: img5 },
  ];

  const imageMobile = [
    { name: "Angular", link: img6 },
    { name: "NodeJS", link: img7 },
    { name: "Angular", link: img9 },
    { name: "NodeJS", link: img8 },
    { name: "Angular", link: img10 },
    { name: "NodeJS", link: img11 },
    { name: "Angular", link: img12 },
    { name: "NodeJS", link: img13 },
  ];

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

export default Scrumstub;
