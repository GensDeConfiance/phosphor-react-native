import React, { createContext } from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

export type PaintFunction = (color: ColorValue) => React.ReactNode | null;

export interface IconProps {
  color?: ColorValue;
  size?: string | number;
  weight?: IconWeight;
  style?: StyleProp<ViewStyle>;
  mirrored?: boolean;
}

export type Icon = React.FC<IconProps>;

export const IconContext = createContext<IconProps>({
  color: '#000',
  size: 24,
  weight: 'regular',
  mirrored: false,
});
