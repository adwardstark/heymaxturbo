import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    G,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg";

const HeyMaxLogoSvg = (props: SvgProps) => (
  <Svg
    width={149}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="m133.002.5 4.383 7.582h.187L142.002.5h6.492l-7.242 12 7.477 12h-6.657l-4.5-7.664h-.187l-4.5 7.664h-6.61l7.442-12-7.254-12h6.539Z"
    />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M100.632 24.5h6.234l1.173-3.743-.023-.007.411-1.29.919-2.876.489-1.53h-.01l2.666-8.507h.187l2.672 8.508h-2.307l-1.407 4.406h5.097l1.582 5.039h6.235l-8.098-24h-7.723l-8.097 24Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#c)"
      d="M71.217.5H78.4l6.094 14.86h.281L90.87.5h7.184v24h-5.649V9.758h-.199l-5.766 14.59H82.83L77.064 9.676h-.199V24.5h-5.648V.5Z"
    />
    <G fill="#fff">
      <Path d="M44.13.5h6.481l5.075 10.043h.21L60.972.5h6.48l-8.777 15.984V24.5h-5.766v-8.016L44.131.5ZM25.022 24.5V.5h16.735v4.71H30.823v4.923h10.078v4.723H30.823v4.933h10.934V24.5H25.022ZM.271 24.5V.5h5.801v9.633h9.457V.5h5.79v24h-5.79v-9.645H6.072V24.5h-5.8Z" />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={69.401}
        x2={134.927}
        y1={12.4}
        y2={43.515}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#802EFF" />
        <Stop offset={1} stopColor="#D500FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={69.404}
        x2={134.929}
        y1={12.4}
        y2={43.515}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#802EFF" />
        <Stop offset={1} stopColor="#D500FF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={69.4}
        x2={134.926}
        y1={12.4}
        y2={43.515}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#802EFF" />
        <Stop offset={1} stopColor="#D500FF" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default HeyMaxLogoSvg
