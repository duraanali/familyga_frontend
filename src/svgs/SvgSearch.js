import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.744 12.487A5.744 5.744 0 116.744 1a5.744 5.744 0 010 11.487zm0-1.436a4.308 4.308 0 100-8.615 4.308 4.308 0 000 8.615zm8.046 3.739a.718.718 0 000-1.016l-2.513-2.512a.718.718 0 10-1.015 1.015l2.512 2.513c.28.28.735.28 1.016 0z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgSearch = React.memo(SvgComponent);
export default SvgSearch;
