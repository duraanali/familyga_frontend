import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.052 1.673c0 .279.227.506.506.506h6.715c.395 0 .715.32.715.714v9.768a.506.506 0 001.012 0V2.893c0-.953-.773-1.726-1.727-1.726H5.558a.506.506 0 00-.506.506zM2.8 14.903l3.98-2.842 3.978 2.842c.335.24.8 0 .8-.411V5.335c0-.954-.773-1.727-1.727-1.727H3.727C2.773 3.608 2 4.381 2 5.335v9.157c0 .411.465.65.8.411z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgBookMark = React.memo(SvgComponent);
export default SvgBookMark;
