// DrinkModel is a glassy procedural placeholder for beverage menu items.
export default function DrinkModel() {
  return (
    <group scale={1.08} rotation={[0.02, 0, 0.05]}>
      <mesh castShadow receiveShadow position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.62, 0.48, 1.45, 56, 1, true]} />
        <meshPhysicalMaterial color="#bfe8ff" roughness={0.05} metalness={0} transmission={0.45} transparent opacity={0.42} thickness={0.45} />
      </mesh>
      <mesh castShadow position={[0, -0.42, 0]}>
        <cylinderGeometry args={[0.5, 0.42, 0.72, 56]} />
        <meshStandardMaterial color="#ff7b48" roughness={0.35} transparent opacity={0.82} />
      </mesh>
      <mesh castShadow position={[0.28, 0.9, 0]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.035, 0.035, 1.25, 16]} />
        <meshStandardMaterial color="#63d297" roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.18, 0.34, 0.36]}>
        <sphereGeometry args={[0.12, 24, 16]} />
        <meshStandardMaterial color="#ffd166" roughness={0.34} />
      </mesh>
      <mesh castShadow position={[0.18, 0.18, 0.38]}>
        <sphereGeometry args={[0.1, 24, 16]} />
        <meshStandardMaterial color="#f6fbff" roughness={0.12} transparent opacity={0.72} />
      </mesh>
    </group>
  );
}
