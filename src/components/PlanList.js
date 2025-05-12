import React, { useState } from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper'; // Alterado de 'swiper/modules' para 'swiper'

const PlanList = ({ plans }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Para controlar o slide ativo, se necessário

  return (
    <div id="planos" className='max-w-[1280px] mx-auto py-8 px-4'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Atualiza o índice ativo
      >
        {plans.map((plan, currentIndex) => {
          const { name, price, list, delay } = plan; 
          
          let cardClassName = 'bg-black text-white'; // Estilo padrão para planos comuns não ativos
          let nameBadgeClassName = 'bg-white text-black'; // Badge padrão para planos comuns não ativos

          if (plan.name === 'Recorrente') {
            cardClassName = 'bg-black text-white scale-105 z-10'; // Fundo preto
            nameBadgeClassName = 'bg-primary-200 text-black'; // Badge com cor primária para Recorrente
          } else if (plan.name === 'Convênios') {
            cardClassName = 'bg-gray-200 text-black'; // Estilo para "Convênios"
            nameBadgeClassName = 'bg-white text-neutral-500'; // Badge para "Convênios"
          } else if (currentIndex === activeIndex) {
            // cardClassName = 'bg-neutral-600 text-white'; // Estilo opcional para outros planos ativos
            // nameBadgeClassName = 'bg-gray-300 text-black'; // Badge opcional para outros planos ativos
            // Por enquanto, planos ativos (não Recorrente/Convênios) usam o padrão escuro.
          }

          return (
            <SwiperSlide key={currentIndex}> 
              <div className='w-full rounded-sm lg:min-h-[550px] flex flex-col h-full'>
                <div
                  data-aos='fade-up'
                  data-aos-delay={delay || '0'}
                  className={`${cardClassName} flex flex-col justify-between items-center py-[40px] px-[30px] h-full rounded-sm`} // Removido transition duration-100
                >
                  <div className='text-center'>
                    <div
                      className={`${nameBadgeClassName} h-[26px] font-primary text-sm font-semibold mx-auto px-[14px] flex items-center justify-center mb-8`}
                    >
                      {name}
                    </div>
                    <div className='text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center'>
                      <div className='leading-none'>
                        <span className='tracking-[0.1px]'>{price}</span>
                      </div>
                      {price && (
                        <span className='text-sm font-medium'>
                          {plan.name === 'Trimestral' ? '/trimestre' :
                           plan.name === 'Semestral' ? '/semestre' :
                           plan.name === 'Anual' ? '/ano' : '/mês'}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className='flex flex-col gap-y-4 mb-8 mt-4 text-center lg:text-left'>
                    {list.map((item, idx) => (
                      <li
                        className='flex items-center gap-x-[10px]'
                        key={idx}
                      >
                        <div>
                          <BsCheckCircleFill className='text-lg' />
                        </div>
                        <div>{item.name}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PlanList;
