import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1zm1 4a1 1 0 100 2h10a1 1 0 100-2H1z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgMenu = React.memo(SvgComponent);
export default SvgMenu;
