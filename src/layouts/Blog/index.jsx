import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from 'src/layouts/Page';
import PagesList from 'src/components/PagesList';

import styles from './index.scss';

export default class Blog extends Component {
  static contextTypes = {
    collection: PropTypes.array,
  };

  render() {
    const { collection } = this.context;
    const posts = enhanceCollection(collection, {
      filter: c => c.layout === 'Post'
    });

    const text = posts.length > 0
               ? 'Here\'s what we enjoy writing about.'
               : 'Magnificent things coming very very soon.';

    return (
      <section className={styles.main}>
        <Helmet title={'Blog | Makers\' Den'} />
        <p className={styles.introduction}>
          {text}
        </p>
        <PagesList pages={ posts } className={styles.posts} />
      </section>
    );
  }
}
