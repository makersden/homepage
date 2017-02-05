import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Svg from 'react-svg-inline';

import styles from './index.scss';

const _link = (currentHash) => (id, text) => (
  <a href={`/#${id}`} className={classNames(styles.navLink)}>{text}</a>
);

const Header = ({ location: { hash} }, { metadata: { pkg } }) => {
  const link = _link(hash);
  return (
    <nav className={styles.nav}>
      {link('team', 'Our Team')}
      {link('work', 'Our Work')}
      <a href="/#home" className={classNames(styles.homeLink, styles.navLink)}>
        Makers' Den
      </a>
      {link('honors', 'Our Honors')}
      {link('contact', 'Contact Us!')}
    </nav>
  );
};

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Header;
