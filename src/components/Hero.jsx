import { motion } from "framer-motion";
import { ArrowRight, Camera, QrCode, Sparkles } from "lucide-react";
import MenuCardPreview from "./MenuCardPreview.jsx";
import PizzaARScene from "./three/PizzaARScene.jsx";

// Hero introduces the restaurant-ready AR concept with a live 3D food preview.
export default function Hero({ featuredItem, onPreview, onOrder }) {
  return (
    <section className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 order-2 lg:order-1"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3 py-2 text-sm font-medium text-saffron">
          <QrCode size={16} aria-hidden="true" />
          Scan-ready interactive menu
        </div>
        <p className="mb-3 text-xl font-semibold text-ember">Actually...</p>
        <h1 className="max-w-3xl font-display text-4xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
          What if menus were interactive?
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          Guests can preview signature dishes as cinematic 3D plates above the menu, then order without breaking the moment.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onPreview(featuredItem)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-bold text-ink shadow-glow transition hover:scale-[1.02] hover:bg-saffron"
          >
            Preview Dish
            <Sparkles size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onOrder(featuredItem)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-herb/50 hover:bg-white/15"
          >
            Order Now
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <a
            href={`/table-ar?id=${encodeURIComponent(featuredItem.id)}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-herb/30 bg-herb/10 px-6 py-3 text-sm font-bold text-herb transition hover:bg-herb hover:text-ink"
          >
            View on Table
            <Camera size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-white/70">
          {["Scan", "Preview", "Order"].map((step) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <span className="block text-lg font-black text-white">{step}.</span>
              <span className="text-xs uppercase tracking-normal text-white/45">Smart dining flow</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative order-1 mx-auto h-[450px] w-full max-w-[440px] sm:h-[620px] lg:order-2 lg:h-[650px]"
      >
        <div className="absolute inset-x-2 bottom-0 h-[70%] rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] shadow-glass backdrop-blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-[64%]">
          <PizzaARScene
            modelType={featuredItem.category}
            modelUrl={featuredItem.modelUrl}
            modelScale={featuredItem.modelScale}
            modelPosition={featuredItem.modelPosition}
            modelRotation={featuredItem.modelRotation}
          />
        </div>
        <div className="absolute inset-x-7 bottom-10">
          <MenuCardPreview item={featuredItem} />
        </div>
      </motion.div>
    </section>
  );
}
