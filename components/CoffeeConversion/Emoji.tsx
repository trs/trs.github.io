import { FC, useRef, useState } from 'react';
import { keyframes } from '@emotion/react';
import { Keyframes } from '@emotion/serialize';
import styled from '@emotion/styled';

import { useRandomInterval, random } from '~/hooks/useRandomInterval';
import { usePrefersReducedMotion } from '~/hooks/usePrefersReducedMotion';

type EmojiOptions = Record<string, number>;

const inputs: EmojiOptions = {
  '☕': 50,
  '🍺': 1
};

const outputs: EmojiOptions = {
  '💻': 10,
  '⭐': 10,
  '⚡': 10,
  '💡': 10,
  '💾': 10,
  '💩': 1
}

let emojiID = 0;

const useEmojis = (interval: number) => {
  type EmojiValue = {
    id: number;
    input: string;
    output: string;
    pos: number;
    createdAt: number;
  }

  const valuesBuilder = (options: EmojiOptions) => Object.entries(options).reduce((acc, [char, weight]) => [
    ...acc,
    ...Array.from({length: weight}, () => char)
  ], [] as string[]);

  const inputValues = useRef(valuesBuilder(inputs));
  const outputValues = useRef(valuesBuilder(outputs));

  const createEmoji = (): EmojiValue => {
    const input = inputValues.current[Math.floor(Math.random() * inputValues.current.length)];
    const output = outputValues.current[Math.floor(Math.random() * outputValues.current.length)];
    const pos = random(30, 70);
    const createdAt = Date.now();

    return {
      id: emojiID++,
      input,
      output,
      pos,
      createdAt
    }
  };

  const [emojis, setEmojis] = useState<EmojiValue[]>([]);

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const now = Date.now();
      const emoji = createEmoji();

      const nextEmojis = emojis.filter(({createdAt}) => {
        const delta = now - createdAt;
        return delta < interval;
      });

      nextEmojis.push(emoji);

      setEmojis(nextEmojis);
    },
    prefersReducedMotion ? null : interval,
    prefersReducedMotion ? null : interval
  );

  return emojis;
}

export interface EmojiComponentProps {
  interval: number;
}

export const EmojiComponent: FC<EmojiComponentProps> = ({interval}) => {
  const emojis = useEmojis(interval);

  return (
    <div>
      {emojis.map(({id, input, output, pos}) =>
         <EmojiContainer key={id} interval={interval} pos={pos}>
          <Emoji frames={fadingIn} interval={interval}>{input}</Emoji>
          <Emoji frames={fadingOut} interval={interval}>{output}</Emoji>
        </EmojiContainer>
      )}
    </div>
  );
}

const falling = keyframes`
  0% {
    transform: translate(-50%, calc(-50% + -30vh));
  }
  90%, 100% {
    transform: translate(-50%, calc(-50% + 30vh));
  }
`;

const fadingIn = keyframes`
  0%, 10% {
    opacity: 0;
  }
  25%, 35% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

const fadingOut = keyframes`
  0%, 50% {
    opacity: 0;
  }
  65%, 75% {
    opacity: 1;
  }
  90%, 100% {
    opacity: 0;
  }
`

const EmojiContainer = styled.div<{interval: number, pos: number}>`
  position: absolute;
  z-index: -1;
  left: ${props => props.pos}%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-content: center;
  animation: ${falling} ${props => props.interval}ms linear infinite;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const Emoji = styled.i<{frames: Keyframes, interval: number}>`
  position: absolute;
  text-decoration: none;
  font-style: normal;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  font-size: clamp(2rem, 0.8750rem + 5.0000vw, 3.5rem);
  animation: ${props => props.frames} ${props => props.interval}ms linear infinite;
  transform: translateY(-100%);

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;
