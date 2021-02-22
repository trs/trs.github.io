import styled from '@emotion/styled';

import { DarkModeBackground } from '~/components/DarkModeBackground';
import { BackgroundGradient } from '~/components/BackgroundGradient';
import {HeaderComponent} from '~/components/Header';

import { theme } from '~/theme/themes';

const IndexPage = () => {

  return (
    <Container>
      <DarkModeBackground />
      <WrappedHeaderComponent />

      <Content>
        <BackgroundGradient />
        <Title>I code stuff</Title>
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

  width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${theme.fontPrimary};
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 4rem;
  padding: 1rem 4rem;
  text-shadow: 0 0 6px ${theme.bgPrimary};
  transition: all var(--transitionTiming);
`;

export default IndexPage;
