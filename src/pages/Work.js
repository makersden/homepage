import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { color } from "../theme";
import { smartUnderline } from "../mixins";
import friday from "../../assets/images/cases/friday.jpg";
import tinki from "../../assets/images/cases/tinki.jpg";
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

const Summary = styled.p`
  font-size: 2.4rem;
  font-weight: 300;

  strong {
    ${props =>
      smartUnderline({
        background: props.theme.colors.text,
        text: props.theme.colors.textDark,
        selection: "transparent"
      })};
    font-weight: 300;
  }

  margin: 0;
  margin-bottom: 2.4rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  :nth-child(2n + 1) {
    flex-direction: row-reverse;
  }

  > * {
    flex: 1;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${color("textDark")};
`;

const Case = ({ technologies, image, name, link, children }) => (
  <StyledCase>
    <CaseImage>
      <img src={image} alt={name} />
    </CaseImage>
    <CaseDescription>
      <CaseName href={link} target="blank">
        {name}
      </CaseName>
      {children}
      <TechStack technologies={technologies} />
    </CaseDescription>
  </StyledCase>
);

const Home = () => {
  return (
    <Container>
      <Title>Our Work</Title>
      <Section>
        <div />
        <Description>
          <Paragraph standout>We engineer high quality services.</Paragraph>
          <Paragraph>
            Frontends, Backends, Data, Cloud. It's what we do.
          </Paragraph>
          <Paragraph>We like to use React, NodeJS, Scala and AWS.</Paragraph>
        </Description>
      </Section>
    </Container>
  );
};

export default Home;
