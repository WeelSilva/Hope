import React from 'react';

// import footer data
import { footer } from '../data';

const Footer = () => {
  // destructure footer data
  const { logo } = footer;
  return (
    <footer className='bg-neutral-500 h-[260px] sm:h-[195px] px-[20px] py-[10px] '>
      <div
        className='container mb-4 mx-auto h-full flex flex-col sm:flex-row justify-between gap-1 items-center md:items-end md:pb-[50px] sm:items-center'
        // data-aos='fade-up'
        // data-aos-delay='100'
      >
        {/* logo */}

          <a href='/#'>
            <img className='w-[100px] h-[65px]' src={logo} alt='' />
          </a>

        <div className='flex flex-row  items-center justify-center sm:flex-row space-x-4 '>
          
          <a href='https://www.instagram.com/hopefitness_academia/' target='blank'>
            <ion-icon name="logo-instagram" ></ion-icon>
          </a>
          <a  href='https://www.facebook.com/hope.fitnes.9' target='blank'>
            <ion-icon name="logo-facebook" ></ion-icon>
          </a>
          <a  href='https://api.whatsapp.com/send?phone=5511912602588' target='blank'>
            <ion-icon name="logo-whatsapp" ></ion-icon>
          </a>
        </div>

        {/* copyright text */}
        <div className='text-sm sm:text-base flex flex-col content-between '>
            <strong className='font-bold text-zinc-100 text-base'>Academia Hope Fitness</strong>
            <p className='mb-4'>Rua: Beija flor, 58 - Vargem Grande - São Paulo - SP  </p>
            
            <span className='text-neutral-300 text-sm'>{new Date().getFullYear()} &copy;Elielson. All Rights Reserved.</span>
          
         
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
