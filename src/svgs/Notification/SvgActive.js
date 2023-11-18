import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={4} height={6} viewBox="0 0 4 6" fill="none" {...props}>
      <Path d="M0 0h1a3 3 0 010 6H0V0z" fill="#F23A56" />
    </Svg>
  );
}

const SvgActive = React.memo(SvgComponent);
export default SvgActive;
