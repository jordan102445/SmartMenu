const pepperoni = [
  [-0.52, 0.12, 0.28],
  [0.08, 0.13, 0.48],
  [0.48, 0.12, 0.16],
  [-0.18, 0.13, -0.14],
  [0.34, 0.12, -0.42],
  [-0.62, 0.12, -0.36],
  [0.72, 0.12, -0.18],
];

const olives = [
  [-0.82, 0.16, 0.05],
  [-0.32, 0.16, 0.58],
  [0.32, 0.16, 0.5],
  [0.64, 0.16, -0.52],
  [-0.18, 0.16, -0.62],
  [0.12, 0.16, 0.04],
];

const basil = [
  [-0.36, 0.2, 0.1, 0.5],
  [0.52, 0.2, 0.36, -0.45],
  [0.05, 0.2, -0.52, 0.9],
  [-0.72, 0.2, -0.12, -0.8],
];

// PizzaModel is the primary placeholder 3D food asset when no .glb file is available.
export default function PizzaModel() {
  return (
    <group scale={1.05} rotation={[0.08, 0, -0.06]}>
      <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
        <cylinderGeometry args={[1.34, 1.39, 0.16, 96]} />
        <meshStandardMaterial color="#d69145" roughness={0.74} metalness={0.02} />
      </mesh>

      <mesh castShadow receiveShadow position={[0, 0.04, 0]}>
        <cylinderGeometry args={[1.16, 1.2, 0.055, 96]} />
        <meshStandardMaterial color="#bb2d24" roughness={0.62} />
      </mesh>

      <mesh castShadow receiveShadow position={[0, 0.085, 0]}>
        <cylinderGeometry args={[1.08, 1.13, 0.055, 96]} />
        <meshStandardMaterial color="#ffd679" roughness={0.48} metalness={0.01} />
      </mesh>

      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0.08, 0]}>
        <torusGeometry args={[1.26, 0.095, 18, 128]} />
        <meshStandardMaterial color="#f0a44f" roughness={0.7} />
      </mesh>

      {pepperoni.map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} castShadow position={[x, y, z]}>
          <cylinderGeometry args={[0.145, 0.15, 0.028, 32]} />
          <meshStandardMaterial color="#a93b32" roughness={0.48} />
        </mesh>
      ))}

      {olives.map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} castShadow rotation={[Math.PI / 2, 0, 0]} position={[x, y, z]}>
          <torusGeometry args={[0.055, 0.018, 10, 24]} />
          <meshStandardMaterial color="#252319" roughness={0.36} />
        </mesh>
      ))}

      {basil.map(([x, y, z, r]) => (
        <mesh key={`${x}-${z}`} castShadow position={[x, y, z]} rotation={[0.18, r, 0.28]} scale={[0.08, 0.018, 0.18]}>
          <sphereGeometry args={[1, 24, 12]} />
          <meshStandardMaterial color="#2da65f" roughness={0.42} />
        </mesh>
      ))}
    </group>
  );
}
