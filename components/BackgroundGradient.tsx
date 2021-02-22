import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, SVGProps } from 'react';

interface GradientCircleProps {
  from: string;
  to: string;
}

let gradientID = 0;

const GradientCircle: FC<SVGProps<SVGSVGElement> & GradientCircleProps> = (props) => {
  const {from, to, ...svgProps} = props;
  const id = gradientID++;

  return (
    <Bubble viewBox="0 0 300 300" {...svgProps}>
      <linearGradient id={`grad${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={from} stopOpacity="0.8" />
        <stop offset="100%" stopColor={to} stopOpacity="0.6" />
      </linearGradient>

      <filter id={`blur${id}`} width="200%" height="200%" x="-50%" y="-50%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
      </filter>

      <circle cx="150" cy="150" r="50" fill={`url(#grad${id})`}
        filter={`url(#blur${id})`} />
    </Bubble>
  );
}

const Pulse = (size: string) => keyframes`
	0% {
		width: calc(${size} * 0.90);
		height: calc(${size} * 0.90);
	}

	70% {
		width: calc(${size} * 1.1);
		height: calc(${size} * 1.1);
	}

	100% {
		width: calc(${size} * 0.90);
		height: calc(${size} * 0.90);
	}
`;

const Bubble = styled.svg`
  position: absolute;
  opacity: 60%;
  z-index: -2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @media (prefers-reduced-motion) {
    animation: none !important;
  }
`;

export const BubbleLeft = styled(GradientCircle)`
  transform: translate(-60%, -55%);
  animation-name: ${Pulse('clamp(30rem, 15rem + 50vw, 70rem)')};
`;

export const BubbleRight = styled(GradientCircle)`
  transform: translate(-40%, -45%);
  animation-name: ${Pulse('clamp(20rem, 15rem + 50vw, 60rem)')};
`;
