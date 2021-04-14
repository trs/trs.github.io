import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useEffect, useRef, useState } from 'react';

export const inputs = {
  '☕': 10,
  '🍺': 1
};

export const outputs = {
  '💻': 9,
  '⭐': 8,
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
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 40vh);
  }
`;

const Emoji = styled.span`
  z-index: -1;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  user-select: none;
  font-size: clamp(2rem, 0.8750rem + 5.0000vw, 3.5rem);
  left: 50%;
  transform: translateX(-50%);
  animation: ${falling} 3000ms linear infinite;
`;

export const EmojiIn = styled(Emoji)`
  top: -30vh;
`;

export const EmojiOut = styled(Emoji)`
  animation-delay: 1500ms;
  top: -5vh;
`;
