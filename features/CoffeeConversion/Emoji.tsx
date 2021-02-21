import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useEffect, useRef, useState } from 'react';

export const inputs = {
  '☕': 10,
  '🍺': 1
};

export const outputs = {
  '💻': 10,
  '⭐': 10,
  '⚡': 10,
  '💡': 10,
  '💾': 10,
  '💩': 1
}

export const EmojiComponent: FC<{component: FC, options: Record<string, number>, interval: number, delay: number}> = (props) => {
  const Emoji = props.component;
  const values = useRef(Object.entries(props.options).reduce((acc, [char, weight]) => [
    ...acc,
    ...Array.from({length: weight}, () => char)
  ], [] as string[]));

  const getNextEmoji = () => values.current[Math.floor(Math.random() * values.current.length)];

  const [emoji, setEmoji] = useState(getNextEmoji());

  useEffect(() => {
    let intervalID: NodeJS.Timeout;

    setTimeout(() => {
      intervalID = setInterval(() => {
        setEmoji(getNextEmoji());
      }, props.interval);
    }, props.delay);

    return () => clearInterval(intervalID);
  }, []);

  return <Emoji>{emoji}</Emoji>;
}

const falling = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  75%, 100% {
    opacity: 0;
    transform: translate(-50%, 500px);
  }
`;

const Emoji = styled.span`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  font-size: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${falling} 3000ms linear infinite;
`;

export const EmojiIn = styled(Emoji)`
  top: -400px;
`;

export const EmojiOut = styled(Emoji)`
  animation-delay: 1250ms;
  top: 0px;
`;
