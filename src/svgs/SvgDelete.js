import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.053 20.335l-8.571-8.357 8.571-8.356a1.802 1.802 0 000-2.603 1.915 1.915 0 00-2.67 0l-8.57 8.357L3.242 1.02a1.915 1.915 0 00-2.67 0 1.826 1.826 0 00-.559 1.295c0 .463.182.94.559 1.294l8.571 8.357-8.571 8.357a1.826 1.826 0 00-.559 1.294c0 .477.182.941.559 1.295.74.723 1.929.723 2.67 0l8.57-8.33 8.571 8.357c.741.722 1.93.722 2.67 0a1.802 1.802 0 000-2.603z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgDelete = React.memo(SvgComponent);
export default SvgDelete;
