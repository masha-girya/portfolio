/* eslint-disable max-len */
import {
  TECHNOLOGIES_CONSTANTS as TECHNOLOGIES,
} from './technologies.constants';
import {
  PROJECTS_LINKS_CONSTANTS as PROJECTS_LINKS,
} from './projects-links.constants';
import { IProject } from '../types';

export const PROJECTS_CONSTANTS: IProject[] = [
  // CAFE
  {
    name: 'Cafe Website',
    description: 'Web Application with authentication, admin mode, ability to order products, and pay for order by crypto.You can see how as non-authorized user all products, but for ordering you should sing up. It`s easy, enjoy it :)',
    parts: 'Part: Backend and Frontend',
    time: 'Time: 2 months from scratch',
    linkWeb: PROJECTS_LINKS.CAFE_DEMO,
    linkGit: PROJECTS_LINKS.CAFE_GITHUB,
    technologies: TECHNOLOGIES.CAFE,
  },
  {
    name: 'Phones Online Store',
    description: 'Responsive SPA of online gadgets shop. This App was created by team of 5 members from scratch both Frontend and Backend. Project is about to make it easy for user to choose his nest smartphone',
    parts: 'Part: Frontend',
    time: 'Time: 10 days from scratch',
    linkWeb: PROJECTS_LINKS.PHONE_DEMO,
    linkGit: PROJECTS_LINKS.PHONE_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
  },
  {
    name: 'Chuck Norris Jokes App',
    description: 'Responsive Application made for fun. If you are boring just visit this one and get random Chuck Norris`s joke, see nice loaders and some animations. Have fun!',
    parts: 'Part: Frontend',
    time: 'Time: 1 day from scratch',
    linkWeb: PROJECTS_LINKS.CHUCK_DEMO,
    linkGit: PROJECTS_LINKS.CHUCK_GITHUB,
    technologies: TECHNOLOGIES.PHONES,
  },
  {
    name: 'Todo Application',
    description: 'Minimalistic planner where authorized user can manage one`s tasks. It is simple and works with no bugs. My friends use this app for managing their days',
    parts: 'Part: Frontend',
    time: 'Time: 10 days',
    linkWeb: PROJECTS_LINKS.TODO_DEMO,
    linkGit: PROJECTS_LINKS.TODO_GITHUB,
    technologies: TECHNOLOGIES.TODO,
  },
  {
    name: 'Bike Shop Landing',
    description: 'Responsive Landing Page written on HTML/SCSS. Has very user-friendly behavior and stylish appearance',
    parts: 'Part: Frontend',
    time: 'Time: 10 days',
    linkWeb: PROJECTS_LINKS.BIKE_DEMO,
    linkGit: PROJECTS_LINKS.BIKE_GITHUB,
    technologies: TECHNOLOGIES.BIKE,
  },
];
