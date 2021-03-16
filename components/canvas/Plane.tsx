/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

type Props = {
  vertexShader: string;
  fragmentShader: string;
};

const PlaneMesh: React.FC<Props> = ({ vertexShader, fragmentShader }) => {
  const material = useRef<THREE.ShaderMaterial>();

  const uniforms = useMemo(
    () => ({
      uTime: { type: 'f', value: 0.0 },
      uResolution: {
        type: 'v2',
        value: new THREE.Vector2(300, 300),
      },
      uMouse: {
        type: 'v2',
        value: new THREE.Vector2(),
      },
    }),
    []
  );

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.uTime.value += 0.1;
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial
        ref={material}
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Plane: React.FC<Props> = ({ vertexShader, fragmentShader }) => {
  return (
    <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 0] }}>
      <ambientLight />
      <PlaneMesh vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </Canvas>
  );
};

export default Plane;
