import styled from 'styled-components';
import { SectionTitle, SectionImage } from '../GlobalStyles/Section.styled';


import mobileCrewBG from "../../assets/crew/background-crew-mobile.jpg";
import tabletCrewBG from "../../assets/crew/background-crew-tablet.jpg";
import desktopCrewBG from "../../assets/crew/background-crew-desktop.jpg";

export const StyledCrew = styled.section`
  overflow: hidden;
  background-image: url(${mobileCrewBG});
  background-attachment: fixed;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: center center;
    background-image: url(${tabletCrewBG});
    padding-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url(${desktopCrewBG});
  }

  padding-bottom: 2rem;
`;

export const CrewDotIndicators = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1.5rem 0;
  }
`;

export const DotIndicator = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  padding: 0.5em;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.light : theme.colors.light / .25 };
`;

export const CrewDetails = styled.article`
  *:where(:not(:first-child)) {
    margin-top: 1rem;
  }
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export const CrewDetailsHeader = styled.header`
  *:where(:not(:first-child)) {
    margin-top: 0.25rem;
  }
  margin-top: 1rem;
`;

export const CrewRole = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.size.iv};
  font-family: ${({ theme }) => theme.fonts.cond};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.size.iv};
`;

export const CrewName = styled.p`
  font-family: ${({ theme }) => theme.fonts.cond};
  font-size: ${({ theme }) => theme.fonts.size.vii};
`;

export const CrewBio = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.iv};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const CrewMain = styled.main`
  text-align: center;
  padding-inline: 1rem;
  min-height: 100vh;
  display: grid;
  place-items: center;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";
  & > ${SectionTitle} {
    grid-area: title;
  }
  & > ${CrewDotIndicators} {
    grid-area: tabs;
  }
  & > ${CrewDetails} {
    grid-area: content;
  }
  & > ${SectionImage} {
    grid-area: image;
    max-width: 80%;
    border-bottom: 1px solid hsl(var(--clr-white) / 0.1);
    height: 20rem;
    margin-block: 1rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0;
    }
  }
  & > ${SectionImage} img {
    height: 100%;
    width: 100%;
    object-fit: center center;
  }
  & > p {
    max-width: 50ch;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    column-gap: 3rem;
    padding-bottom: 0;
    grid-template-areas:
      "title"
      "content"
      "tabs"
      "image";
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(
        1rem,
        1fr
      );
    justify-items: start;
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". tabs image .";
    & > ${SectionImage} {
      max-width: 100%;
      border-bottom: none;
      height: 100%;
      grid-column: span;
      align-items: end;
      justify-self: end;
      padding-bottom: 0;
    }
  }
`;