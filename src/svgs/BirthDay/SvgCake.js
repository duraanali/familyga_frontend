import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 3c0-.828-1.5-3-1.5-3s-1.5 2.172-1.5 3a1.5 1.5 0 003 0zm-2.25 4.5h-6A2.25 2.25 0 003 9.75V12h18V9.75a2.25 2.25 0 00-2.25-2.25h-6V6h-1.5v1.5zM24 15a1.5 1.5 0 00-1.5-1.5h-21A1.5 1.5 0 000 15v1.5a3 3 0 106 0 3 3 0 106 0 3 3 0 106 0 3 3 0 106 0V15zM3 21a4.48 4.48 0 003-1.15A4.48 4.48 0 009 21a4.48 4.48 0 003-1.15A4.48 4.48 0 0015 21a4.48 4.48 0 003-1.15A4.48 4.48 0 0021 21a4.471 4.471 0 003-1.17v2.67a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-2.67A4.464 4.464 0 003 21z"
        fill="#0084F4"
      />
    </Svg>
  );
}

const SvgCake = React.memo(SvgComponent);
export default SvgCake;
