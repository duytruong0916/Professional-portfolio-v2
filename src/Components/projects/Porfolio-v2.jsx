import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";

function Aleph() {
  const title = "tnduy.me";
  const summary = "The second version of my personal website";
  const description = [
    <>
      After months of working and learning, I realized that I would need a new
      website to showcase my works to my potential employers. I decided to build
      it in React (my favorite Js framework), and it took me 2 weeks to get it
      live. Everything you see in this website was designed and developed by
      myself. I hope it does not look too bad ^^ to you.
    </>,
    <>
      There is nothing special about this project. The whole site was built in
      React. It is fully responsive as well. I also used some AWS services for
      CI/CD.
    </>,
  ];
  const techsDescription = [
    <>Written down in React environment.</>,
    <>Responsive design</>,
    <>Continuous deployment using AWS CodePipeLine and GitHub.</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "AWS", link: "https://aws.amazon.com/" },
    { name: "Git", link: "https://github.com/" },
    { name: "HTML", link: "https://html.com/" },
    { name: "SCSS", link: "https://htmldog.com/guides/css/" },
  ];

  const imageLaptop = [];

  const imageMobile = [];

  return (
    <ProjectDetails
      title={title}
      onlineLink="/"
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
