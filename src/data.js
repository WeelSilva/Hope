// images
import LogoHope from '../src/assets/img/header/hope.png'
import joinImg from '../src/assets/img/join/woman.png'

// treinos
import Funcional from '../src/assets/img/workouts/funcional.jpeg'
import Musculacao from '../src/assets/img/workouts/musculacao.jpeg'

// Modalidades removidas (podem ser adicionadas novamente no futuro):
// import Afromix from '../src/assets/img/workouts/afromix.jpeg'
// import Jump from '../src/assets/img/workouts/jump.jpeg'
// import Muaythai from '../src/assets/img/workouts/muaythai.jpeg'

// Para adicionar novas modalidades:
// 1. Adicione a importação da imagem aqui
// 2. Adicione o objeto no array 'programs' abaixo

// equipe
import je from '../src/assets/img/community/je.jpeg';
import rico from '../src/assets/img/community/rico.jpeg';
import diogo from '../src/assets/img/community/diogoo.jpeg';
import diego from '../src/assets/img/community/diego.jpeg';

// Personal removida:
// import erika from '../src/assets/img/community/erika.jpeg';

// Para adicionar novos funcionários:
// 1. Adicione a foto na pasta src/assets/img/community/
// 2. Importe a imagem aqui: import novoFuncionario from '../src/assets/img/community/novo-funcionario.jpeg';
// 3. Adicione o objeto no array 'testimonials' da seção 'community' abaixo

// ambiente
import img1 from '../src/assets/img/environment/1.jpeg'
import img2 from '../src/assets/img/environment/2.jpeg'
// import img4 from '../src/assets/img/environment/4.jpeg' // Removido - foto 4
import img6 from '../src/assets/img/environment/6.jpeg'
import img7 from '../src/assets/img/environment/7.jpeg'
import img8 from '../src/assets/img/environment/8.jpeg'
import img9 from '../src/assets/img/environment/9.jpeg'
import img10 from '../src/assets/img/environment/10.jpeg'
import img11 from '../src/assets/img/environment/11.jpeg'


// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: LogoHope,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Treinos', href: '#treino'},
  { name: 'Planos', href: '#planos' },
  { name: 'Equipe', href: '#profissionais' },
  { name: 'Perguntas', href: '#faq' },
];

export const banner = {
  titlePart1: 'Desafie seus limites na Academia Hope',
  titlePart2: ' Onde a superação e a transformação se encontram para criar a melhor versão de você.',
  subtitle:
    'Oferecemos um treino sério, mas dentro de um espaço divertido, amigável e seguro.',
  textBtn: 'Join Now',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Bem-vindo à Academia Hope!',
  subtitle1:
    'Nossa academia é o lugar perfeito para alcançar seus objetivos de condicionamento físico e saúde. Com equipamentos modernos e uma equipe qualificada, oferecemos treinamento personalizado e uma variedade de aulas de grupo emocionantes, como Musculação e Funcional. Seja qual for o seu nível de experiência, estamos aqui para ajudá-lo a se superar e se divertir enquanto alcança seus resultados desejados.',
    // Texto original mencionava: Jump, Musculação, Afromix, Funcional e Muay Thai
    // Atualizado para mostrar apenas as modalidades ativas
  subtitle2:
    'Visite-nos hoje mesmo e faça parte da comunidade Hope. Transforme seus objetivos em realidade e descubra uma nova versão de si mesmo!',
  subtitle3: 
  "Entre em contato para mais informações ou para agendar uma visita. Estamos prontos para ajudar você a começar sua jornada rumo a uma vida mais saudável e em forma.",  
  link: 'Join Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Programas de Treinamento',
  programs: [
    {
      image: Musculacao,
      name: 'Musculação',
    },
    {
      image: Funcional,
      name: 'Funcional',
    },
    // Modalidades removidas temporariamente:
    // {
    //   image: Afromix,
    //   name: 'Afromix',
    // },
    // {
    //   image: Jump,
    //   name: 'Jump',
    // },
    // {
    //   image: Muaythai,
    //   name: 'Muay thai',
    // },
    
    // Para adicionar nova modalidade, descomente e edite:
    // {
    //   image: NovaModalidadeImg, // Importe a imagem no topo do arquivo
    //   name: 'Nome da Nova Modalidade',
    // },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Planos e Convênios',
  plans: [
    {
      name: 'Recorrente',
      price: '74,99',
      list: [
        { name: 'Pagamento automatico todos os meses' },
        { name: 'Sem necessidade de renovação manual' },
        { name: 'App de Treino' },
        { name: 'Avaliação Física' },
      ],
      delay: 600, // Mantém como o primeiro a animar ou ajusta se necessário
    },
    {
      name: 'Mensal',
      price: '79,99',
      list: [
        { name: 'Taxa de Matrícula' },
        { name: 'App de Treino' },
        { name: 'Avaliação Física' },
      ],
      delay: 800, // Ajustado
    },
    {
      name: 'Trimestral',
      price: '209,99',
      list: [
        { name: 'Taxa de Matrícula' },
        { name: 'App de Treino' },
        { name: 'Avaliação Física' },
      ],
      delay: 1000, // Ajustado
    },
    {
      name: 'Semestral',
      price: '399,99',
      list: [
        { name: 'Taxa de Matrícula' },
        { name: 'App de Treino' },
        { name: 'Avaliação Física' },
      ],
      delay: 1200, // Ajustado
    },
    {
      name: 'Anual',
      price: '749,99',
      list: [
        { name: 'Taxa de Matrícula' },
        { name: 'App de Treino' },
        { name: 'Avaliação Física' },
      ],
      delay: 1400, // Ajustado
    },
    {
      name: 'Convênios', // Movido para o final
      price: '',
      list: [
        { name: 'Total Pass' },
        { name: 'Gympass' },
      ],
      delay: 1600, // Ajustado para ser o último
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Equipe Hope',
  testimonials: [
    {
      image: je,
      name: 'Jefferson - personal trainer.',
      message:
        '',
    },
    {
      image: rico,
      name: 'Ricardo - personal trainer.',
      message:
        '',
    },
    {
      image: diogo,
      name: 'Diogo - personal trainer.',
      message:
        '',
    },
    {
      image: diego,
      name: 'Diego - personal trainer.',
      message:
        '',
    },
    
    // Personal removida da equipe:
    // {
    //   image: erika,
    //   name: 'Erika - personal trainer.',
    //   message:
    //     '."',
    // },
    
    // Para adicionar novo funcionário, descomente e edite:
    // {
    //   image: novoFuncionarioImg, // Importe a imagem no topo do arquivo
    //   name: 'Nome do Funcionário - cargo.',
    //   message: '', // Pode adicionar uma mensagem se desejar
    // },
    
    // ...existing code...
  ],
};

export const environment = {
  icon: CommunityIcn,
  title: 'Ambiente Hope',
  testimonials: [
    {
      image: img1,
      name: '',
      message:
        '',
    },
    {
      image: img2,
      name: '',
      message:
        '',
    },
    // Foto 4 removida
    {
      image: img6,
      name: ' ',
      message:
        '',
    },
    {
      image: img7,
      name: '',
      message:
        '',
    },
    {
      image: img8,
      name: '',
      message:
        '',
    },
    {
      image: img9,
      name: '',
      message:
        '',
    },
    {
      image: img10,
      name: '',
      message:
        '',
    },
    {
      image: img11,
      name: '',
      message:
        '',
    },
    
  ],
};

export const join = {
  image: joinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'Well keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
  btnText: 'Join now',
};


export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'Quais são os horários de funcionamento da academia?',
      answer:
        'Segunda a Sexta das 06:00 ás 23:00 e Sábados e Feriados das 08hrs ás 13hrs',
    },
    {
      question: 'Quais são os tipos de planos disponíveis na academia?',
      answer:
        'Bimestral 120,00 - Trimestral 175,00 - Mensal 66,00 -  Semestral 300,00 - Anual 600,00 e Três vezes na semana 45,00.',
    },
    {
      question: 'Qual é a política de cancelamento de inscrição?',
      answer:
        'Sem taxa ou multa, o aluno pode cancelar quando quiser.',
    },
    {
      question: 'A academia oferece aulas de grupo?',
      answer:
        'Jump, Funcional e Muay Thai.',
    },
    {
      question: 'á treinadores pessoais disponíveis para ajudar os membros?',
      answer:
        'Sim! contamos com uma equipe totalmente qualificada.',
    },
    {
      question: 'A academia oferece nutricionistas ou programas de dieta?',
      answer:
        'Apenas parceria, não temos profissionais no quadro.',
    },
    {
      question: 'Qual é a idade mínima para se inscrever na academia?',
      answer:
        '12 anos.',
    },
    {
      question: 'Como faço para renovar meu plano de inscrição?',
      answer:
        'Realizando o pagamento na recepção .',
    },
    {
      question: 'Há limites de tempo para usar certos equipamentos na academia?',
      answer:
        'Não.',
    },
    {
      question: 'A academia oferece Wi-Fi gratuito para os membros?',
      answer:
        'Sim.',
    },
  ],
};


export const footer = {
  logo: LogoHope,
};
