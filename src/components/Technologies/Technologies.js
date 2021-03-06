import React from "react";
import { DiFirebase, DiReact, DiPython, DiDatabase } from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SectionDivider></SectionDivider>
    <br></br>
    <br></br>
    <br></br>

    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Always eager to learn more!</SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"></DiPython>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with<br></br>Python, JavaScript, Java, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with<br></br>React.js, Node.js, Express.js, D3.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem"></DiDatabase>
        <ListContainer>
          <ListTitle>Databases & DevOps</ListTitle>
          <ListParagraph>
            Experience with<br></br>MongoDB, Docker, Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
