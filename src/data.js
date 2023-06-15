// images
import LogoHope from '../src/assets/img/header/hope.png'
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import joinImg from '../src/assets/img/join/woman.png'


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
  titlePart1: 'Obtenha a melhor parte do seu dia',
  titlePart2: '- você se encaixa aqui.',
  subtitle:
    'Oferecemos um treino sério, mas dentro de um espaço divertido, amigável e seguro.',
  textBtn: 'Join Now',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Sobre',
  subtitle1:
    'Exercemos um trabalho com transparência, honestidade e coerência, respeitando as diferenças a dignidade de nossos alunos. Ter comprometimento e dá suporte necessário a todos.',
  subtitle2:
    'Proporcionar um espaço e atendimento de ótima qualidade, oferecendo saúde, bem-estar e motivação em um ambiente agradável e alegre, que alunos se sinta em casa.',
  link: 'Join Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Programas de treinamento',
  programs: [
    {
      image: ResistanceImg,
      name: 'Musculação',
    },
    {
      image: BoxingImg,
      name: 'Treinamento Funcional',
    },
    {
      image: BodyPumpImg,
      name: 'Afromix',
    },
    {
      image: YogaImg,
      name: 'Jump',
    },
    {
      image: FullBodyImg,
      name: 'Muay thai',
    },
    // {
    //   image: FitnessImg,
    //   name: 'Fitness',
    // },
    // {
    //   image: BattleRopeImg,
    //   name: 'Battle Rope',
    // },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Planos',
  plans: [
    {
      name: 'Básico',
      price: '20',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
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
