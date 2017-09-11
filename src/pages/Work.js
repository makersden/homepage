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
  margin: 0;
  list-style-type: none;
  padding: 0;
`;

const CaseDescription = styled.div`
  flex: 3;
  padding-left: 4.8rem;
  padding-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledCase = styled.li`
  display: flex;
  align-items: stretch;
  font-size: 2.4rem;
  font-weight: 300;
  width: 100%;
  margin-top: 6rem;
  &:nth-child(2n) {
    flex-direction: row-reverse;
    ${CaseDescription} {
      padding-left: 0;
      padding-right: 4.8rem;
    }
  }
`;

const CaseImage = styled.div`
  flex: 2;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const CaseName = styled.a`
  display: inline-block;
  font-weight: 400;
  font-size: 3.6rem;
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
        <Case
          name="FRI:DAY"
          link="https://www.friday.de"
          image={friday}
          technologies={[
            "amazonwebservices",
            "javascript",
            "typescript",
            "react",
            "sass",
            "nodejs",
            "babel",
            "webpack",
            "nginx"
          ]}
        >
          <p>
            An innovative car insurance solution rapidly taking over the German
            market.
          </p>
          <p>
            We helped create the mobile-friendly web application, sales funnel
            and landing page. We established the cloud infrastructure.
          </p>
        </Case>
        <Case
          name="Tinki"
          link="https://tinki.com/"
          image={tinki}
          technologies={[
            "amazonwebservices",
            "javascript",
            "react",
            "sass",
            "nodejs",
            "babel",
            "webpack",
            "nginx",
            "postgres"
          ]}
        >
          <p>
            A fresh take on livening up the Finnish small job market. Connecting
            private professional with customers.
          </p>
          <p>
            We were responsible for full-stack development of the solution, from
            architecture and infrastructure design, to backend and frontend
            coding.
          </p>
        </Case>
      </Cases>
    </Container>
  );
};

export default Home;
