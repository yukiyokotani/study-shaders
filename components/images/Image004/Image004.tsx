import React from 'react';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import Plane from '../../canvas/Plane';

const Image004: React.FC = () => (
  <Plane vertexShader={vertexShader} fragmentShader={fragmentShader} />
);

export default Image004;
