import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={243} height={13} viewBox="0 0 243 13" fill="none" {...props}>
      <Rect y={6} width={240} height={1} rx={0.5} fill="#4B66EA" />
      <Path
        d="M242.5 6.5a6 6 0 11-12 0 6 6 0 0112 0z"
        fill="#fff"
        stroke="#4B66EA"
      />
      <Path d="M236.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#4B66EA" />
    </Svg>
  );
}

const SvgMainLine = React.memo(SvgComponent);
export default SvgMainLine;
