import React from 'react';
import vertexShader from '../../shaders/Image002/vertex.glsl';
import fragmentShader from '../../shaders/Image002/fragment.glsl';
import Plane from '../canvas/Plane';

const Image002: React.FC = () => (
  <Plane vertexShader={vertexShader} fragmentShader={fragmentShader} />
);

export default Image002;
