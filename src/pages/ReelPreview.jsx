import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";
import menuItems from "../data/menu.json";
import MenuCardPreview from "../components/MenuCardPreview.jsx";
import PizzaARScene from "../components/three/PizzaARScene.jsx";

const captions = [
  { text: "Actually...", delay: 0.2, tone: "text-saffron" },
  { text: "What if menus were interactive?", delay: 1.15, tone: "text-white" },
  { text: "Scan. Preview. Order.", delay: 2.15, tone: "text-herb" },
];

// ReelPreview recreates the vertical Instagram-style demo with timed captions and 3D pizza.
export default function ReelPreview() {
  const pizza = menuItems.find((item) => item.category === "Pizza") || menuItems[0];

  return (
    <main className="grid min-h-screen place-items-center bg-ink px-3 py-4 text-white sm:px-6">
      <div className="reel-frame relative w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-white/12 bg-charcoal shadow-glass">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,138,61,0.35),transparent_38%),radial-gradient(circle_at_18%_70%,rgba(99,210,151,0.18),transparent_28%),linear-gradient(180deg,#0b0c0b_0%,#19130f_58%,#090a09_100%)]" />
        <div className="absolute inset-x-5 top-5 z-30 flex items-center justify-between">
          <a
            href="/"
            title="Back to menu"
            aria-label="Back to menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-black/30 text-white backdrop-blur-xl transition hover:bg-white/12"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-normal text-white/74 backdrop-blur-xl">
            <Sparkles size={14} aria-hidden="true" />
            SmartMenu AR
          </span>
        </div>

        <div className="absolute inset-x-0 top-[9%] z-10 h-[56%]">
          <PizzaARScene
            modelType={pizza.category}
            modelUrl={pizza.modelUrl}
            modelScale={pizza.modelScale}
            modelPosition={pizza.modelPosition}
            modelRotation={pizza.modelRotation}
          />
        </div>

        <div className="absolute left-5 right-5 top-[14%] z-20 space-y-3">
          {captions.map((caption) => (
            <motion.p
              key={caption.text}
              initial={{ opacity: 0, y: 22, scale: 0.95 }}
              animate={{ opacity: [0, 1, 1], y: [22, 0, 0], scale: [0.95, 1, 1] }}
              transition={{ delay: caption.delay, duration: 0.8, times: [0, 0.55, 1], ease: "easeOut" }}
              className={`w-fit max-w-[88%] rounded-full border border-white/12 bg-black/42 px-4 py-2 text-xl font-black leading-tight shadow-glass backdrop-blur-xl ${caption.tone}`}
            >
              {caption.text}
            </motion.p>
          ))}
        </div>

        <div className="absolute inset-x-5 bottom-[8.5rem] z-20">
          <MenuCardPreview item={pizza} compact />
        </div>

        <div className="absolute inset-x-5 bottom-5 z-30">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 0.5 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-4 text-sm font-black text-ink shadow-glow transition hover:bg-saffron"
          >
            <ShoppingBag size={18} aria-hidden="true" />
            Order Now
          </motion.button>
        </div>
      </div>
    </main>
  );
}
