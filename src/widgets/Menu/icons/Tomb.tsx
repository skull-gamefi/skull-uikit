import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" stroke="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65 195 c-22 -21 -25 -33 -25 -90 0 -37 -4 -65 -10 -65 -5 0 -10 -4
-10 -10 0 -6 40 -10 100 -10 60 0 100 4 100 10 0 6 -4 10 -10 10 -6 0 -10 28
-10 65 0 57 -3 69 -25 90 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z m65 -15
c0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 -7 -10 -15 -10 -9 0 -15 -9 -15 -25
0 -14 -4 -25 -10 -25 -5 0 -10 11 -10 25 0 16 -6 25 -15 25 -8 0 -15 5 -15 10
0 6 7 10 15 10 8 0 15 5 15 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
