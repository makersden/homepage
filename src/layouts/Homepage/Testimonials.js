import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import styles from './Testimonials.scss';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const testimonials = [{
  quote: 'Like a Swiss army knife of web development - no matter what obstacle comes up, they will find a solution from a vast repository of tricks. Their experience across the stack made them an invaluable part of the team who you could trust to get things done. Fast',
  author: 'Erik, Senior Software Engineer @ German insurance start-up'
}, {
  quote: 'Time and time again impressed me as well as their peers with their dedication, wide technical understanding and an never ending urge to learn and improve. They also make for a reliable provider thanks to excellent communication skills — a trait rare among first-class engineers.',
  author: 'Florian, CTO @ Finnish smart housing startup'
}, {
  quote: `They understand a startup's need for speed and made an effort towards improving the team's velocity without sacrificing quality. Without hesitation they filled an urgent vacancy in devops, also offering sound advice on cloud architecture, which helped to move the project in the right direction. They worked efficiently across teams to aid the delivery of a customer acquisition funnel aside from normal duties. They put emphasis on efficient and clear communication. True full-stack engineers and a valuable asset to a company depending on software.`,
  author: 'Silvan, COO @ German insurance startup',
}];

const Testimonial = ({ quote, author }, index) => (
  <section className={styles.testimonial} key={index}>
    <h4>
      “{quote}”
    </h4>
    <span>
      {author}
    </span>
  </section>
);

Testimonial.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

const Testimonials = () => (
  <section className={styles.testimonials}>
    <Slider {...SLIDER_SETTINGS}>
      {testimonials.map(Testimonial)}
    </Slider>
  </section>
);

export default Testimonials;
