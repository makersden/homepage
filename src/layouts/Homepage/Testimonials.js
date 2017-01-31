import React from 'react';
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
  quote: 'My God it was beautiful.',
  author: 'Some Guy'
}, {
  quote: 'Just stand back and watch.',
  author: 'Some Gal'
}, {
  quote: 'Impressive results. Brilliant team. Blinding speed. Astonishing communication. Will visit again.',
  author: 'Some Gal'
}];

const Testimonial = ({ quote, author }) => (
  <section className={styles.testimonial}>
    <h4>
      “{quote}”
    </h4>
    <span>
      {author}
    </span>
  </section>
);

export default () => (
  <section className={styles.testimonials}>
    <Slider {...SLIDER_SETTINGS}>
      {testimonials.map(Testimonial)}
    </Slider>
  </section>
);
