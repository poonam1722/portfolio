import React from 'react';
import Img from '../img/about-us.png';
import Common from './common';

const About = () => {
  return (
    <>
      <Common
        name="A computer Engineer, a blogger and a Singer "
        lnk="/https://zoxybrew.blogspot.com/"
        imgsrc={Img}
        b="blogger"
        visit="/contact"
        btname="Contact Now"
        here="and is completely passionate about her work."
      />
    </>
  );
};

export default About;
