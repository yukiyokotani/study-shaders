import React from 'react';
import vertexShader from '../../shaders/Image001/vertex.glsl';
import fragmentShader from '../../shaders/Image001/fragment.glsl';
import Plane from '../canvas/Plane';

const Image001: React.FC = () => (
  <Plane vertexShader={vertexShader} fragmentShader={fragmentShader} />
);

export default Image001;
