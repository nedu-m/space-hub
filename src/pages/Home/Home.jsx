import React from 'react';
import { StyledButton } from '../../components/Button/Button.styled';
import {
  HomeDiv,
  HomeTitle,
  HomeBigText,
  HomeSubtitle,
  HomeContainer,
  StyledHome,
  HomeCTA
} from '../../styles/HomeStyle/Home.styled';


const Home = () => {
  return (
    <StyledHome>
      <HomeContainer>
        <HomeDiv>
          <HomeTitle>
            SO,YOU WANT TO TRAVEL TO
            <HomeBigText> SPACE </HomeBigText>
          </HomeTitle>
          <HomeSubtitle>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </HomeSubtitle>
        </HomeDiv>
        <HomeCTA>
          <StyledButton to="/destination">Explore</StyledButton>
        </HomeCTA>
      </HomeContainer>
    </StyledHome>
  );
};

export default Home;