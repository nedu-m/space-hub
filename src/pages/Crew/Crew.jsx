import React, { useState } from 'react';
import {
  SectionImage,
  SectionImageSource,
  SectionImg,
  SectionTitle,
  SectionTitleNum,
} from '../../styles/GlobalStyles/Section.styled';

import {
  CrewDetails,
  CrewDetailsHeader,
  CrewDotIndicators,
  CrewMain,
  CrewName,
  CrewRole,
  CrewBio,
  DotIndicator,
  StyledCrew,
} from '../../styles/CrewStyle/Crew.styled';

import { crewData } from './data';


const Crew = () => {
  const [dot, setCrew] = useState(0);

  const dotHandler = (index) => {
    setCrew(index);
  };

  return (
    <StyledCrew>
      <CrewMain>
    <SectionTitle>
      <SectionTitleNum>02</SectionTitleNum>
      Meet your crew
    </SectionTitle>

    <CrewDotIndicators>
      {crewData.map((crew, index) => {
        return (
          <DotIndicator
            isActive={dot === index ? true : false}
            key={crew.id}
            onClick={() => dotHandler(index)}
          ></DotIndicator>
        )
      })}
      </CrewDotIndicators>

        {crewData.map((crew, index) => {
          return (
            <CrewDetails isActive={dot === index ? true : false} key={crew.id}>
              <CrewDetailsHeader>
                <CrewRole>{crew.role}</CrewRole>
                <CrewName>{crew.name}</CrewName>
              </CrewDetailsHeader>
              <CrewBio>{crew.bio}</CrewBio>
            </CrewDetails>
          )
        })}

        {crewData.map((crew, index) => {
          return (
            <SectionImage
              isActive={dot === index ? true : false}
              key={crew.id}
            >
              <SectionImageSource src={crew.images.webp} type="image/webp" />
              <SectionImg src={crew.images.png} alt={crew.name} />
            </SectionImage>
          );
        })}
  </CrewMain>
    </StyledCrew>
  );
};

export default Crew;