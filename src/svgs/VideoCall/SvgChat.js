import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.938 3H2.812C2.088 3 1.5 3.588 1.5 4.313V13.5c0 .725.588 1.313 1.313 1.313h2.624v3.937l3.938-3.938h6.563c.724 0 1.312-.587 1.312-1.312V4.312c0-.724-.588-1.312-1.313-1.312zm3.937 5.25h1.313c.724 0 1.312.588 1.312 1.313v9.187c0 .724-.588 1.313-1.313 1.313h-2.625V24l-3.937-3.938H8.062l2.4-2.625h8.1c.725 0 1.313-.588 1.313-1.312V8.25z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgChat = React.memo(SvgComponent);
export default SvgChat;
