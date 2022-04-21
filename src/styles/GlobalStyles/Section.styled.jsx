import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.cond};
  font-size: ${({ theme }) => theme.fonts.v};
  text-transform: uppercase;
  letter-spacing: 4.75px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 2rem;
    justify-content: start;
  }
`;

export const SectionTitleNum = styled.span`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bell};
  font-weight: 700;
  margin-right: 0.5rem;
`;

export const SectionImage = styled.picture`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export const SectionImageSource = styled.source``;

export const SectionImg = styled.img``;