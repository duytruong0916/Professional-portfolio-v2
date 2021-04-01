import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/goldeye/pc1.png";
import img2 from "../../assets/goldeye/pc2.png";
import img3 from "../../assets/goldeye/pc3.png";
import img4 from "../../assets/goldeye/pc4.png";
import img5 from "../../assets/goldeye/pc5.png";
import img6 from "../../assets/goldeye/pc6.png";
import img7 from "../../assets/goldeye/pc7.png";
import img8 from "../../assets/goldeye/pc8.png";
import img9 from "../../assets/goldeye/pc9.png";

function Aleph() {
  const title = "goldeyeclinic.com";
  const summary =
    "A fully responsive website with a supportive CMS and cohesive layout developed for Gold Eye Clinic in Palestine TX .";
  const description = [
    <>
      Gold Eyes Clinic was looking to invest more in their customers by
      providing a website that made it easy to do all things electric. I was
      lucky enough to be responsible for developing their new website during my
      time at Encore. It took 2-3 months for the team to get this beautiful
      website live.
    </>,
    <>
      With a supportive CMS and cohesive layout, new Goldeye website allows the
      staffs to easily update content and upload new information to the site.
      And, obviously, it will bring more customers to the clinic.
    </>,
  ];
  const techsDescription = [
    <>Supportive and user-friendly Drupal 9 CMS</>,
    <>Progressive and reposponive design</>,
    <>Powerful Nginx server and DNS management</>,
    <>Custom Drupal themes & Symfony framework</>,
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
    { name: "image 1", link: img1 },
    { name: "image 2", link: img2 },
    { name: "image 3", link: img3 },
    { name: "image 4", link: img4 },
    { name: "image 5", link: img5 },
  ];

  const imageMobile = [
    { name: "image 6", link: img6 },
    { name: "image 7", link: img7 },
    { name: "image 8", link: img8 },
    { name: "image 9", link: img9 },
  ];

  return (
    <ProjectDetails
      title={title}
      onlineLink="https://goldeyeclinic.com/"
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
