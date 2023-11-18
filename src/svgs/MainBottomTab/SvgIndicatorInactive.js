import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8.78 19.11c-.42 0-.785-.186-.87-.599l-1.18-5.65-.778 1.342c-.16.271-.451.463-.765.463H.889a.89.89 0 010-1.778h3.79l1.69-2.855a.889.889 0 011.635.271l.714 3.452 1.63-9.039A.877.877 0 0111.222 4h.004c.431 0 .8.3.872.724l1.739 10.146.56-1.417a.89.89 0 01.826-.566h7.887a.89.89 0 010 1.779h-7.284l-1.505 3.802a.887.887 0 01-1.702-.178L11.202 10l-1.547 8.486c-.076.42-.438.623-.863.623-.004.002-.008.002-.012.002z"
        fill={props.color}
      />
    </Svg>
  );
}

const SvgIndicatorInactive = React.memo(SvgComponent);
export default SvgIndicatorInactive;
