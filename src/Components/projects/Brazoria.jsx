import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/brazoria/pic.png";
import img2 from "../../assets/brazoria/pic1.png";
import img3 from "../../assets/brazoria/pic2.png";

function Brazoria() {
  const title = "brazoriacountyeda.com";
  const summary =
    "A fully responsive website with a supportive CMS and cohesive layout developed for Brazoria county in Houston TX.";
  const description = [
    <>
      Staffs of Brazoria county were investing in a website to better introduce the county to people who are looking for a new place. I was
      lucky enough to be responsible for developing their new website during my
      time at Encore. It took 2-3 months for the team to get this beautiful
      website live.
    </>,
    <>
      With a supportive CMS and cohesive layout, new Goldeye website allows the
      staffs to easily update content and upload new information to the site.
      And, obviously, it will bring more people and investors to the county.
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
    { name: "image 1", link: img1 },
    { name: "image 2", link: img2 },
    { name: "image 3", link: img3 },
  ];

  return (
    <ProjectDetails
      title={title}
      onlineLink="https://brazoriacountyeda.com/"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
    />
  );
}

export default Brazoria;
