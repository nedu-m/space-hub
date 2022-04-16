import styled from 'styled-components';

export const StyledBackgroundImage = styled.img`
  background-image: url("./background-home-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  border: none;

  @media (max-width: 768px) {
    background-image: url("./background-home-tablet.jpg");
  }

  @media (max-width: 320px) {
    background-image: url("./background-home-mobile.jpg");
  }

`;