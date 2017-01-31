import React, { Component, PropTypes } from 'react';
import styles from './index.scss';
import heroStyles from './hero.scss';
import smoothscroll from 'smoothscroll';
import Teammates from './Teammates';
import Testimonials from './Testimonials';
import Technologies from './Technologies';

import rocket from 'assets/images/rocket.png';
import rocketTrail from 'assets/images/rockettrail.png';
// import enhanceCollection from "phenomic/lib/enhance-collection"

// import PagesList from "../../components/PagesList"

// const numberOfLatestPosts = 6
const avgTypingDelay = 40;

const showFooter = () => {
  document.querySelector('footer').classList.remove(styles.hidden);
};

console.log(styles);
class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  scrollTo = (e) => {
    console.log(e.target.hash, this[e.target.hash.slice(1)], this.scrollContext);
    e.preventDefault();
    smoothscroll(
      this[e.target.hash.slice(1)],
      300,
      () => {console.log('scrollt!')},
      this.scrollContext
    );
  }

  scrollLink = (id, text) => (
    <a href={`#${id}`} >{text}</a>
  )

  setRefById = (e) => {
    this[e.id] = e;
  }

  render() {
    const { scrollLink, setRefById } = this;

    return (
      <section className={styles.main}>
        <section className={styles.background}>
          <section className={styles.stars}>
            <section className={styles.bigStars} />
            <section className={styles.mediumStars} />
            <section className={styles.smallStars} />
          </section>
        </section>
        <section className={styles.content}>
          <nav className={styles.nav}>
            {scrollLink('team', 'Our Team')}
            {scrollLink('work', 'Our Work')}
            <a href="#home" className={styles.homeLink}>
              MAKERS' DEN
            </a>
            {scrollLink('testimonials', 'Our Testimonials')}
            {scrollLink('contact', 'Contact Us!')}
          </nav>
          <section className={styles.homepageSegments} ref={e => this.scrollContext = e}>
            <section id="home" className={heroStyles.hero}>
              <h1>
                Software development by Veterans
              </h1>
              <h2>
                Let our veterans guide you.
              </h2>
              <img src={rocket} className={styles.rocket} />
              <img src={rocketTrail} className={styles.rocketTrail} />
            </section>
            <section id="team" ref={setRefById}>
              <section className={styles.teamWrapper}>
                <section className={styles.teamDescription}>
                  <h2>
                    A crack crew of IT Veterans, armed with <strong title="That's about 24 light years!">7.34 parsecs</strong> of experience.
                  </h2>
                </section>
                <Teammates />
                <p className={styles.teamValues}>
                  We believe in using <strong>the right tools</strong>, <strong>consistent shipping</strong> of <strong>quality results</strong> and <strong>strong communication</strong> to get the job done. We put <strong>project success</strong> before our gain. We are fast and hungry learners, <strong>never discouraged by the unknown</strong>.
                </p>
              </section>
            </section>
            <section id="work" ref={setRefById}>
              <h2>
                We have successfully launched over 50 projects into space.
              </h2>
              <Technologies />
            </section>
            <section id="testimonials" ref={setRefById} className={styles.testimonials}>
              <h2 className={styles.testimonialsHeader}>
                But don't take just our word for it.
              </h2>
              <Testimonials />
            </section>
            <section id="contact" ref={setRefById}>
              In addition to email + phone let's have a chatbox cause that's what everyone does nowadays, and it lowers barrier to contact immensly. I think there's even facebook messenger widgets.
            </section>
          </section>
        </section>
      </section>
    );
  }
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
