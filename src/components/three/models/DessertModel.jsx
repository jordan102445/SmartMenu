// DessertModel is a layered cake placeholder for dessert previews.
export default function DessertModel() {
  return (
    <group scale={1.05} rotation={[0.03, 0, -0.04]}>
      <mesh castShadow receiveShadow position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.96, 1.02, 0.36, 64]} />
        <meshStandardMaterial color="#4f241f" roughness={0.6} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.94, 0.98, 0.12, 64]} />
        <meshStandardMaterial color="#f6e2c3" roughness={0.42} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.82, 0.88, 0.32, 64]} />
        <meshStandardMaterial color="#6b2f28" roughness={0.55} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.84, 0.84, 0.1, 64]} />
        <meshStandardMaterial color="#ff6f8f" roughness={0.38} />
      </mesh>
      <mesh castShadow position={[0.3, 0.55, 0.16]}>
        <sphereGeometry args={[0.15, 24, 16]} />
        <meshStandardMaterial color="#c8193d" roughness={0.34} />
      </mesh>
      <mesh castShadow position={[-0.18, 0.54, -0.22]}>
        <sphereGeometry args={[0.12, 24, 16]} />
        <meshStandardMaterial color="#ffe2a6" roughness={0.3} />
      </mesh>
    </group>
  );
}
