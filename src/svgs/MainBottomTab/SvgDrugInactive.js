import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={27} height={28} viewBox="0 0 27 28" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.017 5.515c-2.519 2.519-2.548 6.648-.029 9.167l7.833 7.832c2.519 2.52 6.648 2.49 9.167-.028 2.52-2.52 2.549-6.649.03-9.168l-7.834-7.833c-2.52-2.518-6.647-2.49-9.167.03zm1.476 7.99c-2.076-2.076-1.639-4.312-1.12-5.203a.927.927 0 011.265-.334.912.912 0 01.353 1.237c-.082.151-.687 1.428.843 2.958l2.448 2.448c.36.36.342.962-.018 1.323-.36.36-.963.379-1.324.018l-2.447-2.447zm14.19 7.675a4.612 4.612 0 00-.008-6.52l-2.745-2.747a1.322 1.322 0 00-1.87 0l-4.644 4.645a1.322 1.322 0 000 1.87l2.746 2.745a4.614 4.614 0 006.52.007z"
        fill={props.color}
      />
    </Svg>
  );
}

const SvgDrugInactive = React.memo(SvgComponent);
export default SvgDrugInactive;
