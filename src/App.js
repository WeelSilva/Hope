import React, { useEffect } from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Environment from './components/Environment';

import Footer from './components/Footer';
import WhatsButton from './components/WhatsButton';

const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []); // Adicionado array de dependências vazio

  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative '>
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Environment />
      <Faq />
      <Footer />
      <WhatsButton />
    </div>
  );
};

export default App;
