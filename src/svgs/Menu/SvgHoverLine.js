import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '@utils/colors';

function SvgComponent(props) {
  const { tabActive, tabChose } = props;
  return (
    <Svg width={6} height={40} viewBox="0 0 6 40" fill="none" {...props}>
      <Path
        d="M6 6a6 6 0 00-6-6v40a6 6 0 006-6V6z"
        fill={tabChose === tabActive ? colors.classicBlue : colors.white}
      />
    </Svg>
  );
}

const SvgHoverLine = React.memo(SvgComponent);
export default SvgHoverLine;
