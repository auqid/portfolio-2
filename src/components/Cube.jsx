import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Scene  from './Scene'

const Cube = () => {
  const boxRef = useRef();

  // Use useFrame to animate the rotation
  useFrame(() => {
    if (boxRef.current) {
      // Rotate the box around the Y-axis
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={boxRef} position={[0, 0, 0]} color="blue">
      <Scene/>
    </Box>
  );
};

export default Cube