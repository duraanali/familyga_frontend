import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const { width, height } = props;
  return (
    <Svg
      width={width ? width : 22}
      height={height ? height : 20}
      viewBox="0 0 22 20"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.74 2.748C16.668.976 13.922 0 11 0 8.079 0 5.333.976 3.26 2.748 1.158 4.545 0 6.94 0 9.5c0 2.018.753 3.996 2.128 5.618-.27.514-.64.923-1.11 1.222-.387.246-.572.69-.468 1.13.1.435.46.752.91.813.93.128 2.742.19 4.423-.791a.782.782 0 00.28-1.086.825.825 0 00-1.114-.272 4.886 4.886 0 01-2.092.624c.37-.43.663-.936.88-1.508a.782.782 0 00-.163-.813C2.331 13.02 1.623 11.31 1.623 9.5c0-4.365 4.206-7.917 9.377-7.917s9.377 3.552 9.377 7.917-4.206 7.917-9.377 7.917c-.748 0-1.497-.074-2.218-.224a.809.809 0 00-.96.611.79.79 0 00.627.937c.833.171 1.69.259 2.556.259 2.916 0 5.666-.976 7.74-2.748C20.841 14.454 22 12.06 22 9.5s-1.159-4.955-3.26-6.752z"
        fill="#4B66EA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10a1 1 0 11-2 0 1 1 0 012 0zM15 10a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 11-2 0 1 1 0 012 0z"
        fill="#4B66EA"
      />
    </Svg>
  );
}

const SvgSpeechBubble = React.memo(SvgComponent);
export default SvgSpeechBubble;
