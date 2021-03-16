import React from 'react';
import vertexShader from '../../shaders/Image003/vertex.glsl';
import fragmentShader from '../../shaders/Image003/fragment.glsl';
import Plane from '../canvas/Plane';

const Image003: React.FC = () => (
  <Plane vertexShader={vertexShader} fragmentShader={fragmentShader} />
);

export default Image003;
