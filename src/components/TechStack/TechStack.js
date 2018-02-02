import React from "react";
import styled from "styled-components";

import Devicon from "../Devicon";

const Technology = styled.li`
  &:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

const StyledDevicon = styled(Devicon)`
  font-size: 4.8rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const Heading = styled.h4`
  margin: 0;
  margin-bottom: 1.2rem;
`;

const TechStack = ({ technologies }) => {
  return (
    <div>
      <Heading>Tech stack:</Heading>
      <List>
        {technologies.map(technology => (
          <Technology key={technology}>
            <StyledDevicon icon={technology} colored />
          </Technology>
        ))}
      </List>
    </div>
  );
};

export default TechStack;
