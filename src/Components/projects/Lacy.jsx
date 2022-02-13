import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/lacy/home.png";
import img2 from "../../assets/lacy/history.png";
import img3 from "../../assets/lacy/leadership.png";
import img4 from "../../assets/lacy/location.png";

function Lacy() {
  const title = "Rlacy.com";
  const summary =
    "A fully responsive website with a supportive CMS and cohesive layout developed for Rlacy in LongView TX.";
  const description = [
    <>
      Rlacy was looking to invest more in their customers by
      providing a website that made it easy to do all things electric. The
      customer-centric approach also called for communicating friendliness and
      connecting on a community level.
    </>,
    <>
      With a supportive CMS and cohesive layout, Rlacy’s website is
      user-friendly and acts as a window through which users can view and
      appreciate the excellence and innovation of Rlacy services.
    </>,
  ];
  const techsDescription = [
    <>Supportive and user-friendly Statamic 3 CMS</>,
    <>Progressive and reposponive design</>,
    <>Powerful Nginx server and DNS management</>,
  ];
  const techUsed = [
    { name: "HTML", link: "https://html.com/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
    { name: "Javascript", link: "https://www.javascript.com/" },
    { name: "Jquery", link: "https://jquery.com/" },
    { name: "Statamic 3", link: "https://statamic.com/" },
    { name: "PHP", link: "https://www.php.net/" },
  ];

  const imageLaptop = [
    { name: "Home page", link: img1 },
    { name: "Contact page", link: img2 },
    { name: "News", link: img3 },
    { name: "Projects", link: img4 },
  ];

  const imageMobile = [];

  return (
    <ProjectDetails
      title={title}
      onlineLink="https://rlacy.com/"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Lacy;
