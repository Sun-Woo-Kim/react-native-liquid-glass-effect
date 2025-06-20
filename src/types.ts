import type { ViewStyle } from 'react-native';
import type { ReactNode } from 'react';

export interface LiquidGlassProps {
  children: ReactNode;
  style?: ViewStyle;
  blurAmount?: number;
  tintColor?: string;
} 