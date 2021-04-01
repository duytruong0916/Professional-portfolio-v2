import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/dmi/pc1.png";
import img2 from "../../assets/dmi/pc2.png";
import img3 from "../../assets/dmi/pc3.png";
import img4 from "../../assets/dmi/pc4.png";
import img5 from "../../assets/dmi/pc5.png";
import img6 from "../../assets/dmi/pc6.png";
import img7 from "../../assets/dmi/pc7.png";
import img8 from "../../assets/dmi/pc8.png";

function Aleph() {
  const title = "Thedigitalmarketinginstitute.org";
  const summary =
    "Thedigitalmarketinginstitute.org is a platform created in order to facilitate workshops, meet ups, conferences, and coaching in the world of the agile frameworks. The platform aims to provide a workflow driven solution which serves to expedite the process of managing and creating a large number of events.";
  const description = [
    <>
      While I was working fulltime for Encore Multimedia, I got an offer for a
      parttime job from IIDM. Again I got an apportunity to work on a React
      project, along with a team of 5, I had built the entire platform from
      scratch and later maintained it and guaranteed its’ stability and success.
      Overall, about 4 months of the team's full-time work resulted in a
      responsive web application, with features like:
    </>,
    <>
      For user usage: international marketplace allowing end-customers to browse
      workshops, meeting and courses, see their schedule and prices, and
      purchase them online; huge single page application for Partners (built in
      React.js) to manage their offers, schedules, prices, orders, customers and
      agents’ network; custom widgets written in JS, which Partners can put in
      order to advertise and sell their courses directly on their website;{" "}
      <br />
      User can also verify their licenses and print out the pdf version of it.
    </>,
    <>
      For admin usage: Create courses/events, Remove courses/events, View and
      manage orders, Manage courses/events update/delete, Role based access.
    </>,
  ];
  const techsDescription = [
    <>
      Responsive React web application rendering well on a variety of devices
      and window or screen sizes.
    </>,
    <>
      Back-end server using Python/Django taking advantage of well-developed
      RESTful API.
    </>,
    <>Stripe for checkout feature</>,
    <>GitHub for project management</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "Python", link: "https://docs.python.org/3/tutorial/" },
    {
      name: "Django",
      link: "https://docs.djangoproject.com/en/3.0/intro/tutorial01/",
    },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "HTML", link: "https://html.com/" },
    { name: "SCSS", link: "https://htmldog.com/guides/scss/" },
  ];

  const imageLaptop = [
    { name: "image 1", link: img1 },
    { name: "image 2", link: img2 },
    { name: "image 3", link: img3 },
    { name: "image 4", link: img4 },
  ];

  const imageMobile = [
    { name: "image 5", link: img5 },
    { name: "image 6", link: img6 },
    { name: "image 7", link: img7 },
    { name: "image 8", link: img8 },
  ];

  return (
    <ProjectDetails
      title={title}
      onlineLink="https://thedigitalmarketinginstitute.org/"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Aleph;
