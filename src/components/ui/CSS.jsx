import { Float, useGLTF } from "@react-three/drei";

const CSS = (props) => {
  const { scene } = useGLTF("models/css.glb");

  return (
    <Float floatIntensity={1}>
      <group
        position={[8, -18, 8]}
        rotation={[0, -Math.PI / 5, 0]}
        scale={0.6}
        {...props}
        dispose={null}
      >
        <primitive position={[0, -6, 0.181]} object={scene} />
      </group>
    </Float>
  );
};

useGLTF.preload("models/css.glb");

export default CSS;

