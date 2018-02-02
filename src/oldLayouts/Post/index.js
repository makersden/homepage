import React, { Component, PropTypes } from "react";
import ReactDisqusComments from "react-disqus-comments";

import Page from "../Page";

import styles from "./index.scss";

const setOverflow = overflow => {
  const html = document.querySelector("html");
  const body = document.body;

  html.style.overflow = overflow;
  body.style.overflow = overflow;
};

class Post extends Component {
  static propTypes = {
    head: PropTypes.object.isRequired
  };

  componentDidMount() {
    setOverflow("auto");
  }

  componentWillUnmount() {
    setOverflow("hidden");
  }

  render() {
    const { props } = this;

    // it's up to you to choose what to do with this layout ;)
    const pageDate = props.head.date ? new Date(props.head.date) : null;
    const author = props.head.author;

    return (
      <main className={styles.main} tabIndex={-1} ref={e => (this.main = e)}>
        <article className={styles.article}>
          <Page
            {...props}
            header={
              <header>
                <span>{author}, </span>
                <time key={pageDate.toISOString()}>
                  {pageDate.toDateString()}
                </time>
              </header>
            }
          />
          <ReactDisqusComments
            shortname="makersden-io"
            title={props.head.title}
            identifier={props.head.title.replace(/\s/g, "") + pageDate}
          />
        </article>
      </main>
    );
  }
}

export default Post;
