import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './index.scss';

const Tag = (tag) => (
  <li className={styles.tag}>
    {tag.toLowerCase()}
  </li>
);

const PagePreview = ({ __url, title, date, description, tags = [] }) => {
  const pageDate = date ? new Date(date) : null;

  return (
    <Link to={__url} className={styles.preview}>
      <header>
        <h2>
          { title }
        </h2>
        {
          pageDate &&
          <small>
            { ' ' }
            <time key={pageDate.toISOString()}>
              { pageDate.toDateString() }
            </time>
          </small>
        }
      </header>
      {tags && tags.length > 0 && (
        <ul className={styles.tags}>
          {tags.map(Tag)}
        </ul>
      )}
      <p>
        { description }
      </p>
    </Link>
  );
};

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default PagePreview;
