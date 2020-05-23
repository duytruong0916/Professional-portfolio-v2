import React from "react";

function Navbar() {
    const [toggle, setToggle] = React.useState(false);
    const ontoggleHanle =()=> setToggle(!toggle);

  return (
    <div className="navbar-wrapper">
      <div className="hamburger" onClick={ontoggleHanle}>
        <div className={`line ${toggle ? 'bg-danger': ''}`}></div>
        <div className={`line ${toggle ? 'bg-danger': ''}`}></div>
        <div className={`line ${toggle ? 'bg-danger': ''}`}></div>
      </div>
      <div className="portfolio-title px-md-5 p-4">Portfolio</div>
      <ul className={`nav-links ${toggle? 'open': ''}`}>
        <li className={`${toggle ? 'fade': ''}`}>HOME</li>
        <li className={`${toggle ? 'fade': ''}`}>ABOUT</li>
        <li className={`${toggle ? 'fade': ''}`}>PROECTS</li>
        <li className={`${toggle ? 'fade': ''}`}>CONTACT</li>
        <li className={`${toggle ? 'fade': ''}`}>RESUME</li>
      </ul>
    </div>
  );
}

export default Navbar;
