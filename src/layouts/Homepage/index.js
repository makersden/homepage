import React, { PropTypes } from 'react';
import Typist from 'react-typist';
import styles from './index.css';
import envelope from './Envelope.svg';
import SVGInline from 'react-svg-inline';
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

const Homepage = () => {
  // const latestPosts = enhanceCollection(collection, {
  //   filter: { layout: "Post" },
  //   sort: "date",
  //   reverse: true,
  // })
  // .slice(0, numberOfLatestPosts)

  return (
  <article className={styles.homepage}>
    <h1 className={styles.hero}>
      <Typist cursor={cursor}
              avgTypingDelay={avgTypingDelay}
              stdTypingDelay={0}
              onTypingDone={showFooter}
          >
        We are Makers.
      </Typist>
    </h1>
    <footer className={styles.hidden}>
      <a href="mailto:wearemakersden@gmail.com" className={styles.contact}>
        <SVGInline svg={envelope} />
      </a>
    </footer>
  </article>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
