import React from "react";
import Constants from '../Constant';

import ContactForm from '../untils/ContactForm';

function Contact() {
    const media = Constants.media;

    const renderMedia = () => (
        <div className="footer-media-wrapper" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
            {media && media.map((item, i) => <div className="media-icon" key={i}>
                <span>
                    <a href={item.link} target="_blank"><i className={item.icon}></i></a>
                </span>
            </div>)}
        </div>
    );
    
    return (
        <div className="contact-wrapper">
            <div className="phone">Phone: 214-235-5014</div>
            <div className="email">Email: duytruong169@gmail.com</div>
            <div className="quote">
                I am available for hire and open to any ideas of cooperation.
                </div>
            <div className="overflow-hidden px-lg-4">
                <ContactForm />
            </div>
            <div className="footer-media">
                {renderMedia()}
            </div>
        </div>
    );
}

export default Contact;
