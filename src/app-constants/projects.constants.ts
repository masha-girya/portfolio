/* eslint-disable max-len */
import {
  TECHNOLOGIES_CONSTANTS as TECHNOLOGIES,
} from './technologies.constants';
import {
  PROJECTS_LINKS_CONSTANTS as PROJECTS_LINKS,
} from './projects-links.constants';
import { IProject } from '../types';
import IXNOMEWebImg from '../assets/IXNOME-web.png';
import IXNOMELandingImg from '../assets/IXNOME-Landing.png';
import LonelyRabbit from '../assets/LonelyRabbit.png';
import EvoPlayImg from '../assets/Evo-Play.png';
import PhonesImg from '../assets/Phones.png';
import SpunchImg from '../assets/Spunch2.png';
import ChuckNorrisImg from '../assets/ChuckNorris.png';
import ToDoAppImg from '../assets/ToDoApp.png';
import CafeImg from '../assets/Cafe.png';

export const PROJECTS_CONSTANTS: IProject[] = [
  {
    name: 'IXNOME Web Application',
    description: ['Web application for trading with AI support which allow users to make full-cycle trading using AI predictions for crypto-currency market.', 'It has Dashboards with charts and crypto news, AI Chat, Trading section powered with AI, Subscriptions section, and Tutorial.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: AI chat, tutorial, subscription verification, layout edition.',
    time: 'Time: 1.5 month',
    linkWeb: PROJECTS_LINKS.IXNOME_APP,
    linkGit: '',
    technologies: TECHNOLOGIES.IXNOME_APP,
    background: IXNOMEWebImg,
    slug: 'ixnome-web-app',
  },
  {
    name: 'IXNOME Landing Page',
    description: ['A landing page for IXNOME Web Application (a trading platform powered with AI).', 'This part of IXNOME introduces potential users to IXNOME platform idea, it`s founders and available features.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: layout edition',
    time: 'Time: 0.5 month',
    linkWeb: PROJECTS_LINKS.IXNOME_LANDING,
    linkGit: '',
    technologies: TECHNOLOGIES.IXNOME_LANDING,
    background: IXNOMELandingImg,
    slug: 'ixnome-landing',
  },
  {
    name: 'Cafe Website',
    description: ['Web Application of Food delivery cafe with authentication, user and admin mode, crypto payment, and notifications. As admin you can add, modify, and delete products, combine menus, accept/decline orders.', 'User has ability to order products, to issue an order, and pay for it by crypto.', 'As a non-authorized user you can see all products, but for ordering you should sing up.', 'This web app was written by me from scratch in 2 month.'],
    parts: 'Part: Backend and Frontend',
    time: 'Time: 2 months from scratch',
    linkWeb: PROJECTS_LINKS.CAFE_DEMO,
    linkGit: PROJECTS_LINKS.CAFE_GITHUB,
    technologies: TECHNOLOGIES.CAFE,
    background: CafeImg,
    slug: 'codempire-cafe',
  },
  {
    name: 'SPUNCH Agency Website',
    description: ['A corporate website for SPUNCH Agency that deals with IT consultations, Machine Learning, AI development, and DevOps.', 'The website for a company that I was working in.', 'This website presents the agency.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: layout from scratch, animations and transitions, localization, blog, and form requests',
    time: 'Time: 1,5 months',
    linkWeb: PROJECTS_LINKS.SPUNCH_WEB,
    linkGit: '',
    technologies: TECHNOLOGIES.SPUNCH_WEB,
    background: SpunchImg,
    slug: 'spunch',
  },
  {
    name: 'Lonely Rabbit',
    description: ['A corporate website for game-dev company. Main idea was to present company within their horror game "Midnight Strikes". Via this website user can also apply to vacancy or contact company as a customer.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: layout from scratch, swiper animations, form requests (unable on Demo)',
    time: 'Time: 1 month',
    linkWeb: PROJECTS_LINKS.LR_WEB,
    linkGit: '',
    technologies: TECHNOLOGIES.LR_WEB,
    background: LonelyRabbit,
    slug: 'lonely-rabbit',
  },
  {
    name: 'EvoPlay Landing',
    description: ['A landing page for a company that provides AI-driven solutions for businesses. Simple, elegant, with a few animations based on scroll.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: layout from scratch, animations, form requests (unable on Demo)',
    time: 'Time: 0.5 month',
    linkWeb: PROJECTS_LINKS.EVO_LANDING,
    linkGit: '',
    technologies: TECHNOLOGIES.EVO_LANDING,
    background: EvoPlayImg,
    slug: 'evo-play',
  },
  {
    name: 'Phones Online Store',
    description: ['Responsive SPA of online gadgets shop.This App was created by team of 5 members from scratch both Frontend and Backend.', 'Project is about to make it easy for user to choose his nest smartphone.'],
    parts: 'Part: Frontend',
    time: 'Time: 10 days from scratch',
    linkWeb: PROJECTS_LINKS.PHONE_DEMO,
    linkGit: PROJECTS_LINKS.PHONE_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
    background: PhonesImg,
    slug: 'phones-store',
  },
  {
    name: 'Chuck Norris Jokes App',
    description: ['Responsive Application made for fun.', 'If you are boring just visit this one and get random Chuck Norris`s joke, see nice loaders and some animations.', 'Have fun!'],
    parts: 'Part: Frontend',
    time: 'Time: 1 day from scratch',
    linkWeb: PROJECTS_LINKS.CHUCK_DEMO,
    linkGit: PROJECTS_LINKS.CHUCK_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
    background: ChuckNorrisImg,
    slug: 'chuck-norris-jokes',
  },
  {
    name: 'Todo Application',
    description: ['Minimalistic planner where authorized user can manage one`s tasks.', 'It is simple and works with no bugs.', 'My friends use this app for managing their days.'],
    parts: 'Part: Frontend',
    time: 'Time: 10 days',
    linkWeb: PROJECTS_LINKS.TODO_DEMO,
    linkGit: PROJECTS_LINKS.TODO_GITHUB,
    technologies: TECHNOLOGIES.TODO,
    background: ToDoAppImg,
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
