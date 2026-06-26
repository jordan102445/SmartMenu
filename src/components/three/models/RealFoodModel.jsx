import { Center, useGLTF } from "@react-three/drei";
import { useMemo } from "react";

// RealFoodModel loads a real GLB/GLTF asset when a menu item provides a modelUrl.
export default function RealFoodModel({
  modelUrl,
  modelScale = 1,
  modelPosition = [0, 0, 0],
  modelRotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(modelUrl);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  return (
    <Center>
      <primitive
        object={clonedScene}
        scale={modelScale}
        position={modelPosition}
        rotation={modelRotation}
      />
    </Center>
  );
}
