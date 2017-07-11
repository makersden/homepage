import React, { PropTypes } from 'react';
import { Link } from 'phenomic';
import classnames from 'classnames/bind';
import Svg from 'react-svg-inline';

import styles from './index.scss';

const cx  = classnames.bind(styles);

const _hashLink = (currentHash) => (id, text) => {
  return (
    <Link to={`/#${id}`} className={cx('navLink', { active: id === currentHash })}>{text}</Link>
  );
};

const link = (to, text) => {
  return (
    <Link to={to} className={cx('navLink')} activeClassName={cx('active')}>{text}</Link>
  );
}

const Header = ({ location: { hash, pathname } }, { metadata: { pkg } }) => {
  const hashName = hash.slice(1);
  const hashLink = _hashLink(hashName);
  const isHome = pathname === '/' && (!hashName || hashName === 'home');
  return (
    <nav className={styles.nav}>
      {hashLink('team', 'Our Team')}
      {hashLink('work', 'Our Work')}
      <Link to="/#home" className={cx('homeLink', 'navLink', { active: isHome })}>
        Makers' Den
      </Link>
      {hashLink('contact', 'Contact Us!')}
      {link('blog', 'Our Blog')}
    </nav>
  );
};

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Header;
