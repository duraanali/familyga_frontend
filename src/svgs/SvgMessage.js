import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={22} height={21} viewBox="0 0 22 21" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.938 0H1.812C1.089 0 .5.588.5 1.313V10.5c0 .725.588 1.313 1.313 1.313h2.625v3.937l3.937-3.938h6.563c.724 0 1.312-.587 1.312-1.312V1.312C16.25.589 15.662 0 14.937 0zm3.937 5.25h1.313c.724 0 1.312.588 1.312 1.313v9.187c0 .724-.588 1.313-1.313 1.313h-2.625V21l-3.937-3.938H7.062l2.4-2.625h8.1c.725 0 1.313-.587 1.313-1.312V5.25z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgMessage = React.memo(SvgComponent);
export default SvgMessage;
