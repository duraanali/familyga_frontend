import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const { width, height } = props;
  return (
    <Svg
      width={width ? width : 18}
      height={height ? height : 24}
      viewBox="0 0 18 24"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.512.457a1.093 1.093 0 011.78 0C12.49 3.527 18 11.6 18 15.401a8.6 8.6 0 01-17.198 0C.802 11.6 6.313 3.526 8.512.457zm3.909 19.812a1.19 1.19 0 001.682.144c3.39-2.856 2.22-7.073 2.169-7.252a1.193 1.193 0 00-2.296.657c.037.137.77 2.931-1.413 4.768a1.194 1.194 0 00-.142 1.683zm-1.078 1.103a1.268 1.268 0 11-2.538 0 1.268 1.268 0 012.538 0z"
        fill="#F23A56"
      />
    </Svg>
  );
}

const SvgBlood = React.memo(SvgComponent);
export default SvgBlood;
