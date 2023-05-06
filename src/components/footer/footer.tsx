import React from 'react';
import {
  PROJECTS_LINKS_CONSTANTS as PROJECTS_LINKS,
} from '../../app-constants';
import { SideSection } from '../side-section';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__box">
        <div className="footer__info">
          <div>
            <h3 className="footer__title">Maria Girya</h3>

            <h5 className="footer__subtitle">
              A Fullstack Web developer from Brave Ukraine
              <br />
              Focused on build user-friendly and high-quality websites
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
            <a
              href={PROJECTS_LINKS.PORTFOLIO}
              className="footer__link"
            >
              Maria Girya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
