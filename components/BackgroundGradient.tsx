import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, SVGProps } from 'react';

import { theme } from '../theme/themes';

interface GradientCircleProps {
  from: string;
  to: string;
}

let gradientID = 0;

const GradientCircle: FC<SVGProps<SVGSVGElement> & GradientCircleProps> = (props) => {
  const {from, to, ...svgProps} = props;
  const id = gradientID++;

  return (
    <SVG viewBox="0 0 500 500" {...svgProps}>
      <linearGradient id={`grad${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color={from} stop-opacity="1" />
        <stop offset="100%" stop-color={to} stop-opacity="1" />
      </linearGradient>

      <filter id={`blur${id}`} width="200%" height="200%" x="-50%" y="-50%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
      </filter>

      <circle cx="250" cy="250" r="100" fill={`url(#grad${id})`}
        filter={`url(#blur${id})`} />
    </SVG>
  );
}

export const BackgroundGradient = () => {
  return (
    <>
      <GradientCircle from={theme.bgCircleOneStart} to={theme.bgCircleOneEnd} width="650px" height="650px"  css={{top: -300, left: -125}}/>

      <GradientCircle from={theme.bgCircleTwoStart} to={theme.bgCircleTwoEnd} width="550px" height="550px" css={{top: -150, left: 25}} />
    </>
  )
}

const Pulse = keyframes`
	0% {
		transform: scale(0.95);
	}

	70% {
		transform: scale(1.05);
	}

	100% {
		transform: scale(0.95);
	}
`;

const SVG = styled.svg`
  position: absolute;
  opacity: 60%;
  z-index: -1;

  animation: ${Pulse} 2s ease-in-out infinite;

  @media (prefers-reduced-motion) {
    animation: none !important;
  }
`;
