import { css } from "styled-components";
import theme from "./theme";

const smartUnderlineDefaults = {
  background: theme.colors.backgroundDark,
  text: theme.colors.text,
  selection: theme.colors.backgroundLight,
  position: "95%"
};

const smartUnderline = optionsInput => {
  const { background, text, selection, position } = Object.assign(
    {},
    smartUnderlineDefaults,
    optionsInput
  );

  return css`
    color: inherit;
    text-decoration: none;
    background: -webkit-linear-gradient(${background}, ${background}),
      -webkit-linear-gradient(${background}, ${background}),
      -webkit-linear-gradient(${text}, ${text});
    background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    background-repeat: no-repeat, no-repeat, repeat-x;
    text-shadow: 0.03em 0 ${background}, -0.03em 0 ${background},
      0 0.03em ${background}, 0 -0.03em ${background}, 0.06em 0 ${background},
      -0.06em 0 ${background}, 0.09em 0 ${background}, -0.09em 0 ${background},
      0.12em 0 ${background}, -0.12em 0 ${background}, 0.15em 0 ${background},
      -0.15em 0 ${background};

    background-position-y: ${position}, ${position}, ${position};
    background-position-x: 0%, 100%, 0%;

    &::selection {
      text-shadow: 0.03em 0 ${selection}, -0.03em 0 ${selection},
        0 0.03em ${selection}, 0 -0.03em ${selection}, 0.06em 0 ${selection},
        -0.06em 0 ${selection}, 0.09em 0 ${selection}, -0.09em 0 ${selection},
        0.12em 0 ${selection}, -0.12em 0 ${selection}, 0.15em 0 ${selection},
        -0.15em 0 ${selection};
      background: ${selection};
    }
    &::-moz-selection {
      text-shadow: 0.03em 0 ${selection}, -0.03em 0 ${selection},
        0 0.03em ${selection}, 0 -0.03em ${selection}, 0.06em 0 ${selection},
        -0.06em 0 ${selection}, 0.09em 0 ${selection}, -0.09em 0 ${selection},
        0.12em 0 ${selection}, -0.12em 0 ${selection}, 0.15em 0 ${selection},
        -0.15em 0 ${selection};
      background: ${selection};
    }
    &:before,
    &:after,
    *,
    *:before,
    *:after {
      text-shadow: none;
    }
    &:visited {
      color: inherit;
    }
  `;
};

export { smartUnderline };
