import styled from 'styled-components';
import mobileDestinationBG from '../../assets/destination/background-destination-mobile.jpg';
import tabletDestinationBG from '../../assets/destination/background-destination-tablet.jpg';
import desktopDestinationBG from '../../assets/destination/background-destination-desktop.jpg';

import { SectionImage, SectionTitle } from '../../styles/GlobalStyles/Section.styled';

export const StyledDestination = styled.section`
  overflow: hidden;
  background-image: url(${mobileDestinationBG});
  background-attachment: fixed;

  @media (min-width: 768px) {
    background-position: center center;
    background-image: url(${tabletDestinationBG});
  }

  @media (min-width: 1024px) {
    background-image: url(${desktopDestinationBG});
  }
`;

export const DestinationTabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > * {
    border: 0;
    border-bottom: 0.15rem solid #fff / 0;
    background-color: transparent;
    padding: var(--underline-gap, 0.5rem) 0;
    cursor: pointer;
  }

  & > *:hover {
    border-color: #fff / 0.5;
  }
`;

export const DestinationTab = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.cond};
  letter-spacing: 2.7px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.light / 1 : "none")};
  border-bottom: ${({ isActive, theme }) => (isActive ? theme.fonts.light / 1 : "none")};
`;

export const DestinationDetails = styled.article`
  display: ${({ isActive}) => (isActive ? "block" : "none")};
`;

export const DestinationName = styled.h2`
  font-size: ${({ theme }) => theme.fonts.viii};
  font-family: ${({ theme }) => theme.fonts.bell};
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
`;

export const DestinationDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.iii};
`;

export const DestinationMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 175rem;
  border-top: 1px solid ${({ theme }) => theme.colors.light} / 0.1;
  padding-top: 2.5rem;
  margin-top: 2.5rem;
  padding-bottom: 2.75rem;

  & p {
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    gap: min(6vw, 9rem);
    justify-content: start;
  }
`;

export const DestinationContentContainer = styled.div``;

export const DestinationMetaTitle = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.ii};
  text-transform: uppercase;
`;

export const DestinationMetaSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.cond};
  text-transform: uppercase;
`;

export const DestinationMain = styled.main`
  --flow-space: 2rem;
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  min-height: 100vh;
  grid-template-areas: 
  "title"
  "image"
  "tabs"
  "content";

  & > p {
    max-width: 50ch;
  }

  & > ${SectionImage} {
    grid-area: image;
    max-width: 60%;
    align-self: start;
  }

  & > ${DestinationTabContainer} {
    grid-area: tabs;
  }

  & > ${SectionTitle} {
    grid-area: title;
  }

  & > ${DestinationDetails} {
    grid-area: content;
  }

  & > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  @media (min-width: 1024px) {
    text-align: left;
    column-gap: 2rem;
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
      1rem, 1fr
    );
    justify-items: start;
    align-content: start;
    grid-template-areas: 
    ". title title ."
    ". image image ."
    ". tabs tabs .";
    padding-bottom: 2.75rem;

    & > ${SectionImage} {
      max-width: 90%;
    }
  }
`;