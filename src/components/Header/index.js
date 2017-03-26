import React, { PropTypes } from 'react';
import { Link } from 'phenomic';
import classnames from 'classnames/bind';
import Svg from 'react-svg-inline';

import styles from './index.scss';

const cx  = classnames.bind(styles);

const _link = (currentHash) => (id, text) => {
  return (
    <Link to={`/#${id}`} className={cx('navLink', { active: id === currentHash })}>{text}</Link>
  );
};

const Header = ({ location: { hash, pathname } }, { metadata: { pkg } }) => {
  const hashName = hash.slice(1);
  const link = _link(hashName);
  const isHome = pathname === '/' && (!hashName || hashName === 'home');
  return (
    <nav className={styles.nav}>
      {link('team', 'Our Team')}
      {link('work', 'Our Work')}
      <Link to="/#home" className={cx('homeLink', 'navLink', { active: isHome })}>
        Makers' Den
      </Link>
      {link('honors', 'Our Honors')}
      {link('contact', 'Contact Us!')}
    </nav>
  );
};

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Header;
