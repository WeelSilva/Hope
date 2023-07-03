// images
import LogoHope from '../src/assets/img/header/hope.png'
import joinImg from '../src/assets/img/join/woman.png'

import Afromix from '../src/assets/img/workouts/afromix.jpeg'
import Funcional from '../src/assets/img/workouts/funcional.jpeg'
import Jump from '../src/assets/img/workouts/jump.jpeg'
import Muaythai from '../src/assets/img/workouts/muaythai.jpeg'
import Musculacao from '../src/assets/img/workouts/musculacao.jpeg'


import je from '../src/assets/img/community/je.jpg';
import erika from '../src/assets/img/community/erika.jpg';
import rico from '../src/assets/img/community/rico.jpg';
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
    'Nossa academia é o lugar perfeito para alcançar seus objetivos de condicionamento físico e saúde. Com equipamentos modernos e uma equipe qualificada, oferecemos treinamento personalizado e uma variedade de aulas de grupo emocionantes, como Jump, Musculação, Afromix, Funcional e Muay Thai  Seja qual for o seu nível de experiência, estamos aqui para ajudá-lo a se superar e se divertir enquanto alcança seus resultados desejados.',
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
    {
      image: Afromix,
      name: 'Afromix',
    },
    {
      image: Jump,
      name: 'Jump',
    },
    {
      image: Muaythai,
      name: 'Muay thai',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Planos e Convênios',
  plans: [
    {
      name: 'A partir de',
      price: '49,99',
      list: [
        { name: 'Taxa de Matrícula' },
        { name: 'App de Treino' },
        { name: 'Avaliação Física' },
      ],
      delay: 600,
    },
    {
      name: 'Convênios',
      price: '',
      list: [
        { name: 'Total Pass' },
        { name: 'Gympass' },
      ],
      delay: 800,
    },
    // {
    //   name: 'Elite',
    //   price: '49',
    //   list: [
    //     { name: 'unlimited gym access' },
    //     { name: 'all training programs' },
    //     { name: 'free fitness consultation' },
    //     { name: 'personal trainer' },
    //     { name: '50% off drinks' },
    //   ],
    //   delay: 1000,
    // },
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
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: erika,
      name: 'Erika - personal trainer.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: rico,
      name: 'Ricardo - personal trainer.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    // {
    //   image: CommunityImg4,
    //   name: 'Anne R.',
    //   message:
    //     '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    // },
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
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Quais são os tipos de planos disponíveis na academia?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Qual é a política de cancelamento de inscrição?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'A academia oferece aulas de grupo?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'á treinadores pessoais disponíveis para ajudar os membros?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'A academia oferece nutricionistas ou programas de dieta?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Qual é a idade mínima para se inscrever na academia?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Como faço para renovar meu plano de inscrição?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Há limites de tempo para usar certos equipamentos na academia?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'A academia oferece Wi-Fi gratuito para os membros?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};





export const footer = {
  logo: LogoHope,
};
