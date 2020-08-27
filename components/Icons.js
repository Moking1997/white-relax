import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MyIcon = ({ color, name, width, height, ...rest }) => {
  switch (name) {
    case "leafage":
      return (
        <Svg width={width} height={height} viewBox="0 0 512 512" {...rest}>
          <Path
            d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
            fill={getIconColor(color, 0, "#fff")}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
          />
        </Svg>
      );
    case "rainy":
      return (
        <Svg width={width} height={height} viewBox="0 0 512 512" {...rest}>
          <Path
            d="M114.61 162.85A16.07 16.07 0 00128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z"
            fill={getIconColor(color, 0, "#fff")}
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={32}
          />
          <Path
            fill={getIconColor(color, 0, "#fff")}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M144 384l-32 48M224 384l-64 96M304 384l-32 48M384 384l-64 96"
          />
        </Svg>
      );
    case "notifications":
      return (
        <Svg width={width} height={height} viewBox="0 0 512 512" {...rest}>
          <Path
            d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
            fill={getIconColor(color, 0, "#fff")}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
          />
        </Svg>
      );
  }
  return null;
};

MyIcon.defaultProps = {
  width: 18,
  height: 18,
};

/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
const getIconColor = (color, index, defaultColor) => {
  return color
    ? typeof color === "string"
      ? color
      : color[index] || defaultColor
    : defaultColor;
};

export default MyIcon;
