import React, { PropTypes } from 'react';

import styles from './index.scss';

const Container = props => {
  return (
  <section className={styles.container}>
    <section className={styles.background}>
      <section className={styles.stars}>
        <section className={styles.bigStars} />
        <section className={styles.mediumStars} />
        <section className={styles.smallStars} />
      </section>
    </section>
    { props.children }
  </section>
) };

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
