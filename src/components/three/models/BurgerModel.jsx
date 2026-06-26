// BurgerModel is a simple procedural placeholder for burger menu items.
export default function BurgerModel() {
  return (
    <group scale={1.05} rotation={[0.04, 0, -0.04]}>
      <mesh castShadow receiveShadow position={[0, 0.42, 0]} scale={[1.18, 0.36, 1.18]}>
        <sphereGeometry args={[1, 48, 24]} />
        <meshStandardMaterial color="#d88b3f" roughness={0.68} />
      </mesh>
      <mesh castShadow position={[0, 0.66, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.02, 40]} />
        <meshStandardMaterial color="#f6d28b" roughness={0.45} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
        <cylinderGeometry args={[1.02, 1.08, 0.22, 64]} />
        <meshStandardMaterial color="#4b2318" roughness={0.72} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.25, 0]} rotation={[0, 0.18, 0]}>
        <boxGeometry args={[1.9, 0.07, 1.9]} />
        <meshStandardMaterial color="#f6c552" roughness={0.42} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.05, 0]} rotation={[0, -0.22, 0]}>
        <boxGeometry args={[1.92, 0.06, 1.92]} />
        <meshStandardMaterial color="#48b45f" roughness={0.5} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.28, 0]} scale={[1.1, 0.2, 1.1]}>
        <sphereGeometry args={[1, 48, 16]} />
        <meshStandardMaterial color="#c97935" roughness={0.74} />
      </mesh>
    </group>
  );
}
