import styled from '@emotion/styled';

import { DarkModeBackground } from '~/components/DarkModeBackground';
import { BubbleLeft, BubbleRight } from '~/components/BackgroundGradient';
import {HeaderComponent} from '~/components/Header';

import { CoffeeConversionComponent } from '~/features/CoffeeConversion';

import { theme } from '~/theme/themes';

const IndexPage = () => {
  return (
    <Container>
      <DarkModeBackground />
      <WrappedHeaderComponent />

      <Content>
        <BubbleLeft from={theme.bgCircleOneStart} to={theme.bgCircleOneEnd} />
        <BubbleRight from={theme.bgCircleTwoStart} to={theme.bgCircleTwoEnd} />

        <CoffeeConversionComponent>
          <Title>Software Developer</Title>
        </CoffeeConversionComponent>
      </Content>

    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const WrappedHeaderComponent = styled(HeaderComponent)`
  position: absolute;
  top: 0;
`;

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: none !important;
`;

const Title = styled.h1`
  color: ${theme.fontPrimary};
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: clamp(1.25rem, -0.8125rem + 9.1667vw, 4rem);
  padding: 1rem 2rem;
  text-shadow: 0 0 6px ${theme.bgPrimary};
  transition: all var(--transitionTiming);

  white-space: nowrap;
`;


export default IndexPage;
