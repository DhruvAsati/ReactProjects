import React from 'react';
import { Float, Text } from '@react-three/drei';

const FloatingText = ({ children }) => {
  return (
    <Float speed={5} rotationIntensity={0.5} floatIntensity={2}>
      <Text
        color="white"
        fontSize={2}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Float>
  );
};

export default FloatingText;