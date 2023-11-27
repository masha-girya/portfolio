/* eslint-disable max-len */
import {
  TECHNOLOGIES_CONSTANTS as TECHNOLOGIES,
} from './technologies.constants';
import {
  PROJECTS_LINKS_CONSTANTS as PROJECTS_LINKS,
} from './projects-links.constants';
import { IProject } from '../types';

export const PROJECTS_CONSTANTS: IProject[] = [
  {
    name: 'IXNOME Web Application',
    description: ['Web application for trading with AI support which allow users to make full-cycle trading using AI predictions for crypto-currency market.', 'It has Dashboards with charts and crypto news, AI Chat, Trading section powered with AI, Subscriptions section, and Tutorial.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: AI chat, tutorial, subscription verification, layout edition.',
    time: 'Time: 1.5 month',
    linkWeb: PROJECTS_LINKS.IXNOME_APP,
    linkGit: '',
    technologies: TECHNOLOGIES.IXNOME_APP,
  },
  {
    name: 'IXNOME Landing Page',
    description: ['A landing page for IXNOME Web Application (a trading platform powered with AI).', 'This part of IXNOME introduces potential users to IXNOME platform idea, it`s founders and available features.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: layout edition',
    time: 'Time: 0.5 month',
    linkWeb: PROJECTS_LINKS.IXNOME_LANDING,
    linkGit: '',
    technologies: TECHNOLOGIES.IXNOME_LANDING,
  },
  {
    name: 'SPUNCH Agency Website',
    description: ['A corporate website for SPUNCH Agency that deals with IT consultations, Machine Learning, AI development, and DevOps.', 'The website for a company that I was working in.', 'This website presents the agency.'],
    parts: 'Part: Frontend (as a frontend developer in SPUNCH agency). Implementations: layout from scratch, animations and transitions, localization, blog, and form requests',
    time: 'Time: 1,5 months',
    linkWeb: PROJECTS_LINKS.SPUNCH_WEB,
    linkGit: '',
    technologies: TECHNOLOGIES.SPUNCH_WEB,
  },
  {
    name: 'Cafe Website',
    description: ['Web Application with authentication, admin mode, ability to order products, and pay for order by crypto.', 'You can see how as non-authorized user all products, but for ordering you should sing up.', 'Now it is only available to run locally because I am working on a deploy, thank you for understanding :)'],
    parts: 'Part: Backend and Frontend',
    time: 'Time: 2 months from scratch',
    linkWeb: '',
    linkGit: PROJECTS_LINKS.CAFE_GITHUB,
    technologies: TECHNOLOGIES.CAFE,
  },
  {
    name: 'Phones Online Store',
    description: ['Responsive SPA of online gadgets shop.This App was created by team of 5 members from scratch both Frontend and Backend.', 'Project is about to make it easy for user to choose his nest smartphone.'],
    parts: 'Part: Frontend',
    time: 'Time: 10 days from scratch',
    linkWeb: PROJECTS_LINKS.PHONE_DEMO,
    linkGit: PROJECTS_LINKS.PHONE_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
  },
  {
    name: 'Chuck Norris Jokes App',
    description: ['Responsive Application made for fun.', 'If you are boring just visit this one and get random Chuck Norris`s joke, see nice loaders and some animations.', 'Have fun!'],
    parts: 'Part: Frontend',
    time: 'Time: 1 day from scratch',
    linkWeb: PROJECTS_LINKS.CHUCK_DEMO,
    linkGit: PROJECTS_LINKS.CHUCK_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
  },
  {
    name: 'Todo Application',
    description: ['Minimalistic planner where authorized user can manage one`s tasks.', 'It is simple and works with no bugs.', 'My friends use this app for managing their days.'],
    parts: 'Part: Frontend',
    time: 'Time: 10 days',
    linkWeb: PROJECTS_LINKS.TODO_DEMO,
    linkGit: PROJECTS_LINKS.TODO_GITHUB,
    technologies: TECHNOLOGIES.TODO,
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
