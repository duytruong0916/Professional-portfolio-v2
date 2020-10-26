import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
export default React.forwardRef((props, ref) => (
    <div className="banner" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <div>
            <div className="highlight-text special">
                Hi, my name is
             </div>
            <div className="title">Duy Truong</div>
            <div className="light-title">I build things for the web</div>
            <div className="text-wrapper">
                I'm a software engineer based in Dallas,
                TX specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
            </div>
            <div className="mt-5">
                <button className="button-link mt-4">
                    <Link to="Works" spy={true} smooth={true} offset={-70} duration={1200}>
                        <span>View My Work</span>
                        <span className="ml-3"><i class="fa fa-long-arrow-right rotate-arrow" aria-hidden="true"></i></span>
                    </Link>
                </button>
            </div>
        </div>
    </div>
));

