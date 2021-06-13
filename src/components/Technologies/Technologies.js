import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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
import { Hr } from "../Projects/ProjectsStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <Hr></Hr>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>asd</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br></br>React.js, Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br></br>Node.js, Express.js, Mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br></br>Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
