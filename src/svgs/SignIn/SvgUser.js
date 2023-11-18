import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm4.465 12.936c-.442-1.315-1.666-2.27-3.132-2.27H6.667c-1.466 0-2.688.955-3.131 2.27A6.644 6.644 0 011.333 8 6.674 6.674 0 018 1.333 6.674 6.674 0 0114.667 8a6.644 6.644 0 01-2.202 4.936zM5.333 6a2.667 2.667 0 015.334 0v.667a2.667 2.667 0 01-5.334 0V6z"
        fill="#6D5F6F"
      />
    </Svg>
  );
}

const SvgUser = React.memo(SvgComponent);
export default SvgUser;
