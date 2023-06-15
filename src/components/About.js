import React from 'react';

// import data
import { about } from '../data';

// import icons

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon } = about;
  return (
    <section id="sobre" className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* section title */}
        <div
          className='section-title-group justify-start'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <img src={icon} alt='' />
          <h2 className='h2 section-title'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>
        <p
          className='md:text-body-md mb-12 text-justify'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {subtitle1}
        </p>
        <p
          className='md:text-body-md mb-8 text-justify'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {subtitle2}
        </p>
      </div>
    </section>
  );
};

export default About;
