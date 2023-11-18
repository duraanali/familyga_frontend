import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.04 5.96a1 1 0 00-1.414 0L16 14.586 7.374 5.96A1 1 0 005.96 7.374L14.586 16 5.96 24.626a1 1 0 101.414 1.415L16 17.413l8.626 8.627a1 1 0 001.415-1.415L17.413 16l8.627-8.626a1 1 0 000-1.414z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgClose = React.memo(SvgComponent);
export default SvgClose;
