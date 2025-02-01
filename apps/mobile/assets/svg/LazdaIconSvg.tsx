import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const LazdaIconSvg = (props: SvgProps) => (
  <Svg
    width={19}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M9.682 14.84a.735.735 0 0 1-.365-.095c-.955-.553-8.024-4.985-8.291-5.12a.64.64 0 0 1-.366-.513V2.895a.673.673 0 0 1 .304-.577l.05-.03C1.7 1.864 3.988.467 4.35.266a.549.549 0 0 1 .274-.077c.091 0 .18.023.26.066 0 0 3.204 2.088 3.694 2.274.344.158.719.237 1.097.23.429.01.852-.094 1.229-.3.479-.251 3.54-2.193 3.573-2.193a.484.484 0 0 1 .256-.07c.096 0 .191.027.274.077.417.23 3.255 1.968 3.376 2.045a.658.658 0 0 1 .318.57v6.217a.633.633 0 0 1-.366.512c-.267.146-7.314 4.579-8.287 5.12a.73.73 0 0 1-.366.103Z"
    />
    <Path
      fill="url(#b)"
      d="M9.648 14.839h.037a.734.734 0 0 0 .365-.095c.955-.553 8.021-4.985 8.288-5.12a.632.632 0 0 0 .365-.513V2.894a.665.665 0 0 0-.069-.303L9.648 7.524v7.315Z"
    />
    <Path
      fill="url(#c)"
      d="M9.615 14.75h-.037a.726.726 0 0 1-.361-.094c-.945-.546-7.935-4.932-8.2-5.065a.626.626 0 0 1-.361-.507V2.933a.658.658 0 0 1 .068-.3l8.89 4.88v7.237Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.649}
        x2={18.524}
        y1={0.323}
        y2={0.184}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFB900" />
        <Stop offset={0.338} stopColor="#F38000" />
        <Stop offset={0.567} stopColor="#F83C72" />
        <Stop offset={0.78} stopColor="#FC1CBE" />
        <Stop offset={0.93} stopColor="#FE08ED" />
        <Stop offset={1} stopColor="#F0F" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={5.673}
        x2={23.898}
        y1={13.31}
        y2={3.219}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EE0A3F" />
        <Stop offset={1} stopColor="#EE0A3F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={7.444}
        x2={-1.362}
        y1={10.68}
        y2={3.585}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#ED6600" />
        <Stop offset={1} stopColor="#F98200" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LazdaIconSvg;
