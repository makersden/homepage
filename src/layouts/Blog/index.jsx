import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
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

    const noPosts = posts.length === 0;
    const text = noPosts
               ? 'Magnificent things are coming very very soon.'
               : 'Here\'s what we enjoy writing about.';

    return (
      <section className={classnames(styles.main, { [styles.noPosts]: noPosts })}>
        <Helmet title={'Blog | Makers\' Den'} />
        <p className={styles.introduction}>
          {text}
        </p>
        {!noPosts && (
          <PagesList pages={ posts } className={styles.posts} />
         )}
      </section>
    );
  }
}
