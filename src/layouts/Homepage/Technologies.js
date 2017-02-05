import React from 'react';
/* import SVGInline from "react-svg-inline"*/

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
import nodejs from 'assets/images/tech/nodejs.svg';
import meteor from 'assets/images/tech/meteor.svg';
import googleanalytics from 'assets/images/tech/googleanalytics.svg';

const technologies = {
  nodejs,
  akka,
  angular,
  aws,
  react,
  heroku,
  java,
  meteor,
  scala,
  googleanalytics,
  play,
  rails,
};

const Technology = (name) => (
  <section className={styles.technology} key={name}>
    <img src={technologies[name]} title={name} />
  </section>
);

const AllTechnologies = Object.keys(technologies).map(Technology)

const Technologies = () => (
  <section className={styles.technologies}>
    {AllTechnologies}
  </section>
);

export default Technologies;
