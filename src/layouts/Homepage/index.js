import React, { PropTypes } from 'react';
import styles from './index.scss';
import Hero from './Hero';
import { StickyContainer, Sticky } from 'react-sticky';
// import enhanceCollection from "phenomic/lib/enhance-collection"

// import PagesList from "../../components/PagesList"

// const numberOfLatestPosts = 6
const cursor = {
  show: false,
};

const avgTypingDelay = 40;

const showFooter = () => {
  document.querySelector('footer').classList.remove(styles.hidden);
};

  // const latestPosts = enhanceCollection(collection, {
  //   filter: { layout: "Post" },
  //   sort: "date",
  //   reverse: true,
  // })
  // .slice(0, numberOfLatestPosts)
const Homepage = () =>
   (
     <StickyContainer className={styles.main}>
       <section className={styles.background}>
         <section className={styles.stars}>
          <section className={styles.bigStars} />
          <section className={styles.mediumStars} />
          <section className={styles.smallStars} />
        </section>
       </section>
       <section className={styles.content}>
        <Sticky>
          <nav className={styles.nav}>
            <a href="">Meet the Team</a>
            <a href="">See our Work</a>
            <a href="" className={styles.homeLink}>
              MAKERS' DEN
            </a>
            <a href="">Read Testimonials</a>
            <a href="">Contact Us!</a>
          </nav>
        </Sticky>
        <section className={styles.homepageSegments}>
          <Hero />
          <section>
            Poopsie Daisy
          </section>
        </section>
      </section>
     </StickyContainer>
  );

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
