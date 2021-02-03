import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/hayter/Hayter_Homepage.jpg";
import img2 from "../../assets/hayter/Hayter_Contact.jpg";
import img3 from "../../assets/hayter/Hayter_News_Insights.jpg";
import img4 from "../../assets/hayter/Hayter_Our_Work_Wastewater_Details_v1.jpg";
import img5 from "../../assets/hayter/Hayter_Our_Work_Wastewater_Landing.jpg";
import img6 from "../../assets/hayter/Hayter_Our_Work.jpg";
function Secret() {
  const title = "Haytereng.com";
  const summary =
    " A responsive and easy-to-navigate website with a supportive Drupal CMS developed for Hayter Engineering company in Paris TX.";
  const description = [
    <>
      Hayter Engineering was looking to invest more in their customers by
      providing a website that made it easy to do all things electric. The
      customer-centric approach also called for communicating friendliness and
      connecting on a community level.
    </>,
    <>
      With a supportive CMS and cohesive layout, Hayter’s website is
      user-friendly and acts as a window through which users can view and
      appreciate the excellence and innovation of Hayter services.
    </>,
  ];
  const techsDescription = [
    <>Supportive Drupal 8 CMS</>,
    <>Progressive and reposponive design</>,
    <>Powerful Nginx server and DNS management</>,
    <></>,
  ];
  const techUsed = [
    { name: "HTML", link: "https://html.com/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
    { name: "Javascript", link: "https://www.javascript.com/" },
    { name: "Jquery", link: "https://jquery.com/" },
    { name: "Drupal 8", link: "https://www.drupal.org/documentation" },
    { name: "PHP", link: "https://www.php.net/" },
  ];

  const imageLaptop = [
    { name: "Home page", link: img1 },
    { name: "Contact page", link: img2 },
    { name: "News", link: img3 },
    { name: "Projects", link: img4 },
    { name: "Works", link: img5 },
    { name: "Services", link: img6 },
  ];

  const imageMobile = [];

  return (
    <ProjectDetails
      title={title}
      onlineLink="https://haytereng.com/"
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
