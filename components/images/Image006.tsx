import React from 'react';
import vertexShader from '../../shaders/Image006/vertex.glsl';
import fragmentShader from '../../shaders/Image006/fragment.glsl';
import Plane from '../canvas/Plane';

const Image006: React.FC = () => (
  <Plane vertexShader={vertexShader} fragmentShader={fragmentShader} />
);

export default Image006;
