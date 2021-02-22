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
    <SVG width="500" height="500" {...svgProps}>
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

      <GradientCircle from={theme.bgCircleOneStart} to={theme.bgCircleOneEnd} />

      <GradientCircle from={theme.bgCircleTwoStart} to={theme.bgCircleTwoEnd} css={{top: '75px', left: '75px'}} />
    </>
  )
}

const SVG = styled.svg`
  position: absolute;
  opacity: 60%;
`;
