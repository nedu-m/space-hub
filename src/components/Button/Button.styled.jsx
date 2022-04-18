import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  text-decoration: none;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.cond};
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${props => props.theme.colors.white};
    border-radius: 50%;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.95em;
  }
`;