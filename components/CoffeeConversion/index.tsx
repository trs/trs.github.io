import styled from '@emotion/styled';

import { EmojiComponent } from './Emoji';

export const CoffeeConversionComponent: React.FC = ({children}) => {
  return (
    <Container>
      <EmojiComponent interval={3000} />
      <Content>
        {children}
      </Content>
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
