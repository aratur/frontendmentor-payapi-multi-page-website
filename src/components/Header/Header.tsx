/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import logo from '../../assets/shared/desktop/logo.svg';
import style from './header.module.scss';
import BackgroundPattern from '../BackgroundPattern/BackgroundPattern';

const autoClickCheckbox = () => document.getElementById('navToggle')?.click();

const Header = () => {
  const location = useLocation();
  return (
    <header className={[style.header, 'anchor-page'].join(' ')}>
      <BackgroundPattern
        variant={location.pathname === '/' ? 'home' : 'other'}
      />
      <nav
        aria-label="header navigation"
        id="header navigation"
        className={style.header__nav}
      >
        <Link to="/">
          <img alt="pay API logo" src={logo} />
        </Link>
        <ul className={style.header__ul}>
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
          aria-label="Navigation toggle"
          className={[
            style.nav__input,
            style['nav__input--toggle'],
            'sr_only',
          ].join(' ')}
        />
        <label htmlFor="navToggle" aria-hidden />
        <div className={style['header__nav--mobile']}>
          <label htmlFor="navToggle" aria-hidden />
          <div className={style['header__nav--toggle-horizontal-line']} />
          <ul className={style['header__ul--mobile']}>
            <li>
              <Link to="/pricing" onClick={autoClickCheckbox}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={autoClickCheckbox}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={autoClickCheckbox}>
                Contact
              </Link>
            </li>
          </ul>
          <Button variant="primary">Schedule a Demo</Button>
        </div>
      </nav>
      <div className={style.header__button}>
        <Button variant="primary">Schedule a Demo</Button>
      </div>
    </header>
  );
};

export default Header;
