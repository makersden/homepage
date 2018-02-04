import { css } from "styled-components";
import theme from "./theme";
import * as themeFns from "./theme";

const smartUnderlineDefaults = {
  background: theme.colors.backgroundDark,
  text: theme.colors.text,
  selection: theme.colors.backgroundLight,
  position: "95%",
  size: "1px"
};

export const smartUnderline = optionsInput => {
  const { background, text, selection, position, size } = Object.assign(
    {},
    smartUnderlineDefaults,
    optionsInput
  );

  return css`
    @supports (text-decoration-skip: ink) {
      text-decoration-skip: ink;
    }

    @not supports(text-decoration-skip: ink) {
      color: inherit;
      text-decoration: none;
      background: linear-gradient(${background}, ${background}),
        linear-gradient(${background}, ${background}),
        linear-gradient(${text}, ${text});
      background-size: 0.05em ${size}, 0.05em ${size}, ${size} ${size};
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
    }
  `;
};

const borderCornerDefaults = {
  color: "white",
  size: "0.5rem"
};

export const borderCorners = optionsInput => {
  const options = Object.assign({}, borderCornerDefaults, optionsInput);

  const { size } = options;

  const color = themeFns.color(options.color);
  return css`
    position: relative;

    ::before,
    ::after {
      border-top: 0.1rem solid ${color};
      top: -0.1rem;
    }

    > *::before,
    > *::after {
      border-bottom: 0.1rem solid ${color};
      bottom: -0.1rem;
    }

    ::before,
    > *::before {
      border-left: 0.1rem solid ${color};
      left: -0.1rem;
    }

    ::after,
    > *::after {
      border-right: 0.1rem solid ${color};
      right: -0.1rem;
    }

    ::before,
    > *::before,
    ::after,
    > *::after {
      position: absolute;
      content: " ";
      width: ${size};
      height: ${size};
    }
  `;
};

export const fade = css`
  transition: opacity 300ms 100ms;
  opacity: ${props => (props.show ? 1 : 0)};
`;

export const transition = (...props) => css`
  transition: ${props.map(prop => `${prop} 200ms`).join(", ")};
`;

export const circle = size => css`
  &,
  * {
    border-radius: 50%;
    height: ${size};
    width: ${size};
  }
`;
