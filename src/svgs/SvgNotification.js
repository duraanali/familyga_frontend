import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.25 10.15c0 .58.47 1.05 1.05 1.05a.7.7 0 110 1.4H1.7a.7.7 0 110-1.4c.58 0 1.05-.47 1.05-1.05V6.747A5.57 5.57 0 017.3 1.1V.7a.7.7 0 111.4 0v.401a5.57 5.57 0 014.55 5.646v3.403zm-7.237 3.628a.2.2 0 01.198-.178H9.79c.102 0 .188.076.198.178a2 2 0 11-3.974 0z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgNotification = React.memo(SvgComponent);
export default SvgNotification;
