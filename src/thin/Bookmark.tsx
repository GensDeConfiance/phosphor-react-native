/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Bookmark(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M191.99414,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polyline
        points="191.994 176 127.987 136 63.994 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default Bookmark;
