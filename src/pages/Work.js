import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { color } from "../theme";
import { smartUnderline } from "../mixins";
import friday from "../../assets/images/cases/friday.jpg";

const Container = styled.div``;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 8rem;
  text-align: center;
  font-weight: 300;
  font-size: 4.2rem;
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

const Cases = styled.ul`
  margin: 7.2rem 0;
  list-style-type: none;
  padding: 0;
`;

const Case = styled.li`
  display: flex;
  align-items: stretch;
  font-size: 2.4rem;
  font-weight: 300;
  width: 100%;
`;

const CaseImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const CaseDescription = styled.div`padding: 0 1rem;`;

const CaseName = styled.a`
  font-weight: 400;
  font-size: 2.4rem;
  margin: 0;
  margin-bottom: 1.2rem;
  color: ${color("textDark")};
  ${props =>
    smartUnderline({
      background: props.theme.colors.text,
      text: props.theme.colors.textDark,
      selection: "transparent"
    })};
`;

const TechStack = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Title>Our Work</Title>
      <Summary>
        We specialize in creating rich, modern Web applications. We care about{" "}
        <strong>great UX</strong>, <strong>silky smooth performance</strong>,{" "}
        <strong>efficient SEO</strong> and being{" "}
        <strong>mobile-friendly</strong>.
      </Summary>
      <Summary>
        Our key technologies are <strong>React</strong> and{" "}
        <strong>Node.js</strong> in the <strong>AWS</strong> cloud. We are not
        afraid of working on the <strong>JVM</strong> too.
      </Summary>
      <Cases>
        <Case>
          <CaseImage src={friday} alt="FRI:DAY" />
          <CaseDescription>
            <CaseName href="https://friday.de" target="blank">
              FRI:DAY
            </CaseName>
            <p>
              An innovative car insurance solution rapidly taking over the
              German market.
            </p>
            <p>
              We helped create the mobile-friendly web application, sales funnel
              and landing page. We established the cloud infrastructure.
            </p>
            <TechStack />
          </CaseDescription>
        </Case>
      </Cases>
    </Container>
  );
};

export default Home;
