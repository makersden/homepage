import React, { Component, PropTypes } from 'react';

import Page from '../Page';

import styles from './index.scss';

class Post extends Component {
  static propTypes = {
    head: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.main.focus();
    console.log('focus');
  }

  render() {
    const { props } = this;

    // it's up to you to choose what to do with this layout ;)
    const pageDate = props.head.date ? new Date(props.head.date) : null;
    const author = props.head.author;

    return (
      <main className={styles.main} tabIndex={-1} ref={e => this.main = e}>
        <article className={styles.article}>
          <Page
            {...props}
            header={
              <header>
                <span>{author}, </span>
                <time key={pageDate.toISOString()}>
                  { pageDate.toDateString() }
                </time>
              </header>
            }
          />
        </article>
      </main>
    );
  }
}

export default Post;
