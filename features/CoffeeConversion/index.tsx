import styled from '@emotion/styled';

import { EmojiIn, EmojiOut, EmojiComponent, inputs, outputs } from './Emoji';

export const CoffeeConversionComponent: React.FC = ({children}) => {
  return (
    <Container>
      <EmojiComponent component={EmojiIn} options={inputs} interval={3000} delay={0} />

      <Content>
        {children}
      </Content>

      <EmojiComponent component={EmojiOut} options={outputs} interval={3000} delay={1000} />
    </Container>
  )
}


const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
`;
