import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowRightSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M6.998 21.015c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41l-8.31-8.31a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0 0 1.77l7.24 7.25-7.25 7.25c-.48.48-.48 1.28.01 1.76Z"
    />
  </Svg>
);

export default ArrowRightSvg;
