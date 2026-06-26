import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Camera, Sparkles } from "lucide-react";
import menuItems from "../data/menu.json";
import PizzaARScene from "../components/three/PizzaARScene.jsx";

// TableAR is the iPhone-friendly camera overlay that lets guests position a 3D dish on the table view.
export default function TableAR() {
  const videoRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, originX: 0, originY: 0 });
  const [cameraStatus, setCameraStatus] = useState("Starting camera...");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const selectedItem = useMemo(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    return menuItems.find((item) => item.id === id) || menuItems[0];
  }, []);

  useEffect(() => {
    let stream;
    let cancelled = false;

    async function openCamera() {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraStatus("Camera is not available in this browser. Open the link in Safari.");
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        });

        if (cancelled || !videoRef.current) return;

        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraStatus("Drag the dish onto the table. Use size buttons to match the plate.");
      } catch {
        setCameraStatus("Camera could not start. Open this link in Safari and allow camera access.");
      }
    }

    openCamera();

    return () => {
      cancelled = true;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  function handlePointerDown(event) {
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!dragRef.current.active) return;
    const nextX = dragRef.current.originX + event.clientX - dragRef.current.startX;
    const nextY = dragRef.current.originY + event.clientY - dragRef.current.startY;
    setPosition({ x: nextX, y: nextY });
  }

  function handlePointerUp(event) {
    dragRef.current.active = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return (
    <main className="fixed inset-0 z-50 overflow-hidden bg-black text-white">
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" playsInline muted autoPlay />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/48" />

      <div className="absolute left-4 right-4 top-5 z-30 flex items-start justify-between gap-3">
        <a
          href="/"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-black/42 text-white backdrop-blur-xl transition hover:bg-white/12"
          title="Back to menu"
          aria-label="Back to menu"
        >
          <ArrowLeft size={19} aria-hidden="true" />
        </a>

        <div className="glass-dark max-w-[260px] rounded-3xl p-4 text-right">
          <p className="mb-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-normal text-herb">
            <Camera size={14} aria-hidden="true" />
            Camera Table Preview
          </p>
          <h1 className="text-lg font-black leading-tight text-white">{selectedItem.name}</h1>
          <p className="mt-1 text-xs text-white/55">${selectedItem.price} preview</p>
        </div>
      </div>

      <div
        className="absolute left-1/2 top-[46%] z-20 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 touch-none"
        style={{
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <PizzaARScene
          modelType={selectedItem.category}
          modelUrl={selectedItem.modelUrl}
          modelScale={selectedItem.modelScale}
          modelPosition={selectedItem.modelPosition}
          modelRotation={selectedItem.modelRotation}
        />
      </div>

      <div className="glass-dark absolute bottom-5 left-4 right-4 z-30 rounded-3xl p-4 text-center">
        <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-ember text-ink shadow-glow">
          <Sparkles size={18} aria-hidden="true" />
        </div>
        <p className="text-sm font-bold text-white">{cameraStatus}</p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setScale((current) => Math.max(0.55, current - 0.12))}
            className="rounded-full border border-white/12 bg-white/10 px-4 py-3 text-sm font-black text-white"
          >
            Smaller
          </button>
          <button
            type="button"
            onClick={() => {
              setPosition({ x: 0, y: 0 });
              setScale(1);
            }}
            className="rounded-full bg-ember px-4 py-3 text-sm font-black text-ink shadow-glow"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => setScale((current) => Math.min(1.9, current + 0.12))}
            className="rounded-full border border-white/12 bg-white/10 px-4 py-3 text-sm font-black text-white"
          >
            Bigger
          </button>
        </div>

        <p className="mt-3 text-xs leading-5 text-white/48">
          This iPhone-friendly preview uses the live camera with a draggable 3D overlay.
        </p>
      </div>
    </main>
  );
}
