import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";

// CartDrawer collects selected dishes and keeps the order CTA available without changing pages.
export default function CartDrawer({ open, items, onClose, onIncrement, onDecrement }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="glass-dark fixed bottom-0 right-0 z-50 flex h-[88vh] w-full flex-col rounded-t-[2rem] p-5 sm:bottom-auto sm:top-0 sm:h-full sm:max-w-md sm:rounded-l-[2rem] sm:rounded-tr-none sm:p-6"
            initial={{ y: "100%", x: 0 }}
            animate={{ y: 0, x: 0 }}
            exit={{ y: "100%", x: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ember text-ink">
                  <ShoppingBag size={20} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-black text-white">Your order</h2>
                  <p className="text-sm text-white/50">{items.length} selected items</p>
                </div>
              </div>
              <button
                type="button"
                title="Close cart"
                aria-label="Close cart"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center rounded-3xl border border-dashed border-white/16 p-8 text-center text-white/55">
                  Tap the plus button on any dish to build an order.
                </div>
              ) : (
                items.map((item) => (
                  <article key={item.id} className="rounded-3xl border border-white/10 bg-white/[0.06] p-3">
                    <div className="grid grid-cols-[72px_1fr] gap-3">
                      <img src={item.image} alt="" className="h-[72px] w-[72px] rounded-2xl object-cover" />
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold leading-tight text-white">{item.name}</h3>
                          <p className="font-black text-saffron">${item.price * item.quantity}</p>
                        </div>
                        <p className="mt-1 line-clamp-1 text-xs text-white/45">{item.ingredients.join(", ")}</p>
                        <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-ink/50 p-1">
                          <button
                            type="button"
                            title={`Remove one ${item.name}`}
                            aria-label={`Remove one ${item.name}`}
                            onClick={() => onDecrement(item.id)}
                            className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                          >
                            <Minus size={15} aria-hidden="true" />
                          </button>
                          <span className="grid h-8 min-w-8 place-items-center text-sm font-black text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            title={`Add one ${item.name}`}
                            aria-label={`Add one ${item.name}`}
                            onClick={() => onIncrement(item)}
                            className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                          >
                            <Plus size={15} aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <div className="mb-4 flex items-center justify-between text-lg font-black">
                <span className="text-white">Total</span>
                <span className="text-saffron">${total}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-ember px-5 py-3 text-sm font-black text-ink shadow-glow transition hover:bg-saffron disabled:cursor-not-allowed disabled:opacity-45"
                disabled={items.length === 0}
              >
                Order Now
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
