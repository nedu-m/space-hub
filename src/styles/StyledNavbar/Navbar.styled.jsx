import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import menuBtn from '../../assets/shared/icon-hamburger.svg';
import closeBtn from '../../assets/shared/icon-close.svg';

export const StyledNavbar = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::after {
      content: '';
      position: relative;
      display: block;
      width: 100%;
      height: 0.0625rem;
      margin-right: -2.5rem;
      background: ${({ theme }) => theme.colors.white} / 0.35;
      order: 1;
    }
  }
`;

export const Logo = styled.img`
  margin: 2.25rem clamp(1.5rem, 5vw, 3.5rem);
`;

export const Navigation = styled.nav`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

export const NavigationLists = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.white} / 0.05;
  backdrop-filter: blur(1.25rem);


  & > * {
    border: 0;
    background-color: transparent;
    padding: var(--underline-gap, 0.5rem) 0;
    border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white} / 0;
  }

  & > *:hover {
    border-color: ${({ theme }) => theme.colors.white} / 0.5;
  }

  @supports (backdrop-filter: blur(1.25rem)) {
    background: ${({ theme }) => theme.colors.white} / 0.05;
    backdrop-filter: blur(1.25rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2em;
    position: fixed;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: min(20rem, 20vh) 2rem;
    background: ${({ theme }) => theme.colors.white} / 0.05;
    backdrop-filter: blur(1.25rem);
    transform: translate(${(props) => (props.toggleMenu ? '0' : '100%')});
    transition: transform 0.36s ease-in-out;

    & > * {
      border: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: clamp(1.5rem, 5vw, 2.5rem);
    --underline-gap: 1.75rem;
    padding-inline: clamp(3rem, 7vw, 10rem);
  }
`;


export const NavigationList = styled.li``;

export const NavigationNum = styled.span`
  font-weight: 700;
  margin-right: 0.5em;

  @media (min-width: 35em) and (max-width: 44.999em) {
    display: none;
  }

  @media (min-width: 35em) and (max-width: 55em) {
    display: none;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cond};
  padding: var(--underline-gap, 0.5rem) 0;


  &.active {
    color: ${({ theme }) => theme.colors.white} / 1;
    border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white} / 1;
  }
`;

export const MenuBtn = styled.button`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    right: 2rem;
    top: 3rem;
    background: transparent;
    border: 0;
    z-index: 2000;
    background-image: ${({ toggleMenu }) =>
      toggleMenu ? `url(${closeBtn})` : `url(${menuBtn})`};
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
    cursor: pointer;
  }
`;

