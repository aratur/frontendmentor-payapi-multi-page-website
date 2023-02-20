import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/shared/desktop/logo-light.svg';
import facebook from '../../assets/shared/desktop/facebook.svg';
import twitter from '../../assets/shared/desktop/twitter.svg';
import linkedin from '../../assets/shared/desktop/linkedin.svg';
import style from './footer.module.scss';

const Footer = () => (
  <footer className={[style.footer, 'page__anchor'].join(' ')}>
    <nav
      aria-label="footer_navigation"
      id="footer_navigation"
      className={style.footer__nav}
    >
      <Link to="/">
        <img src={logoLight} alt="pay API logo" />
      </Link>
      <ul className={style.footer__nav__ul}>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <div className={style.footer__social_container}>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook link" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter link" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedin link" />
      </a>
    </div>
  </footer>
);

export default Footer;
