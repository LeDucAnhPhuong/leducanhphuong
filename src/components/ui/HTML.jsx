import { Float, useGLTF } from "@react-three/drei";

const HTML = (props) => {
  const { scene } = useGLTF("models/html.glb");

  return (
    <Float floatIntensity={1}>
      <group
        position={[8, -18, 8]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.4}
        {...props}
        dispose={null}
      >
        <primitive position={[0, -6, 0.181]} object={scene} />
      </group>
    </Float>
  );
};

useGLTF.preload("models/html.glb");

export default HTML;
