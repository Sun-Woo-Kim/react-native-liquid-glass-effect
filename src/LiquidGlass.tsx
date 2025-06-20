import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { LiquidGlassProps } from './types';

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  style,
  blurAmount = 10,
  tintColor = 'rgba(255, 255, 255, 0.1)',
}) => {
  return (
    <View 
      style={[
        styles.container,
        {
          backgroundColor: tintColor,
        },
        style
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    padding: 20,
  },
}); 