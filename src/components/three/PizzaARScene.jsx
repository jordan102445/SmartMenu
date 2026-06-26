import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer, PresentationControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import FoodModel from "./models/FoodModel.jsx";

// CameraRig adds subtle handheld AR movement while keeping the food centered.
function CameraRig() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.32) * 0.18;
    camera.position.y = 1.35 + Math.sin(t * 0.42) * 0.08;
    camera.position.z = 4.15 + Math.cos(t * 0.28) * 0.18;
    camera.lookAt(0, 0.1, 0);
  });

  return null;
}

// RotatingFood wraps the procedural model with smooth rotation for the preview loop.
function RotatingFood({ modelType, modelUrl, modelScale, modelPosition, modelRotation }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.42;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.04;
  });

  return (
    <group ref={group}>
      <FoodModel
        type={modelType}
        modelUrl={modelUrl}
        modelScale={modelScale}
        modelPosition={modelPosition}
        modelRotation={modelRotation}
      />
    </group>
  );
}

// PizzaARScene is a reusable Three.js stage for the landing page, modal, and reel.
export default function PizzaARScene({
  modelType = "Pizza",
  modelUrl,
  modelScale,
  modelPosition,
  modelRotation,
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [0, 1.35, 4.2], fov: 38 }}
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <CameraRig />
        <ambientLight intensity={0.4} />
        <spotLight
          castShadow
          color="#ffd3a0"
          intensity={5.2}
          position={[-2.4, 4.8, 3.2]}
          angle={0.52}
          penumbra={0.78}
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight color="#ff6b3d" intensity={2.4} position={[2.4, 1.6, 2.1]} />
        <pointLight color="#63d297" intensity={0.72} position={[-2.4, 0.8, -2.2]} />
        <Environment resolution={256}>
          <Lightformer intensity={2.4} position={[0, 4, -3]} scale={[5, 3, 1]} color="#ffe3bd" />
          <Lightformer intensity={1.4} position={[3, 1, 2]} scale={[2, 2, 1]} color="#ff8a3d" />
          <Lightformer intensity={0.85} position={[-3, 1, 2]} scale={[2, 2, 1]} color="#63d297" />
        </Environment>
        <PresentationControls
          global
          cursor
          rotation={[0.05, 0, 0]}
          polar={[-0.28, 0.2]}
          azimuth={[-0.55, 0.55]}
          config={{ mass: 1.7, tension: 180 }}
          snap={{ mass: 2.2, tension: 180 }}
        >
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.32}>
            <RotatingFood
              modelType={modelType}
              modelUrl={modelUrl}
              modelScale={modelScale}
              modelPosition={modelPosition}
              modelRotation={modelRotation}
            />
          </Float>
        </PresentationControls>
        <ContactShadows position={[0, -0.95, 0]} opacity={0.5} scale={4.5} blur={2.7} far={3.4} />
      </Suspense>
    </Canvas>
  );
}
