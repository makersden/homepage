import React from 'react';

import styles from './hero.scss';

const Hero = () => {
   return (
      <section id="home" className={styles.hero}>
        <h1 className={styles.tagline}>
          Software development by Veterans
        </h1>
        <h2 className={styles.subtitle}>
          Successful launch guaranteed.
        </h2>
      </section>
   );
 };

export default Hero;
