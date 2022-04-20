import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cond};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme}) => theme.colors.black};
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.light} / 0.01;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms linear, transform 500ms ease-in-out;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.95em;
  }
`;