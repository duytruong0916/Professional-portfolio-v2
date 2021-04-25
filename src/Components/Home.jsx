import React from 'react';
import Hero from './heroes/version-2';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';
import Constants from '../Constant';

function Home() {
  const media = Constants.media;

  const renderMedia = () => (
    <div
      className='media-wrapper'
      data-aos='fade-up'
      data-aos-delay='2500'
      data-aos-once='true'>
      {media &&
        media.map((item, i) => (
          <div className='ml-md-5' key={i}>
            <span>
              <a href={item.link} target='_blank'>
                <i className={item.icon}></i>
              </a>
            </span>
          </div>
        ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className='main-wrapper overflow-hidden'>
        <div className='home-wrapper' id='Home'>
          <Hero />
          {renderMedia()}
        </div>
        <div id='About'>
          <div
            className='section-title mb-4'
            data-aos='fade-up'
            data-aos-delay='150'
            data-aos-once='true'
            data-aos-duration='500'>
            <div className='wrapper mb-5 mb-lg-0'>
              <span className='highlight-text'>01.</span>About Me
            </div>
          </div>
          <About />
        </div>
        <div id='Experience'>
          <div
            className='section-title mb-4'
            data-aos='fade-up'
            data-aos-delay='150'
            data-aos-once='true'
            data-aos-duration='500'>
            <div className='wrapper mb-5 mb-lg-0'>
              <span className='highlight-text'>02.</span>Where I've Worked
            </div>
          </div>
          <Experience />
        </div>
        <div id='Works'>
          <div
            className='section-title mb-4'
            data-aos='fade-up'
            data-aos-delay='150'
            data-aos-once='true'
            data-aos-duration='500'>
            <div className='wrapper mb-5 mb-lg-0'>
              <span className='highlight-text'>03.</span>What I’ve Built
            </div>
          </div>
          <Projects />
        </div>
        <div id='Contact'>
          <div
            className='section-title mb-4'
            data-aos='fade-up'
            data-aos-delay='150'
            data-aos-once='true'
            data-aos-duration='500'>
            <div className='wrapper mb-5 mb-lg-0'>
              <span className='highlight-text'>04.</span>Get In Touch
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
