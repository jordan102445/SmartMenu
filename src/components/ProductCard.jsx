import { motion } from "framer-motion";
import { Camera, Eye, Plus } from "lucide-react";

// ProductCard shows the menu item image, ingredients, preview action, and cart action.
export default function ProductCard({ item, onPreview, onAdd }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="glass-panel group overflow-hidden rounded-3xl"
    >
      <button
        type="button"
        onClick={() => onPreview(item)}
        className="relative block h-52 w-full overflow-hidden text-left"
        aria-label={`Preview ${item.name} in 3D`}
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-normal text-saffron">{item.category}</p>
            <h3 className="text-2xl font-black leading-tight text-white">{item.name}</h3>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-ink">${item.price}</span>
        </div>
      </button>

      <div className="p-5">
        <div className="mb-5 flex flex-wrap gap-2">
          {item.ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/66"
            >
              {ingredient}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-2">
          <button
            type="button"
            onClick={() => onPreview(item)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-3 text-sm font-bold text-saffron transition hover:bg-ember hover:text-ink"
          >
            <Eye size={17} aria-hidden="true" />
            3D Preview
          </button>
          <button
            type="button"
            title={`Add ${item.name} to cart`}
            aria-label={`Add ${item.name} to cart`}
            onClick={() => onAdd(item)}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition hover:bg-saffron"
          >
            <Plus size={19} aria-hidden="true" />
          </button>
        </div>
        <a
          href={`/table-ar?id=${encodeURIComponent(item.id)}`}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-herb/30 bg-herb/10 px-4 py-3 text-sm font-bold text-herb transition hover:bg-herb hover:text-ink"
        >
          <Camera size={17} aria-hidden="true" />
          View on Table
        </a>
      </div>
    </motion.article>
  );
}
