import planeScene from '@/public/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  animations, ref;
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
