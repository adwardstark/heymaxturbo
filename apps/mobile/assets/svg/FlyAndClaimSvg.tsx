import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const FlyAndClaimSvg = (props: SvgProps) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M2.812 26.258c.093.932 2.002 11.627 2.59 14.887.105.578.477 1.042.97 1.21l26.313 8.775s2.333.208 3.785-.936c1.304-1.03 16.467-14.062 19.498-16.666.333-.282.532-.729.543-1.212l.005-.215L36.204 49.4l-3.235.13-26.518-8.79-3.036-15.23s-.623.492-.603.748Z"
      />
      <Path
        fill="url(#c)"
        d="M3.414 25.51 6.45 40.738l26.597 9.197.552.01a5.315 5.315 0 0 0 3.214-1.009L56.523 32.1l-13.04-11.982-17.288 13.897-22.78-8.506Z"
      />
      <Path
        fill="#B4CAE9"
        d="M55.862 32.087 37.076 47.932l-2.175-.871-2.113 1.874-25.252-8.6-3.327-14.537 2.317-1.005 19.776 8.343L41.731 19.86l.763.015 13.368 12.212Z"
      />
      <Path
        fill="#E1E9F9"
        d="m26.475 32.266 8.417 14.797s-4.48-5.628-11.851-6.113c-7.38-.484-12.584-1.868-12.584-1.868L6.52 24.804s17.605 1.48 19.957 7.471v-.009Z"
      />
      <Path
        fill="#fff"
        d="M33.467 24.934c5.541-2.738 8.255-5.073 8.255-5.073l12.02 11.597S35.12 40.36 34.89 47.054l-8.418-14.797s1.45-4.594 6.992-7.332l.002.009ZM10.456 39.073l-2.92 1.261-3.327-14.536 2.317-1.005 3.93 14.28Z"
      />
      <Path
        fill="#B4CAE9"
        d="m53.753 31.465 2.11.622-13.367-12.212-.764-.015 12.021 11.605Z"
      />
      <G
        stroke="#ABAFEF"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={0.129}
      >
        <Path d="M33.647 47.257s-4.155-4.248-9.511-4.997c-5.347-.741-13.58-2.21-13.58-2.21" />
        <Path d="M32.815 47.818s-3.78-3.266-8.096-4.17c-4.317-.914-13.437-2.733-13.437-2.733" />
        <Path d="M31.892 48.27s-5.337-3.015-9.257-3.969a436.01 436.01 0 0 1-7.72-1.963" />
      </G>
      <G
        stroke="#ABAFEF"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={0.129}
      >
        <Path d="M36.003 46.275s1.688-3.86 7.158-7.57c5.029-3.413 9.259-5.723 9.259-5.723" />
        <Path d="M36.697 46.618s3.222-4.395 7.864-7.63c4.642-3.234 9.323-6.15 9.323-6.15" />
        <Path d="M37.19 46.923s6.552-6.478 10.373-9.07c3.821-2.593 4.408-3.145 4.408-3.145" />
      </G>
      <Path
        fill="url(#d)"
        d="M31.667 33.595c.088-.087.341-5.94.531-10.624l.48-.341.578.183 2.01-1.395-1.057-1.558-1.944 1.348c.032-.886.07-1.68.093-2.323 2.098-1.547 6.15-4.555 6.77-5.139.852-.795 1.786-2.279 1.55-2.568-.235-.29-1.958.023-2.845.35-.678.25-5.336 3.376-7.592 4.91-.68-.252-1.465-.542-2.337-.857l2.3-1.596-1.057-1.558-2.01 1.395-.038.608s-.433.297-.805.566c-4.711-1.708-10.423-3.73-10.6-3.565-.304.296-.412 1.722-.412 1.722l3.872 2.538c-.335.273-.546.517-.487.601.06.093.44-.065.883-.345l1.942 1.277c-.25.223-.388.41-.34.478.057.084.344-.024.707-.236l3.832 2.516-4.736 3.713-5.605-1.862-1.035 1.054 3.661 2.838 1.411-.433s-1.224.888-.977 1.194c.247.297 1.476-.313 1.476-.313l-.783.96.986 4.454 2.043-.565-.023-5.923 5.154-2.94.752 3.931c-.439.316-.73.638-.66.73.058.084.37-.028.758-.262l.442 2.29s-.017.002-.025.012c-.481.341-.823.69-.752.799.06.093.44-.066.876-.335l.822 4.273s2.075.145 2.22.003l-.03-.005Z"
      />
      <Path
        fill="url(#e)"
        d="M15.409 31.119c-.123-1.253-1.225-2.183-2.463-2.063a2.27 2.27 0 0 0-2.031 2.483 2.281 2.281 0 0 0 1.908 2.034l.891 3.512.202-3.62a2.269 2.269 0 0 0 1.491-2.356l.002.01Zm-2.15 1.257a1.036 1.036 0 0 1-1.132-.944c-.05-.576.36-1.092.93-1.14a1.042 1.042 0 0 1 1.131.944c.05.577-.36 1.092-.93 1.14Z"
      />
      <Path
        fill="url(#f)"
        d="M43.72 27.353c-.144-1.453-1.412-2.516-2.849-2.375a2.612 2.612 0 0 0-2.34 2.872 2.629 2.629 0 0 0 2.203 2.351l1.028 4.057.237-4.181a2.629 2.629 0 0 0 1.72-2.724ZM41.24 28.8a1.206 1.206 0 0 1-1.31-1.093 1.203 1.203 0 0 1 1.078-1.32 1.206 1.206 0 0 1 1.31 1.093 1.203 1.203 0 0 1-1.078 1.32Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={-46.661}
        x2={44.124}
        y1={44.649}
        y2={35.924}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2500AA" />
        <Stop offset={1} stopColor="#AD93FF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={4.658}
        x2={56.644}
        y1={38.403}
        y2={33.407}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2500AA" />
        <Stop offset={1} stopColor="#AD93FF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={-6.952}
        x2={53.74}
        y1={28.773}
        y2={16.457}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2500AA" />
        <Stop offset={1} stopColor="#AD93FF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={2.869}
        x2={15.525}
        y1={34.071}
        y2={32.855}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD39C7" />
        <Stop offset={1} stopColor="#FB8FFF" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={27.231}
        x2={44.789}
        y1={30.948}
        y2={29.261}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD39C7" />
        <Stop offset={1} stopColor="#FB8FFF" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.001 7.5 51.688-.22l7.808 52.28L7.81 59.78z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default FlyAndClaimSvg
