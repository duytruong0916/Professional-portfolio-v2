import Angubetta_image from './assets/angubetta/profile.jpg';
import Scrumstubs_iamge from './assets/scrumstub/pic1.png'
import Aleph_image from './assets/aleph/pic1.png'
import epic_image from './assets/epicsteambuilder/pic1.png'
import Ulti_image from './assets/authenticate/img2.png'
import Ex_image from './assets/budget-app/two.png'
import portfolio_image from './assets/portfolio/po1.png'
import secret_image from './assets/images/pic4.png'
import timefox_image from './assets/timefoxwatch/im1.png'

const Constants = {
    works: {
        company: ['Encore Multimedia', 'Aleph Technologies', 'FUJINET SYSTEMS JSC'],
        data: [
            {
                company: 'Encore Multimedia',
                information: {
                    title: 'Web Developer',
                    location: 'Longview, TX.',
                    time: '7/2020 - present',
                    description: [
                        'Translated design teams UX wireframes and mockups into responsive and interactive features.',
                        'Assisted with Drupal custom module and theme development to meet the client needs',
                        'Developed a property search application in VueJs',
                        'Identified areas for improvement in the front-end stack and provided solutions.'
                    ]
                }
            },
            {
                company: 'Aleph Technologies',
                information: {
                    title: 'Front End Developer',
                    location: 'Dallas, TX.',
                    time: '1/2020 – 7/2020',
                    description: [
                        'Built React/Redux frontend for an event management solution.',
                        'Fixed bugs from existing codebases.',
                        'Implemented enhancements to improve the site functionality and performance.',
                        'Supported Agile team culture and CI/CO.'
                    ]
                }
            },
            {
                company: 'FUJINET SYSTEMS JSC',
                information: {
                    title: 'Web Developer',
                    location: 'HCM, Vietnam',
                    time: '1/2014 – 2/2015',
                    description: [
                        'Responsible for UI/UX development of multiple components in React.js.',
                        'Prepared the Front-End of the project by using JavaScript, HTML, and CSS.',
                        'Updated and maintained documentation for team processes, best practices and software runbooks.',
                        'Analyzed existing websites to identify areas of improvement and provide estimates for implementing new features'
                    ]
                }
            }
        ]
    },
    skills: [
        {
            name: 'JavaScript (ES6+)',
            rate: '90'
        },
        {
            name: 'HTML & (S)CSS',
            rate: '90'
        },
        {
            name: 'Drupal (7+)',
            rate: '70'
        },
        {
            name: 'React',
            rate: '80'
        },
        {
            name: 'Node.js',
            rate: '60'
        },
        {
            name: 'Vue',
            rate: '50'
        }],

    projects: [
        {
            name: 'Brazoria County Website',
            type: 'ReactJS',
            tech: 'Statamic 3 / Vue / HTML & CSS',
            photo: `${timefox_image}`, link: '/projects/timefoxwatch',
            summary: 'An online watch store with advanced features of a real-life eCommerce web application.'
        },
        {
            name: 'Hayter Engineering Site',
            type: 'ReactJS',
            tech: 'Drupal / PHP / HTML & (s)CSS',
            photo: `${timefox_image}`, link: '/projects/timefoxwatch',
            summary: 'An online watch store with advanced features of a real-life eCommerce web application.'
        },
        {
            name: 'Gold Eye Clinic Website',
            type: 'ReactJS',
            tech: 'Drupal / PHP / HTML & (s)CSS',
            photo: `${timefox_image}`, link: '/projects/timefoxwatch',
            summary: 'An online watch store with advanced features of a real-life eCommerce web application.'
        },
        {
            name: 'AnguBetta store',
            type: 'Angular',
            git: 'https://github.com/duytruong0916/bettafishshop-ecommerce-webapp',
            tech: 'Angular / Node.js / MongoDB', photo: `${Angubetta_image}`, link: '/projects/angubetta',
            summary: 'An online Betta fish store in which users can explore an amazing world of Betta fish and pick their favorite one for a reasonable price.'
        },
        {
            name: 'ScrumStubs.com',
            type: 'ReactJS',
            tech: 'React / Python (Django) / Bootstrap',
            photo: Scrumstubs_iamge, link: '/projects/scrumstub',
            summary: 'An Event Management Solution from Aleph Technologies LLC that allows to register for workshops, meeting and coaching courses.'
        },
        {
            name: 'Ultimate Authentication',
            type: 'ReactJS',
            tech: 'React/ Node + Express.js / MongoDB',
            photo: `${Ulti_image}`,
            git: 'https://github.com/duytruong0916/Ultimate-Authentication',
            link: '/projects/ultimate',
            summary: 'An ultimate authentication system for web apps with features like account activation, forgot password, reset password, login with Facebook as well as Google'
        },
        {
            name: 'Expensify App',
            type: 'ReactJS',
            git: 'https://github.com/duytruong0916/Budget-app',
            tech: 'React / Firebase / Bootstrap',
            photo: `${Ex_image}`, link: '/projects/banking',
            summary: 'An online expense tracking application'
        },
        {
            name: 'Personal Website V-2',
            type: 'ReactJS',
            tech: 'React / Redux / Node.js',
            photo: `${timefox_image}`, link: '/projects/timefoxwatch',
            summary: 'An online watch store with advanced features of a real-life eCommerce web application.'
        },
        {
            name: 'Personal Website V-1',
            type: 'Angular', tech: 'Angular ( Material ) / HTML & CSS',
            photo: `${portfolio_image}`, link: '/projects/portfolio',
            git: 'https://github.com/duytruong0916/professional-portfolio',
            summary: 'My first personal website to showcase the projects I have done since I started learning about web development. I designed and implemented this site in summer 2019.'
        },
        {
            name: 'Secret Storage',
            type: 'Angular',
            git: 'https://github.com/duytruong0916/Secret-storage-app',
            tech: 'Angular / Node.js / ExpressJS',
            photo: `${secret_image}`, link: '/projects/secret',
            summary: 'An online secret place to keep your memories.'
        },

    ],

    features: [
        {
            name: 'Aleph-techonologies.com',
            type: 'ReactJS', tech: 'React / ES6 / Django',
            photo: `${Aleph_image}`,
            link: '/projects/aleph',
            summary: 'A platform created in order to facilitate workshops, meet ups, conferences, and coaching in the world of the agile frameworks. The platform aims to provide a workflow driven solution which serves to expedite the process of managing and creating a large number of events.'
        },
        {
            name: 'Epics Team Builder',
            type: 'ReactJS',
            tech: 'React / Redux / Bootstrap',
            photo: `${epic_image}`,
            link: '/projects/epics',
            git: 'https://github.com/duytruong0916/epics-team-builder',
            summary: 'A user-friendly, platform agnostic, standalone application that was used as program automating the process of building teams and allowing users to select team formations based on a variety of desired factorsteams for the UTDesign EPICS program.'
        },
        {
            name: 'Timefoxwatch.com',
            type: 'ReactJS',
            tech: 'React / Redux / Node.js',
            git: 'https://github.com/duytruong0916/ecommerce-frontend',
            photo: `${timefox_image}`,
            link: '/projects/timefoxwatch',
            summary: 'Timefoxwatch.com is an online watch store that was developed in React-Redux environment with advanced features of a real-life eCommerce web application.'
        },
    ],

    media: [
        {
            name: 'Github',
            link: 'https://github.com/duytruong0916',
            icon: 'fa fa-github icon'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/duytruongfdp/',
            icon: 'fa fa-linkedin'
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/nhatduy.truong.90',
            icon: 'fa fa-facebook icon'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/nhatduy.truong.90/',
            icon: 'fa fa-instagram icon'
        },
    ]
}

export default Constants;