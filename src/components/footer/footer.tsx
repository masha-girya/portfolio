/* eslint-disable max-len */
import React from 'react';
import {
  PROJECTS_LINKS_CONSTANTS as PROJECTS_LINKS,
  MAIN_TITLE_CONSTANT,
} from '../../app-constants';
import { SideSection } from '../side-section';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__box">
        <div className="footer__info">
          <div className="footer__info__text">
            <h3 className="footer__title">Maria Girya</h3>

            <h5 className="footer__subtitle">
              {MAIN_TITLE_CONSTANT[0]}
              <br />
              {MAIN_TITLE_CONSTANT[1]}
            </h5>
          </div>

          <div className="footer__contacts">
            <h3 className="footer__title">Contacts</h3>
            <SideSection isFooter />
          </div>
        </div>
        <div>
          <p className="footer__copyright">
            © Copyright 2023. Made by
            {' '}
            <a href={PROJECTS_LINKS.PORTFOLIO} className="footer__link">
              Maria Girya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
