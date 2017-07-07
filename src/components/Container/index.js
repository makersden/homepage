import React, { PropTypes } from 'react';
import styles from './index.scss';
import classNames from 'classnames';

const shouldFadeStars = (splat = '') => splat.indexOf('blog/') === 0;

const Container = (props) => {
  return (
  <section className={styles.container}>
    <section className={classNames(styles.background, {
      [styles.faded]: shouldFadeStars(props.params.splat),
    })}>
      <section className={classNames(styles.stars, {
          [styles.faded]: shouldFadeStars(props.params.splat),
        })}>
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
