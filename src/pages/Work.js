import React from "react";
import styled, { css } from "styled-components";
import Helmet from "react-helmet";

import { mix } from "../polished";
import { borderCorners, smartUnderline } from "../mixins";
import { color } from "../theme";
import TechStack from "../components/TechStack";

const Container = styled.div``;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 4.8rem;
  text-align: center;
  font-weight: 300;
  font-size: 4.8rem;
  color: #111;
`;

const ListItem = styled.li``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 4.8rem;
  justify-content: center;

  > * {
    :first-child {
      margin-right: 2.4rem;
    }

    :last-child {
      margin-left: 2.4rem;
    }
  }

  :nth-child(2n + 1) {
    flex-direction: row-reverse;

    > * {
      :first-child {
        margin-left: 2.4rem;
      }

      :last-child {
        margin-right: 2.4rem;
      }
    }
  }

  > * {
    flex: 1;
  }
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  color: ${color("textDark")};
  text-align: ${props => props.align || "left"};
`;

const ImagePlaceholder = styled.div`
  max-width: ${props => props.width};
  height: ${props => props.height};

  background: rgba(0, 0, 0, 0.1);
`;

const Quote = styled.blockquote`
  margin-left: 0;
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 300;
  margin-bottom: 4.8rem;
`;

const Author = styled.span`
  color: ${color("black")};
  font-size: 2.4rem;
  position: relative;
  margin-bottom: 2.4rem;

  ::before {
    content: "–";
    position: absolute;
    left: 0;
    top: 0;
  }

  > span {
    display: block;
    margin-left: 2.4rem;
  }
`;

const CallToAction = styled.a`
  border: 1px solid ${mix(0.5, "accent", "white")};
  background-color: ${mix(0.1, "accent", "white")};
  color: ${color("accent")};
  font-weight: 700;
  font-size: 2.4rem;
  padding: 3.2rem 4.8rem;
  text-align: center;
  text-decoration: none;
  align-self: center;

  ${props =>
    borderCorners({ color: "accent" })} transition: background-color 200ms,
    border-color 200ms,
    color 200ms,
    font-size 200ms;

  :hover {
    border-color: ${color("accent")};
    color: ${color("white")};
    font-size: 3.2rem;
    background-color: ${color("accent")};
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Our Work</Title>
      <Section>
        <ImagePlaceholder width="100%" height="500px" />
        <Description>
          <Paragraph standout>
            We engineer high quality services, back to back.
          </Paragraph>
          <Paragraph>
            We take care of frontends, backends, data and cloud.
          </Paragraph>
          <Paragraph>We like to use React, NodeJS, Scala and AWS.</Paragraph>
        </Description>
      </Section>
      <Section>
        <ImagePlaceholder width="470px" height="760px" />
        <Description>
          <Paragraph align="right">
            We created machine learning algorithms together with iHealth Finland
            that forecast the spread of pathogens. Through our web based
            interface, doctors and pharma companies can visualize at which time
            and which parts of the country epidemics occur with a high
            probability.
          </Paragraph>
          <Quote>
            “They provided advice, UI design, frontend and backend code, cloud
            infrastructure and data analysis algorithms. All on time, very
            communicative and flexible with adjusting features as the project
            went along. It’s reassuring to know your product is in the hands of
            real professionals. Impeccable work - I can recommend them without
            hesitation.”
          </Quote>
          <Author>
            <span>Dr. Otto Helve</span>
            <span>CEO of iHealth Finland and board member of Duodecim Oy.</span>
          </Author>
        </Description>
      </Section>
      <Section>
        <ImagePlaceholder width="470px" height="490px" />
        <Description>
          <Quote>
            “Without big data analytics, companies are blind and deaf, wandering
            out onto the web like deer on a freeway.”
          </Quote>
          <Author>
            <span>Geoffrey Moore</span>
          </Author>
          <Paragraph>
            We help our clients harvest relevant data from their services and
            unlock its potential through intuitively visualized insights.
          </Paragraph>
        </Description>
      </Section>
      <Section>
        <ImagePlaceholder width="550px" height="665px" />
        <Description>
          <Paragraph align="center">What are your needs?</Paragraph>
          <CallToAction href="mailto:korneliusz@makersden.io">
            <span>Let's make them real.</span>
          </CallToAction>
        </Description>
      </Section>
    </Container>
  );
};

export default Home;
