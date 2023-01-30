/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/shared/desktop/logo.svg';
import style from './Header.module.scss';
import BackgroundPattern from './BackgroundPattern';

const autoClickCheckbox = () => document.getElementById('navToggle')?.click();

const Header = () => (
  <header className={[style.header, 'page__anchor'].join(' ')}>
    <BackgroundPattern dataPageLocation="header" />
    <nav className={style.header__nav}>
      <Link to="/">
        <img alt="pay API logo" src={logo} />
      </Link>
      <ul className={style.header__nav__ul}>
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
      <input
        type="checkbox"
        id="navToggle"
        className={[style.nav__input_toggle, 'sr_only'].join(' ')}
      />
      <label htmlFor="navToggle" aria-hidden />
      <ul className={style.header__nav__ul_mobile}>
        <label htmlFor="navToggle" aria-hidden />
        <div className={style.nav__toggle_h_line} />
        <li>
          <Link to="/" onClick={autoClickCheckbox}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/empty" onClick={autoClickCheckbox}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={autoClickCheckbox}>
            Contact
          </Link>
        </li>
        <Button buttonClass="primary">Schedule a Demo</Button>
      </ul>
    </nav>
    <div className={style.header__button}>
      <Button buttonClass="primary">Schedule a Demo</Button>
    </div>
  </header>
);

export default Header;
