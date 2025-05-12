import whastLogo from '../assets/whatsap.png'


const WhatsButtom = () => {
    return (
        <div className="fixed bottom-12 right-12 z-50 ">
          <a href="https://api.whatsapp.com/send?phone=5511930480185&text=Olá,%20tudo%20bem?%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações" target="_blank" rel="noreferrer">    
              <img className='animate-bounce' src={whastLogo} alt="Fala conosco pelo whatsapp e faça a sua incrição" width="60" />
          </a>
        </div>
    );
}

export default WhatsButtom