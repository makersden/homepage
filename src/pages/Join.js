import React from "react";
import styled, { css, keyframes } from "styled-components";
import { withStateHandlers, withHandlers } from "recompose";
import { Flex } from "grid-styled";
import Observer from "react-intersection-observer";

import get from "lodash/fp/get";

import { color, column, font, size, sumSize } from "../theme";

import { Image } from "../components/Section";
import CvModal from "../components/CvModal";

import FadeWithoutFont from "../FadeWithoutFont";

const Container = styled(Flex).attrs({ column: true })`
  color: ${get("theme.colors.text")};
  align-items: center;
  width: ${column(12)};
`;

const Headline = styled.h1`
  font-family: ${font("display")};
  letter-spacing: 1px;
  margin: 0;
  font-size: ${sumSize(3, 1)};
  font-weight: normal;
  margin-top: ${size(3)};
  margin-bottom: ${size(3)};
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Video = styled.div`
  border: 1px solid white;
  width: 640px;
  height: 480px;
`;

const LunchHeadline = styled.h3`
  margin: ${sumSize(3, 2)} 0;
  font-size: ${sumSize(2, 1)};
`;

const StyledLunchMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const StyledLunchOption = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${sumSize(2, 1)};
  padding: ${size(3)} ${size(3)};
  background: ${color("green")};
  border-radius: 9px;
  display: flex;
  align-items: center;
  width: calc(300px - ${size(4)} / 2);
  transition: color 300ms, background-color 300ms;

  &:hover {
    background: ${color("lightGreen")};
    color: ${color("textDark")};
  }

  ${Image} {
    width: ${size(4)};
    height: ${size(4)};
    margin-right: ${size(2)};
  }
`;

const LunchOption = ({ children, image, onClick }) => (
  <StyledLunchOption onClick={onClick}>
    <Image {...image.childImageSharp} width={size(4)} />
    <span>{children}</span>
  </StyledLunchOption>
);

const LunchMenu = ({ meat, veg, onClick }) => (
  <StyledLunchMenu>
    <LunchOption image={meat} onClick={onClick}>Meat</LunchOption>
    <LunchOption image={veg} onClick={onClick}>Veg</LunchOption>
  </StyledLunchMenu>
);

const flash = props => keyframes`
  0% {
    color: ${color("green")(props)};
  }

  30% {
    color: ${color("white")(props)};
  }

  100% {
    color: ${color("green")(props)};
  }
`;


const StyledFeatures = styled.div`
  position: relative;
  margin-top: ${size(4)};
  width: ${column(10)};
  min-width: 600px;
  display: flex;
  flex-direction: row;
  font-family: ${font("display")};
  font-size: ${size(3)};
  justify-content: flex-end;
  align-items: flex-start;

  h3 {
    margin-top: 0;
    text-align: right;
    flex: 1;
  }

  ul {
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.17;
    margin-left: ${size(4)};
  }
`;

const Feature = styled.li`
  ${props => props.clickable && `
    cursor: pointer;
  `}
  background: ${color("backgroundDark")};
  position: relative;
  z-index: 1;
  margin-left: calc(-${size(4)} + 1px);
  padding-left: calc(${size(4)} - 1px);
`;

const FlashingSpan = styled.span`
  color: ${color("green")};
  height: 1.17em;
  line-height: 1.17em;
  height: 1.17em;
  transition: color 0.3s;

  ${props =>
    props.selected
      ? css`
          color: ${color("superWhite")};
        `
      : props.flash &&
        css`
          animation: 300ms ${flash};
        `}
  ${props=> props.clickable && css`
    &:hover {
      color: ${color("superWhite")};
    }
  `}
`;

const Description = styled.li`
  text-align: right;
  font-family: monospace;
  position: absolute;
  font-size: ${size(2)};
  margin-top: calc(1.17 * ${sumSize(3, 2)});

  top: 0;
  left: 0;
  right: 0;

  opacity: 0;
  letter-spacing: 0.5px;
  line-height: 1.5;
  width: calc(50% - ${size(3)});
  transition: opacity 100ms, transform 100ms;
  transform: translateX(50%);

  ${props =>
    props.show &&
    css`
      opacity: 0.7;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    `} 1;
`;

const Features = ({ title, features, selectedFeature, onSelectFeature }) => (
  <StyledFeatures>
    <h3>{title}</h3>
    <ul>
      {features.map(feature => [
        <Feature clickable={!!feature.description} onClick={() => onSelectFeature(feature)}>
          <Observer>
            {inView => (
              <FlashingSpan
                flash={inView}
                selected={selectedFeature === feature}
                clickable={!!feature.description}
              >
                {feature.name || feature}
              </FlashingSpan>
            )}
          </Observer>
        </Feature>,
        feature.description && (
          <Description
            show={selectedFeature === feature}
            dangerouslySetInnerHTML={{ __html: feature.description }}
          />
        )
      ])}
    </ul>
  </StyledFeatures>
);

const workFeatures = [
  {
    name: "Code React",
    description:
      "Let's face it - it's the bees knees. They got a lot of things right in there and it makes us real happy. We don't mind other frameworks, but React (or Preact) is usually our first choice."
  },
  {
    name: "With Nodejs",
    description:
      "It's matured a lot and - all hype aside - it's the right tool for 80% of the jobs. As long as we don't try to implement computer vision algorithms in it."
  },
  {
    name: "On AWS",
    description:
      "There's a lot less backend to maintain when you can write lambdas instead."
  },
  {
    name: "for Services",
    description:
      "We're all on this earth for a reason. Ours is to crank out amazing services. We knock 'em out of the park."
  },
  {
    name: "    ",
  },
];

const funFeatures = [
  {
    name: "Videos",
    description:
      "Don't knock it till you try it - we've had tons of joy shooting different videos!"
  },
  {
    name: "Podcasts",
    description:
      "Some discussions are just too good to keep only within the inner circle. Some ideas "
  },
  { name: "Apps & Demos" },
  {
    name: "Drawing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Woodworking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "...",
    description:
      "You are passionate about various topics. We are eager to hear about your interests. Perhaps we can partake in them together?"
  }
];

const values = [
  {
    name: "Freedom",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Challenge",
    description:
      "There's no reason to be afraid, no time to be light-weight. If you don't feel stupid - you're not challenging yourself or learning enough. We like to <strong>feel</strong> stupid so we don't have to <strong>be</strong> stupid."
  },
  {
    name: "Improvement",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Responsibility",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Respect",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Balance",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

const workplaces = [
  { name: "At co-works" },
  { name: "From home" },
  { name: "At customers'" }
];

const Join = ({ closeModal, data, isModalOpen, openModal, selectedFeature, selectFeature }) => {
  return (
    <Container>
      <FadeWithoutFont>
        <Headline>
          <span>
            By Makers<br />
            For Makers
          </span>
        </Headline>
      </FadeWithoutFont>
      <Video />
      <FadeWithoutFont>
        <Container>
          <LunchHeadline>Let's have lunch.</LunchHeadline>
          <LunchMenu {...data} onClick={openModal} />

          <Features
            title="By day, we"
            features={workFeatures}
            selectedFeature={selectedFeature}
            onSelectFeature={selectFeature}
          />

          <Features
            title="For fun, we"
            features={funFeatures}
            selectedFeature={selectedFeature}
            onSelectFeature={selectFeature}
          />

          <Features
            title="We value"
            features={values}
            selectedFeature={selectedFeature}
            onSelectFeature={selectFeature}
          />

          <Features
            title="We work"
            features={workplaces}
            selectedFeature={selectedFeature}
            onSelectFeature={selectFeature}
          />

          <LunchHeadline>We eat food too.</LunchHeadline>
          <LunchMenu {...data} onClick={openModal} />
        </Container>
      </FadeWithoutFont>
      <CvModal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
};

export default withStateHandlers(() => ({ selectedFeature: "", isModalOpen: false, }), {
  selectFeature: () => selectedFeature => {
    return {
      selectedFeature
    };
  },
  openModal: () => () => ({
    isModalOpen: true
  }),
  closeModal: () => () => {
    console.log("closeModal")
    return ({
      isModalOpen: false
    })

  }
})(Join);

export const pageQuery = graphql`
  query Images {
    meat: file(relativePath: { eq: "meat.png" }) {
      childImageSharp {
        sizes(maxWidth: 512, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    veg: file(relativePath: { eq: "veg.png" }) {
      childImageSharp {
        sizes(maxWidth: 512, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
