import { AnimatePresence, motion } from "framer-motion";
import { Camera, ShoppingBag, X } from "lucide-react";
import MenuCardPreview from "./MenuCardPreview.jsx";
import PizzaARScene from "./three/PizzaARScene.jsx";

const captions = ["Actually...", "What if menus were interactive?", "Scan. Preview. Order."];

// ARPreviewModal stages the selected item as a floating 3D preview above a menu card.
export default function ARPreviewModal({ item, onClose, onOrder }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.section
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/92 px-4 py-5 backdrop-blur-2xl sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close 3D preview"
            className="absolute inset-0 cursor-default"
            onClick={onClose}
          />
          <div className="relative mx-auto flex min-h-[calc(100vh-40px)] max-w-5xl items-center justify-center">
            <motion.div
              initial={{ y: 34, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 34, scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="glass-dark relative h-[86vh] max-h-[860px] min-h-[640px] w-full overflow-hidden rounded-[2rem]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,138,61,0.28),transparent_42%),radial-gradient(circle_at_80%_14%,rgba(99,210,151,0.16),transparent_34%)]" />

              <div className="absolute left-5 right-5 top-5 z-20 flex items-start justify-between gap-4">
                <div className="space-y-2">
                  {captions.map((caption, index) => (
                    <motion.p
                      key={caption}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.16 + index * 0.24, duration: 0.42 }}
                      className={`w-fit rounded-full border border-white/10 bg-black/34 px-4 py-2 font-black shadow-glass backdrop-blur-xl ${
                        index === 1 ? "text-lg text-white sm:text-2xl" : "text-sm text-saffron sm:text-base"
                      }`}
                    >
                      {caption}
                    </motion.p>
                  ))}
                </div>
                <button
                  type="button"
                  title="Close preview"
                  aria-label="Close preview"
                  onClick={onClose}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/10 text-white transition hover:bg-white/18"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="absolute inset-x-0 top-[5%] z-10 h-[58%]">
                <PizzaARScene
                  modelType={item.category}
                  modelUrl={item.modelUrl}
                  modelScale={item.modelScale}
                  modelPosition={item.modelPosition}
                  modelRotation={item.modelRotation}
                />
              </div>

              <div className="absolute inset-x-5 bottom-5 z-20 mx-auto max-w-xl">
                <MenuCardPreview item={item} />
                <button
                  type="button"
                  onClick={() => onOrder(item)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-4 text-sm font-black text-ink shadow-glow transition hover:bg-saffron"
                >
                  <ShoppingBag size={18} aria-hidden="true" />
                  Order Now
                </button>
                <a
                  href={`/table-ar?id=${encodeURIComponent(item.id)}`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-herb/30 bg-herb/10 px-5 py-4 text-sm font-black text-herb transition hover:bg-herb hover:text-ink"
                >
                  <Camera size={18} aria-hidden="true" />
                  View on Table
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
