import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g transform="translate(0.000000,24.000000) scale(0.004687,-0.004687)" stroke="none">
        <path
          d="M1750 5064 c-45 -20 -96 -69 -123 -119 -22 -40 -22 -45 -22 -585 0
-540 0 -545 22 -585 12 -22 36 -54 55 -72 55 -53 92 -63 233 -63 l125 0 0
-240 0 -240 -437 0 -438 0 -50 -24 c-27 -13 -64 -39 -82 -57 -33 -35 -263
-462 -288 -537 -19 -55 -19 -149 0 -204 25 -75 255 -502 288 -537 18 -18 55
-44 82 -57 l50 -24 438 0 437 0 0 -715 c0 -697 1 -716 21 -769 25 -67 86 -133
154 -166 49 -24 56 -25 331 -28 265 -3 284 -2 337 18 68 26 134 86 167 155
l25 50 3 727 2 728 126 0 c140 0 177 10 232 63 19 18 43 50 55 72 22 40 22 45
22 585 0 540 0 545 -22 585 -12 22 -36 54 -55 72 -55 53 -92 63 -233 63 l-125
0 0 240 0 240 438 0 438 0 50 25 c27 14 64 39 81 57 34 35 263 461 288 535 19
56 19 150 0 206 -25 74 -254 500 -288 536 -18 18 -54 44 -82 57 l-50 24 -1085
0 c-946 -1 -1089 -3 -1120 -16z m2207 -506 l104 -198 -104 -197 -104 -198
-961 -3 -962 -2 0 400 0 400 962 -2 961 -3 104 -197z m-1197 -1158 l0 -240
-200 0 -200 0 0 240 0 240 200 0 200 0 0 -240z m430 -960 l0 -400 -961 2 -962
3 -104 198 -104 197 67 128 c36 70 84 160 106 200 l39 72 960 0 959 0 0 -400z
m-430 -1400 l0 -680 -200 0 -200 0 0 680 0 680 200 0 200 0 0 -680z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
