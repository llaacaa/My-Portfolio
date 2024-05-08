import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function BackGroundStars() {
  return (
    <div className="fixed top-0 left-0 z-0 w-full h-full">
      <Canvas className="w-full h-full">
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />
      </Canvas>
    </div>
  );
}
