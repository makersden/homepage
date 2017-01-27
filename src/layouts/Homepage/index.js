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
            {scrollLink('crew', 'Our Crew')}
            {scrollLink('work', 'Our Work')}
            <a href="#home" className={styles.homeLink} onMouseDown={this.scrollTo}>
              MAKERS' DEN
            </a>
            {scrollLink('testimonials', 'Our Testimonials')}
            {scrollLink('contact', 'Contact Us!')}
          </nav>
          <section className={styles.homepageSegments} ref={e => this.scrollContext = e}>
            <Hero id="home" />
            <section id="crew" ref={setRefById}>
              A combined 8278 parsecs of experience
            </section>
            <section id="work" ref={setRefById}>
              4318 projects launched into space
            </section>
            <section id="testimonials" ref={setRefById}>
              "My God it was beautiful." - Some guy
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
