import React from 'react';
import SVGInline from "react-svg-inline"

import styles from './Technologies.scss';

import akka from 'assets/images/tech/akka.svg';
import angular from 'assets/images/tech/angular.svg';
import aws from 'assets/images/tech/aws.svg';
import heroku from 'assets/images/tech/heroku.svg';
import java from 'assets/images/tech/java.svg';
import play from 'assets/images/tech/play.svg';
import rails from 'assets/images/tech/rails.svg';
import scala from 'assets/images/tech/scala.svg';
import react from 'assets/images/tech/react.svg';

const technologies = {
  akka,
  angular,
  aws,
  heroku,
  java,
  play,
  rails,
  scala,
  react
};

const Technology = (name) => (
  <section className={styles.technology}>
    <SVGInline svg={technologies[name]} title={name} />
  </section>
);

export default () => (
  <section className={styles.technologies}>
    {Object.keys(technologies).map(Technology)}
  </section>
);
