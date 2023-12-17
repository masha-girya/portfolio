/* eslint-disable max-len */
import {
  TECHNOLOGIES_CONSTANTS as TECHNOLOGIES,
} from './technologies.constants';
import {
  PROJECTS_LINKS_CONSTANTS as PROJECTS_LINKS,
} from './projects-links.constants';
import { IProject } from '../types';
// import IXNOMEWebImg from '../assets/IXNOME-web.png';
import IXNOMEWebImg from '../assets/IXNOME-Web-Mob.png';
import IXNOMELandingImg from '../assets/IXNOME-Landing-Mob.png';
import LonelyRabbit from '../assets/LonelyRabbit.png';
import EvoPlayImg from '../assets/Evo-Play.png';
import EvoPlayMobImg from '../assets/Evo-Play-Mob.png';
import PhonesImg from '../assets/Phones.png';
import PhonesMobImg from '../assets/Phones-Mob.png';
import SpunchImg from '../assets/Spunch.png';
import SpunchMobImg from '../assets/Spunch-Mob.png';
import ChuckNorrisImg from '../assets/ChuckNorris-Mob.png';
import ToDoAppImg from '../assets/ToDoApp.png';
import CafeImg from '../assets/Cafe.png';
import CafeMobImg from '../assets/Cafe-Mob.png';

export const PROJECTS_CONSTANTS: IProject[] = [
  {
    name: 'IXNOME Web Application',
    description: [
      'Web application for AI-supported crypto-trading, enabling users to execute full-cycle trades using AI predictions in the cryptocurrency market.',
      'Features include dashboards with charts and crypto news, an AI Chat, a Trading section powered by AI, a Subscriptions section, and Tutorials.',
    ],
    parts: [
      'Roles: Frontend Developer (SPUNCH agency)',
      'Implemented: AI Chat, tutorial, subscription verification, and layout editing',
    ],
    time: 'Time: 1.5 months',
    linkWeb: PROJECTS_LINKS.IXNOME_APP,
    linkGit: '',
    technologies: TECHNOLOGIES.IXNOME_APP,
    background: IXNOMEWebImg,
    backgroundMob: IXNOMEWebImg,
    slug: 'ixnome-web-app',
  },
  {
    name: 'IXNOME Landing Page',
    description: [
      'A landing page for the IXNOME Web Application, a trading platform powered by AI which you could see above.',
      'Introduces potential users to the platform`s concept, founders, and available features.',
    ],
    parts: [
      'Roles: Frontend Developer (SPUNCH agency)',
      'Implementations: layout edits',
    ],
    time: 'Time: 0.5 months',
    linkWeb: PROJECTS_LINKS.IXNOME_LANDING,
    linkGit: '',
    technologies: TECHNOLOGIES.IXNOME_LANDING,
    background: IXNOMELandingImg,
    backgroundMob: IXNOMELandingImg,
    slug: 'ixnome-landing',
  },
  {
    name: 'Cafe Website',
    description: [
      'Web Application for a food delivery cafe featuring authentication, user and admin modes, crypto payment, and notifications.',
      'Admin capabilities include adding, modifying, and deleting products, combining menus, and managing orders.',
      'Users can order products, create orders, and pay with cryptocurrency.',
      'Non-authorized users can view all products but need to sign up to place orders.',
    ],
    parts: [
      'Roles: Backend and Frontend Development',
      'Implementations: admin mode, user mode, adding, deleting, and editing dishes, combining menus, food ordering, crypto payment, notifications, authorization, editing user`s profile, changing password',
    ],
    time: 'Time: 2 months from scratch',
    linkWeb: PROJECTS_LINKS.CAFE_DEMO,
    linkGit: PROJECTS_LINKS.CAFE_GITHUB,
    technologies: TECHNOLOGIES.CAFE,
    background: CafeImg,
    backgroundMob: CafeMobImg,
    slug: 'codempire-cafe',
  },
  {
    name: 'SPUNCH Agency Website',
    description: [
      'A corporate website showcasing SPUNCH Agency`s expertise in IT consultations, Machine Learning, AI development, and DevOps.',
      'Developed while working at SPUNCH Agency, serving as the primary website for the company.',
      'This website effectively represents the agency, highlighting its services and offerings.',
    ],
    parts: [
      'Roles: Frontend Development (at SPUNCH agency)',
      'Implementations: created layout from scratch with custom animations and transitions, localization functionality, blog page',
    ],
    time: 'Time: 1,5 months',
    linkWeb: PROJECTS_LINKS.SPUNCH_WEB,
    linkGit: '',
    technologies: TECHNOLOGIES.SPUNCH_WEB,
    background: SpunchImg,
    backgroundMob: SpunchMobImg,
    slug: 'spunch',
  },
  {
    name: 'Lonely Rabbit Corporate Website',
    description: [
      'Developed as a corporate website for a game development company, primarily focused on showcasing the company and its horror game "Midnight Strikes".',
      'Enabled users to apply for vacancies or contact the company for inquiries and customer support.',
    ],
    parts: [
      'Roles: Frontend Development (at SPUNCH agency)',
      'Implementations: layout from scratch, incorporating swiper animations for an engaging user experience, form requests for user interaction (unavailable in the demo version)',
    ],
    time: 'Time: 1 month',
    linkWeb: PROJECTS_LINKS.LR_WEB,
    linkGit: '',
    technologies: TECHNOLOGIES.LR_WEB,
    background: LonelyRabbit,
    backgroundMob: LonelyRabbit,
    slug: 'lonely-rabbit',
  },
  {
    name: 'EvoPlay Landing Page',
    description: [
      'Developed a minimalist landing page for EvoPlay, a company offering AI-driven solutions for businesses.',
      'Designed with simplicity and elegance, incorporating subtle scroll-based animations.',
    ],
    parts: [
      'Roles: Frontend Development (at SPUNCH agency)',
      'Implementations: layout from scratch, scroll-based animations, form requests for user interaction (unavailable in the demo version)',
    ],
    time: 'Time: 0.5 months',
    linkWeb: PROJECTS_LINKS.EVO_LANDING,
    linkGit: '',
    technologies: TECHNOLOGIES.EVO_LANDING,
    background: EvoPlayImg,
    backgroundMob: EvoPlayMobImg,
    slug: 'evo-play',
  },
  {
    name: 'Phones Online Store',
    description: [
      'A responsive Single Page Application (SPA) for an online gadgets shop.',
      'A collaborative effort involving a team of 5 members working on both Frontend and Backend.',
      'Focused on simplifying the process for users to select their next smartphone.',
    ],
    parts: [
      'Roles: Frontend Development',
      'Implementations: layout of phones list page, pagination, filtration',
    ],
    time: 'Time: 10 days from scratch',
    linkWeb: PROJECTS_LINKS.PHONE_DEMO,
    linkGit: PROJECTS_LINKS.PHONE_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
    background: PhonesImg,
    backgroundMob: PhonesMobImg,
    slug: 'phones-store',
  },
  {
    name: 'Chuck Norris Jokes App',
    description: [
      'Responsive Application developed as test task.',
      'Experience random Chuck Norris jokes, engaging loaders, and animations.',
      'Designed to add fun and amusement to users` downtime.',
    ],
    parts: [
      'Roles: Frontend Development',
      'Implementations: layout, custom animations, loaders, API requests, jokes filtering',
    ],
    time: 'Time: 1 day from scratch',
    linkWeb: PROJECTS_LINKS.CHUCK_DEMO,
    linkGit: PROJECTS_LINKS.CHUCK_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
    background: ChuckNorrisImg,
    backgroundMob: ChuckNorrisImg,
    slug: 'chuck-norris-jokes',
  },
  {
    name: 'Todo Application',
    description: [
      'A minimalist planner for authorized users to manage tasks efficiently.',
      'Designed for simplicity and functionality, ensuring a bug-free experience.',
      'Used by friends as their go-to tool for organizing daily tasks.',
    ],
    parts: [
      'Roles: Frontend Development',
      'Implementations: APi requests, transitions, form functionality',
    ],
    time: 'Time: 10 days',
    linkWeb: PROJECTS_LINKS.TODO_DEMO,
    linkGit: PROJECTS_LINKS.TODO_GITHUB,
    technologies: TECHNOLOGIES.TODO,
    background: ToDoAppImg,
    backgroundMob: ToDoAppImg,
    slug: 'todo-app',
  },
  // {
  //   name: 'Bike Shop Landing',
  //   description: 'Responsive Landing Page written on HTML/SCSS. Has very user-friendly behavior and stylish appearance',
  //   parts: 'Part: Frontend',
  //   time: 'Time: 10 days',
  //   linkWeb: PROJECTS_LINKS.BIKE_DEMO,
  //   linkGit: PROJECTS_LINKS.BIKE_GITHUB,
  //   technologies: TECHNOLOGIES.BIKE,
  // },
];
