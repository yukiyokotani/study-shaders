import React from 'react';
import vertexShader from '../../shaders/Image005/vertex.glsl';
import fragmentShader from '../../shaders/Image005/fragment.glsl';
import Plane from '../canvas/Plane';

const Image005: React.FC = () => (
  <Plane vertexShader={vertexShader} fragmentShader={fragmentShader} />
);

export default Image005;
