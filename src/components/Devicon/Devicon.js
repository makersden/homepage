import React from "react";
import classNames from "classnames";

const Variants = {
  plain: "plain",
  original: "original",
  wordmark: "plain-wordmark"
};

const Devicon = ({ icon, variant = Variants.plain, colored, className }) => {
  return (
    <i
      className={classNames(
        `devicon-${icon}-${variant}`,
        { colored },
        className
      )}
    />
  );
};

Devicon.Variants = Variants;

export default Devicon;
