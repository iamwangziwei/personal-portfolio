import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import { GridContainer, BlogCard, Img } from "../Projects/ProjectsStyles";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SectionDivider></SectionDivider>
      <br></br>
      <br></br>
      <br></br>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Each line of code is a brick and I am the architect. My passion for
        software development has driven me to keep learning and building cool
        stuff.
        <br></br>
        Apart from programming, I also enjoy traveling and gamming. Can't wait
        for God of War Ⅴ :D
      </SectionText>
      {/* <GridContainer>
        <BlogCard>
          <Img src="/images/5.jpeg"></Img>
        </BlogCard>
        <BlogCard>
          <Img src="/images/6.jpeg"></Img>
        </BlogCard>
      </GridContainer> */}
    </Section>
  );
};

export default Timeline;
