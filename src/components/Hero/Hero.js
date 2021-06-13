import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const handler = () => {};
const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Ziwei
        <br></br>Welcome to My Personal Porfolio
      </SectionTitle>
      <SectionText>
        I am a Computer Science student at York University <br></br>who has a
        passion for coding!
        <br></br>
        I'm available for an internship of 4/8/12/16 months starting Sep. 2021
      </SectionText>
      <Button>
        <div>
          <Link href="#projects">Learn more</Link>
        </div>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
