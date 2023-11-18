import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.98 6.601A4.183 4.183 0 008 4.474 4.183 4.183 0 00.02 6.6s.082 4.119 8.031 8.262C16 10.72 15.98 6.601 15.98 6.601zM4.3 2.921a.686.686 0 11.001 1.373.686.686 0 010-1.372zM1.964 8.084a.717.717 0 00.69-.909 3.108 3.108 0 01-.12-.807c-.003-.87.449-1.275.486-1.306a.715.715 0 00-.888-1.124c-.051.041-1.093.873-1.03 2.564.014.321.065.674.172 1.058a.716.716 0 00.69.524z"
        fill="#0084F4"
      />
    </Svg>
  );
}

const SvgHeartBlue = React.memo(SvgComponent);
export default SvgHeartBlue;
