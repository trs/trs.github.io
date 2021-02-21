import styled from '@emotion/styled';

import { Background } from '~/components/DarkModeBackground';
import {HeaderComponent} from '~/components/Header';
import {CoffeeConversionComponent} from '~/features/CoffeeConversion';

import { theme } from '~/theme/themes';

const IndexPage = () => {

  return (
    <Container>
      <Background />
      <HeaderComponent />

      <CoffeeConversionComponent>
        <Content>

          <Paragraph style={{alignSelf: 'flex-start'}}>Hey, I'm</Paragraph>
          <Title>Tyler Stewart</Title>

          <Paragraph style={{alignSelf: 'flex-end'}}>I write code.</Paragraph>
        </Content>

      </CoffeeConversionComponent>
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

const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  color: ${theme.fontPrimary};
  font-family: Inter, Arial, Helvetica, sans-serif;
`;

const Title = styled.h1`
  color: ${theme.fontPrimary};
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding: 1rem 4rem;
`;

const Paragraph = styled.p`
  padding: 0 4rem;
`;

export default IndexPage;
