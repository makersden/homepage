import React, { Component, PropTypes } from 'react';
import styles from './index.scss';
import Hero from './Hero';
import smoothscroll from 'smoothscroll';
// import enhanceCollection from "phenomic/lib/enhance-collection"

// import PagesList from "../../components/PagesList"

// const numberOfLatestPosts = 6
const avgTypingDelay = 40;

const showFooter = () => {
  document.querySelector('footer').classList.remove(styles.hidden);
};

class Homepage extends Component {
  scrollTo = (e) => {
    e.preventDefault();
    smoothscroll(
      this[e.target.hash.slice(1)],
      300,
      () => {console.log('scrollt!')},
      this.scrollContext
    );
  }

  render() {
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
            <a href="#meet_the_team" onMouseDown={this.scrollTo}>Our Team</a>
            <a href="#see_our_work">Our Work</a>
            <a href="#home" className={styles.homeLink} onMouseDown={this.scrollTo}>
              MAKERS' DEN
            </a>
            <a href="">Our Testimonials</a>
            <a href="">Contact Us</a>
          </nav>
          <section className={styles.homepageSegments} ref={e => this.scrollContext = e}>
            <Hero ref={e => this.home = e} />
            <section id="meet_the_team" ref={(e) => this.meet_the_team = e}>
              A combined 8278 parsecs of experience
            </section>
            <section id="work" ref={(e) => this.work = e}>
              4318 projects launched into space
            </section>
            <section id="testimonials" ref={(e) => this.testimonials = e}>
              "My God it was beautiful." - Some guy
            </section>
            <section id="contact" ref={(e) => this.contact = e}>
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
