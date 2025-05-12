import React from 'react';

// import data
import { nav } from '../data';

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className='w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8' onClick={() => setNavMobile(!navMobile)}>
        {nav.map((item, idx) => {
          return (
            <li key={idx} >
              <a className='text-white text-body-md' href={item.href} >
                {item.name}
              </a>
            </li>
          );
        })}
          <div className='flex gap-2'>
            <a href='https://www.instagram.com/hopefitness_academia/' target='blank'>
             <ion-icon name="logo-instagram" ></ion-icon>
            </a>
            <a  href='https://www.facebook.com/hope.fitnes.9' target='blank'>
              <ion-icon name="logo-facebook" ></ion-icon>
            </a>
            <a  href='https://api.whatsapp.com/send?phone=5511930480185&text=Olá,%20tudo%20bem?%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações' target='blank'>
              <ion-icon name="logo-whatsapp" ></ion-icon>
            </a>
          </div>
      </ul>

      
    </nav>
  );
};
 
export default NavMobile;
