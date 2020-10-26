import React from "react";
import ProjectDetails from "../../untils/ProjectDetails";
import img1 from "../../assets/timefoxwatch/im1.png";
import img2 from "../../assets/timefoxwatch/im2.png";
import img3 from "../../assets/timefoxwatch/im3.png";
import img4 from "../../assets/timefoxwatch/im4.png";
import img5 from "../../assets/timefoxwatch/im5.png";
import img6 from "../../assets/timefoxwatch/im6.png";
import img7 from "../../assets/timefoxwatch/im7.png";
import img8 from "../../assets/timefoxwatch/im8.png";
import img9 from "../../assets/timefoxwatch/im9.png";
import img10 from "../../assets/timefoxwatch/im10.png";
import img11 from "../../assets/timefoxwatch/phone1.jpg";
import img12 from "../../assets/timefoxwatch/phone2.jpg";
import img13 from "../../assets/timefoxwatch/phone3.jpg";
import img14 from "../../assets/timefoxwatch/phone4.jpg";
function Timefox() {
  const title = "Timefoxwatch.com";
  const summary =
    "Timefoxwatch.com is an online watch store that was developed in React-Redux environment with advanced features of a real-life eCommerce web application.";
  const description = [
    <>
      As a Web Developer, I have always wanted to build an Ecommerce App. I
      wanted to know how to implement Add to Cart, Payment Gateways, Order
      Management System and so much more, so I decided to build my first
      eCommerce web app in my favorite JavaScript framework - React.js. Whole
      web platform (back-end and front-end) was completely done by me. Overall,
      about two months of my full-time work resulted in a responsive web
      application, with features like:
    </>,
    <>
      For user usage: Search products based on particular category, View product
      with zoom-in feature, Advance search based on category and price range,
      Related product, Load more products. Adjust quantity Signin to checkout
      Shopping cart Checkout with credit card and paypal Update profile, and a
      lot more.
    </>,
    <>
      For admin usage: Create product/category, Remove product/category, View
      and manage orders, Manage products update/delete, Role based access.
    </>,
  ];
  const techsDescription = [
    <>
      Responsive React/Redux web application rendering well on a variety of devices and window or screen sizes.
    </>,
    <>
      Back-end server using Node.js, Express.js and Mongo taking advantage of well-developed RESTful API and following MVC Pattern.
    </>,
    <>Braintree Sandbox as a testing environment for checkout feature.</>,
    <>AWS S3 and EC2 for product deployment.</>,
  ];
  const techUsed = [
    { name: "ReactJS", link: "https://reactjs.org/tutorial/tutorial.html" },
    { name: "NodeJS", link: "https://nodejs.org/en/" },
    { name: "ExpressJS",link: "https://www.tutorialspoint.com/expressjs/index.htm",},
    { name: "MongoDB",link: "https://www.mongodb.com/",},
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
    { name: "Angular", link: img6 },
    { name: "NodeJS", link: img7 },
    { name: "Angular", link: img9 },
    { name: "NodeJS", link: img8 },
    { name: "Angular", link: img10 },
  ];

  const imageMobile = [
    { name: "NodeJS", link: img11 },
    { name: "Angular", link: img12 },
    { name: "NodeJS", link: img13 },
    { name: "NodeJS", link: img14 },
  ];

  return (
    <ProjectDetails
      title={title}
      onlineLink= "http://timefoxwatch.com/"
      summary={summary}
      description={description}
      techsDescription={techsDescription}
      techUsed={techUsed}
      imageLaptop={imageLaptop}
      imageMobile={imageMobile}
    />
  );
}

export default Timefox;
