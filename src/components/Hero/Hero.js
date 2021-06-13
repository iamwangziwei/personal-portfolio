import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br></br>My Personal Porfolio
      </SectionTitle>
      <SectionText>hire me plz</SectionText>
      <Button>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
