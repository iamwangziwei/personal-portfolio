import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { GridContainer, BlogCard, Img } from "../Projects/ProjectsStyles";
const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section id="kk">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SectionDivider></SectionDivider>
    <br></br>
    <br></br>
    <br></br>
    <SectionTitle>KK the Cat</SectionTitle>
    <SectionText>
      This section is to show off the cutest thing in the entire world.
      <br></br>
      KK doesn't bother to look at me during the day but screams to wake me up
      every single morning. I still love him tho.
    </SectionText>
    <GridContainer>
      <BlogCard>
        <Img src="/images/7.jpeg"></Img>
      </BlogCard>
      <BlogCard>
        <Img src="/images/8.jpeg"></Img>
      </BlogCard>
    </GridContainer>
  </Section>
);

export default Acomplishments;
