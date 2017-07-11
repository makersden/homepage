import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Scrollbar from 'react-custom-scrollbars';
import { ScrollContainer } from 'react-router-scroll';
import invariant from 'invariant';
import { joinUri, Link } from 'phenomic';
import styles from './index.scss';
import heroStyles from './hero.scss';
import smoothscroll from 'src/utils/smoothscroll';
import Teammates from './Teammates';
import Testimonials from './Testimonials';
import Technologies from './Technologies';
import HelpChat from './HelpChat';

import rocket from 'assets/images/rocket.png';
import rocketTrail from 'assets/images/rockettrail.png';
import planet from 'assets/images/planet.png';
// import enhanceCollection from "phenomic/lib/enhance-collection"
// import PagesList from "../../components/PagesList"
// const numberOfLatestPosts = 6

const segments = [
  'home',
  'work',
  'team',
  'honors',
  'contact',
];

const shouldScroll = (url) => segments.indexOf(url) !== -1;

class Homepage extends Component {
  smoothScrollTo = (target, immediate) => {
    if (!(target && this[target])) return;

    const offset = this[target].offsetTop;

    if (immediate) {
      this.scrollContext.smoothScrollTop = offset;
      requestAnimationFrame(() => {
        this[target].scrollIntoView();
      });
    } else {
      smoothscroll(
        offset,
        300,
        () => {},
        this.scrollContext
      );
    }

  }

  scrollIfNeeded({props = this.props, immediate = false}) {
    const url = props.__url.replace(/\//g, '');
    if (shouldScroll(url)) {
      this.smoothScrollTo(url, immediate);
    }
  }

  setRefById = (e) => {
    if (e) {
      this[e.id] = e;
    }
  }

  helmet = () => {
    const { props: { head, __url }} = this;

    invariant(
      typeof head.title === 'string',
      `Your page '${__filename}' needs a title`,
    );

    const metaTitle = head.metaTitle ? head.metaTitle : head.title;

    const meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      {
        property: 'og:url',
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: 'og:description', content: head.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      /* { name: 'twitter:creator', content: `@${pkg.twitter}` },*/
      { name: 'twitter:description', content: head.description },
      { name: 'description', content: head.description },
    ];

    return (
      <Helmet title={metaTitle} meta={meta} />
    );
  }

  shouldUpdateScroll = (prevRouterProps, { location: { hash }}) => {
    const target = hash.slice(1);
    const immediate = !prevRouterProps || prevRouterProps.location.pathname  !== '/';
    const updateScroll = shouldScroll(target);
    if (updateScroll) {
      this.smoothScrollTo(target, immediate);
    }

    return updateScroll;
  }

  render() {
    const { setRefById } = this;
    return (
      <ScrollContainer scrollKey='homepage' shouldUpdateScroll={this.shouldUpdateScroll}>
        <section className={styles.homepageSegments} ref={e => this.scrollContext = e}>
          {this.helmet()}
          <section id="home" className={heroStyles.hero} ref={setRefById}>
            <section className={styles.rocketContainer}>
              <img src={rocketTrail} className={styles.rocketTrail} />
              <img src={rocket} className={styles.rocket} />
            </section>
            <h1>
              Software development by Veterans
            </h1>
            <h2>
              Let us guide you.
            </h2>
          </section>
          <section id="team" ref={setRefById}>
            <section className={styles.teamWrapper}>
              <section className={styles.teamDescription}>
                <h2 className={styles.teamExperience}>
                  A crack crew of IT Veterans, armed with <strong className={styles.parsecs}>7.34 parsecs</strong> of experience.
                </h2>
              </section>
              <Teammates />
              <p className={styles.teamValues}>
                We believe in using <strong>the right tools</strong>, <strong>consistent shipping</strong> of <strong>quality results</strong> and <strong>crystal clear communication</strong> to get the job done. We put <strong>laser focus on project success</strong>. We are fast and hungry learners, <strong>never discouraged by the unknown</strong>.
              </p>
            </section>
          </section>
          <section id="work"  ref={setRefById}>
            <h2 className={styles.workHeader}>
              We have successfully launched over 50 projects into space.
            </h2>
            <p>
              We are experienced in flying solo as well as supporting large teams.

              We've worked with high-profile brands as well as budding startups and our prototypes have travelled the globe alongside prominent expos.
            </p>
            <p>
              We love what we do, hence we are driven to experiment and embrace new technologies.
              However <strong>what we value the most is your success</strong>.
              That's why focus on a core set of tools which we know back to back.
            </p>
            <p className={styles.blogLink}>
              <Link to="/blog">We share our insights and discoveries on our blog.</Link>
            </p>
            <Technologies />
          </section>
          <section id="honors" className={styles.testimonials} ref={setRefById}>
            <h2 className={styles.testimonialsHeader}>
              But don't take just our word for it.
            </h2>
            <Testimonials />
          </section>
          <section id="contact" className={styles.contact} ref={setRefById}>
            <img src={planet} className={styles.planet} />
            <h2>
              Interested? We'd love to touch base.
            </h2>
            <h3>
              <a href="mailto:korneliusz@makersden.io">Send us an email</a> or drop a line in the chatbox.
            </h3>
          </section>
          <HelpChat />
        </section>
      </ScrollContainer>
    );
  }
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
