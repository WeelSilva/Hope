import whastLogo from '../assets/whatsap.png'


const WhatsButtom = () => {
    return (
        <div className="fixed bottom-12 right-12 z-50 ">
          <a href="https://api.whatsapp.com/send?phone=5511912602588&text=Olá,%20tudo%20bem?%20você%20está%20pronto%20para%20começar%20sua%20jornada%20fitness?%20vamos%20lá!" target="_blank" rel="noreferrer">    
              <img className='animate-bounce' src={whastLogo} alt="Fala conosco pelo whatsapp e faça a sua incrição" width="60" />
          </a>
        </div>
    );
}

export default WhatsButtom  