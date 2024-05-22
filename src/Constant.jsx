import Angubetta_image from "./assets/angubetta/profile.jpg";
import Scrumstubs_iamge from "./assets/scrumstub/pic1.png";
import Aleph_image from "./assets/aleph/pic1.png";
import epic_image from "./assets/epicsteambuilder/pic1.png";
import Ulti_image from "./assets/authenticate/img2.png";
import Ex_image from "./assets/budget-app/two.png";
import portfolio_image from "./assets/portfolio/po1.png";
import secret_image from "./assets/images/pic4.png";
import timefox_image from "./assets/timefoxwatch/im1.png";
import dmi from "./assets/dmi/pc1.png";

const Constants = {
  works: {
    company: [
      "Amazon",
      "Cognizant",
      "Global Payments Inc",
      "Encore Multimedia",
      "Aleph Technologies",
      "FUJINET SYSTEMS JSC",
    ],
    data: [
      {
        company: "Amazon",
        information: {
          title: "Frontend Software Engineer",
          location: "Austin, Texas.",
          time: "08/2022 - Present",
          description: [
            "Played a crucial role in developing the Frontend for promotion widget during Prime Day event that was used by millions of users and generated millions in ",
            "Maintained and implemented new features for the Merchant Console app, aiding users in the management of orders, products, and payments.",
          ],
        },
      },
      {
        company: "Cognizant",
        information: {
          title: "Sr. Software Engineer",
          location: "Dallas, Texas.",
          time: "12/2021 - 08/2022",
          description: [
            "Developed the industry's premier enterprise-grade SaaS platform for shop management and sophisticated tools to help the automotive aftermarket thrive and grow",
            "Collaborated with designers to verify the¬ frontend design.",
            "Worked closely with backend engineers and product owner to build and ship moderately sized features and improvements.",
          ],
        },
      },
      {
        company: "Global Payments Inc",
        information: {
          title: "Software Engineer",
          location: "Atlanta, GA.",
          time: "6/2021 - Present",
          description: [
            "Developed and tested the frontend of a drag and drop tool for creating the decision tree that decides whether or not someone is approved for credit card.",
            "Optimized functionality and performance of the application.",
            "Collaborated with designers to architect the frontend of the application and participated in code review.",
          ],
        },
      },
      {
        company: "Encore Multimedia",
        information: {
          title: "Web Developer",
          location: "Longview, TX.",
          time: "7/2020 - 6/2021",
          description: [
            "Worked closely with designers and management team to develop marketing websites",
            "Assisted with Drupal custom module and theme development to meet the client needs",
            "Built a property/job search application in Vue and Laravel",
            "Identified areas for improvement in the front-end stack and provided solutions.",
          ],
        },
      },
      {
        company: "Aleph Technologies",
        information: {
          title: "Front End Developer",
          location: "Dallas, TX.",
          time: "1/2020 – 7/2020",
          description: [
            "Built React/Redux frontend for an event management solution.",
            "Fixed bugs from existing codebases.",
            "Implemented enhancements to improve the site functionality and performance.",
            "Supported Agile team culture and CI/CO.",
          ],
        },
      },
      {
        company: "Freelancer",
        information: {
          title: "Web Developer",
          location: "HCM, Vietnam",
          time: "1/2013 – 2/2015",
          description: [
            "Developed and maintained client websites using HTML, CSS and jQuery.",
            "Tested sites in various browsers and devices to ensure cross-browser compatibility and responsiveness",
            "Interfaced with designers and other developers to ensure thoughtful and coherent UI/UX.",
            "Provided estimates for implementing new features",
          ],
        },
      },
    ],
  },
  skills: [
    {
      name: "TypeScript (ES6+)",
      rate: "90",
    },
    {
      name: "React",
      rate: "90",
    },
    {
      name: "Vue",
      rate: "50",
    },
    {
      name: "Angular",
      rate: "50",
    },
    {
      name: "Node.js",
      rate: "50",
    },
    {
      name: "AWS",
      rate: "70",
    },
  ],

  projects: [
    {
      name: "Goldeyeclinic.com",
      type: "CMS",
      tech: "Drupal 9 / PHP / Javascript",
      link: "/projects/goldeye",
      summary:
        "A fully responsive website with a supportive CMS and cohesive layout developed for Gold Eye Clinic in Palestine TX .",
    },
    {
      name: "Aleph-techonologies.com",
      type: "ReactJS",
      tech: "React / ES6 / Django",
      link: "/projects/aleph",
      summary:
        "A platform created in order to facilitate workshops, meet ups, conferences, and coaching in the world of the agile frameworks.",
    },
    {
      name: "Wacochamber.com",
      type: "CMS",
      tech: "Statamic 3 / Vue / HTML & CSS",
      summary:
        "An economic development website with a supportive CMS and cohesive layout built for Waco city in Texas.",
    },
    {
      name: "Locatesiouxcity.com",
      type: "CMS",
      tech: "Statamic 3 / Vue / HTML & CSS",
      summary:
        "An economic development website with a supportive CMS and cohesive layout built for Sioux City in Iowa. ",
    },
    {
      name: "Brittswine.com",
      type: "CMS",
      tech: "PHP / Lumen / HTML & CSS",
      link: "/projects/brittswine",
      summary:
        "A responsive and beautiful website developed for a restaurant in East Texas",
    },
    {
      name: "ScrumStubs.com",
      type: "ReactJS",
      tech: "React / Python (Django) / Bootstrap",
      photo: Scrumstubs_iamge,
      link: "/projects/scrumstub",
      summary:
        "An Event Management Solution from Aleph Technologies LLC that allows to register for workshops, meeting and coaching courses.",
    },
    {
      name: "Haytereng.com",
      type: "CMS",
      tech: "Drupal 8 / PHP / JavaScript",
      photo: `${timefox_image}`,
      link: "/projects/hayter",
      summary:
        "A responsive and easy-to-navigate website with a supportive CMS developed for Hayter Engineering company in Paris TX.",
    },
    {
      name: "Rlacy.com",
      type: "CMS",
      tech: "Statamic 3 / Vue / HTML & CSS",
      link: "/projects/lacy",
      summary:
        "A fully-responsive and well-designed website with a supportive CMS and cohesive layout developed for R.lacy in Longview Tx.",
    },
    {
      name: "Brazoria County Website",
      type: "CMS",
      tech: "Statamic 3 / Vue / HTML & CSS",
      link: "/projects/brazoria",
      summary:
        "A fully-responsive and well-designed website with a supportive CMS and cohesive layout developed for Brazoria County in Houston TX.",
    },
    {
      name: "Personal Website V-2",
      type: "ReactJS",
      tech: "React / Bootstrap / HTML & (s)CSS",
      link: "/projects/porfolio-v2",
      summary: "The second version of personal website.",
    },
    {
      name: "Ultimate Authentication",
      type: "ReactJS",
      tech: "React / Node + Express / MongoDB",
      photo: `${Ulti_image}`,
      git: "https://github.com/duytruong0916/Ultimate-Authentication",
      link: "/projects/ultimate",
      summary:
        "An ultimate authentication system for web apps with features like account activation, forgot password, reset password, login with Facebook as well as Google",
    },
    {
      name: "Expensify App",
      type: "ReactJS",
      git: "https://github.com/duytruong0916/Budget-app",
      tech: "React / Firebase / Bootstrap",
      photo: `${Ex_image}`,
      link: "/projects/banking",
      summary:
        "An single-page application that helped users track their income and expenses.",
    },

    {
      name: "Personal Website V-1",
      type: "Angular",
      tech: "Angular + Material / HTML & CSS",
      photo: `${portfolio_image}`,
      link: "/projects/portfolio",
      git: "https://github.com/duytruong0916/professional-portfolio",
      summary:
        "My first personal website to showcase the projects I have done since I started learning about web development. I designed and implemented this site in summer 2019.",
    },
    {
      name: "AnguBetta store",
      type: "Angular",
      git: "https://github.com/duytruong0916/bettafishshop-ecommerce-webapp",
      tech: "Angular / Node.js / MongoDB",
      photo: `${Angubetta_image}`,
      link: "/projects/angubetta",
      summary:
        "An online Betta fish store in which users can explore an amazing world of Betta fish and pick their favorite one for a reasonable price.",
    },
    {
      name: "Secret Storage",
      type: "Angular",
      git: "https://github.com/duytruong0916/Secret-storage-app",
      tech: "Angular / Node.js / Express.js",
      photo: `${secret_image}`,
      link: "/projects/secret",
      summary:
        "A single-page application that allows to store images and stories in a safe place.",
    },
  ],

  features: [
    {
      name: "Thedigitalmarketinginstitute.org",
      type: "ReactJS",
      tech: "React / ES6 / Django",
      photo: `${dmi}`,
      link: "/projects/dmi",
      summary:
        "UI/UX for the website of International Institute of Digital Marketing website. IIDM™ is a certifying body founded in the USA by several long-standing marketers",
    },
    {
      name: "Epics Team Builder",
      type: "ReactJS",
      tech: "React / Redux / Bootstrap",
      photo: `${epic_image}`,
      link: "/projects/epics",
      git: "https://github.com/duytruong0916/epics-team-builder",
      summary:
        "A user-friendly, platform agnostic, standalone application that was used as program automating the process of building teams and allowing users to select team formations based on a variety of desired factorsteams for the UTDesign EPICS program.",
    },
    {
      name: "Timefoxwatch.com",
      type: "ReactJS",
      tech: "React / Redux / Node.js",
      git: "https://github.com/duytruong0916/ecommerce-frontend",
      photo: `${timefox_image}`,
      link: "/projects/timefoxwatch",
      summary:
        "Timefoxwatch.com is an online watch store that was developed in React-Redux environment with advanced features of a real-life eCommerce web application.",
    },
  ],

  media: [
    {
      name: "Github",
      link: "https://github.com/duytruong0916",
      icon: "fa fa-github icon",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/duytruongfdp/",
      icon: "fa fa-linkedin",
    },
    {
      name: "Facebook",
      link: "/google",
      icon: "fa fa-facebook icon",
    },
    {
      name: "Instagram",
      link: "/google",
      icon: "fa fa-instagram icon",
    },
  ],
};

export default Constants;
