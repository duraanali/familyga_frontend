import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14.262 9.76S15.24 4 11.246 1.5a7.048 7.048 0 01-2.66 5.102c-1.706 1.5-4.915 4.873-4.88 8.47A8.25 8.25 0 008.234 22.5a5.229 5.229 0 011.83-3.616 4.27 4.27 0 001.635-2.868 7.686 7.686 0 014.068 6.407v.017a7.721 7.721 0 004.5-6.702c.283-3.378-1.567-7.972-3.21-9.474a8.915 8.915 0 01-2.796 3.496z"
        fill="#0084F4"
      />
    </Svg>
  );
}

const SvgFire = React.memo(SvgComponent);
export default SvgFire;
