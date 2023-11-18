import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5.237C1 4.013 2.925 2 2.925 2S4.85 4.013 4.85 5.237C4.938 6.55 3.888 7.25 2.925 7.25 1.963 7.25 1 6.55 1 5.237zm3.5 5.688C4.5 8.912 8 5.5 8 5.5s3.5 3.412 3.5 5.425c0 2.1-1.838 3.325-3.5 3.325s-3.5-1.225-3.5-3.325zM13.075 2S15 4.013 15 5.237a1.958 1.958 0 01-1.925 2.013c-.875 0-1.925-.7-1.925-2.013C11.15 4.013 13.075 2 13.075 2z"
        fill="#F23A56"
      />
    </Svg>
  );
}

const SvgMultiBlood = React.memo(SvgComponent);
export default SvgMultiBlood;
