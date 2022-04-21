import styled from 'styled-components';
import BgMobile from '../../assets/home/bmobile.jpg';
import BgTablet from '../../assets/home/btablet.jpg';
import BgDesktop from '../../assets/home/bdesktop.jpg';


export const StyledHome = styled.section`
  background-image: url(${BgMobile});
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    background-image: url(${BgTablet});
    background-position: center center;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    background-image: url(${BgDesktop});
  }
`;

export const HomeContainer = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  min-height: 100vh;

  & > p {
    max-width: 50ch;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: minmax(1rem, 1fr) 
      repeat(2, minmax(0, 30rem))
      minmax(1rem, 1fr);
    column-gap: var(--container-gap, 2rem);
    text-align: center;
    padding-bottom: max(6rem, 20vh);
    align-items: end;

    & > *:first-child {
      grid-column: 2;
  }

    & > *:last-child {
      grid-column: 3;
    }
  }
`;

export const HomeTitle = styled.h1`
  font-size: var(--fs-500);
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.cond};
  color: ${props => props.theme.colors.white};
  letter-spacing: 4.75px;
`;

export const HomeBigText = styled.span`
  display: block;
  font-size: ${props => props.theme.fonts.size.xi};
  font-family: ${props => props.theme.fonts.bell};
  color: ${props => props.theme.colors.light};
`;

export const HomeDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 30%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tb}) {
    padding-top: 20%;
    padding-bottom: 5%;
  }
`;

export const HomeSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.cond};
  color: ${props => props.theme.colors.light};
  letter-spacing: 1.1px;
  text-align: center;

  @media (width: ${({ theme }) => theme.breakpoints.tb}) {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
`;

export const HomeCTA = styled.div``;




