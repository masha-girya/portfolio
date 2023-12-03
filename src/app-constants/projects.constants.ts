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
import IxnomeGif1 from '../assets/ixnome-web/subscriptions.gif';
import IxnomeGif3 from '../assets/ixnome-web/trading-inner.gif';
import IxnomeGif2 from '../assets/ixnome-web/slider.gif';
import IxnomeGif4 from '../assets/ixnome-web/tutorial.gif';

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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
  },
  // {
  //   name: 'Cafe Website',
  //   description: ['Web Application with authentication, admin mode, ability to order products, and pay for order by crypto.', 'You can see how as non-authorized user all products, but for ordering you should sing up.', 'Now it is only available to run locally because I am working on a deploy, thank you for understanding :)'],
  //   parts: 'Part: Backend and Frontend',
  //   time: 'Time: 2 months from scratch',
  //   linkWeb: '',
  //   linkGit: PROJECTS_LINKS.CAFE_GITHUB,
  //   technologies: TECHNOLOGIES.CAFE,
  // },
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
    gif: [
      {
        gif: IxnomeGif1,
        title: 'Subscriptions',
      },
      {
        gif: IxnomeGif2,
        title: 'Trading Currency',
      },
      {
        gif: IxnomeGif3,
        title: 'Slider',
      },
      {
        gif: IxnomeGif4,
        title: 'Tutorial',
      },
    ],
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
