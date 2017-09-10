import React, { PropTypes } from "react";

import PagePreview from "../PagePreview";
import styles from "./index.scss";

const PagesList = ({ pages }) => (
  <div className={styles.posts}>
    {pages.length ? (
      <ul>
        {pages.map(page => (
          <li key={page.title} className={styles.post}>
            <PagePreview {...page} />
          </li>
        ))}
      </ul>
    ) : (
      "No posts yet."
    )}
  </div>
);

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default PagesList;
