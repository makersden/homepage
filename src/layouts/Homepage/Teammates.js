import React from 'react';
import styles from './Teammates.scss';

import rts from 'assets/images/rts.jpg';
import kb from 'assets/images/kb.jpg';

const mates = [{
    name: 'Carl-Petter Bertell',
    experience: 12,
    photo: kb,
  }, {
    name: 'Korneliusz Caputa',
    experience: 6,
    photo: '//www.gravatar.com/avatar/ad74ad58ee0a8ce6c5aea3c58922512a?size=222x360',
  }, {
    name: 'Robert Tochman-Szewc',
    experience: 6,
    photo: rts,
  }];

const Teammate = ({name, photo }) => (
  <li className={styles.teammate}>
    <section className={styles.photo}>
      <img className={styles.phtoto} src={photo} />
    </section>
    <section className={styles.details}>
      <h3>
        {name}
      </h3>
    </section>
  </li>
);

export default ({name, photo}) => {
  return (
    <section className={styles.teammatesWrapper}>
      <hr className={styles.teammatesBackgroundDash} />
      <ul className={styles.teammates}>
        {mates.map(Teammate)}
      </ul>
    </section>
  );
}
