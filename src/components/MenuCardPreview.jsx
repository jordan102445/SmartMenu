import { Flame } from "lucide-react";

// MenuCardPreview mimics a printed menu card that the 3D model can float above.
export default function MenuCardPreview({ item, compact = false }) {
  if (!item) {
    return null;
  }

  return (
    <article
      className={`menu-print-grid glass-dark warm-border overflow-hidden rounded-[1.6rem] ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ember/14 px-3 py-1 text-xs font-bold uppercase tracking-normal text-saffron">
            <Flame size={13} aria-hidden="true" />
            Live preview
          </div>
          <h3 className={`${compact ? "text-xl" : "text-2xl"} font-black text-white`}>{item.name}</h3>
        </div>
        <p className="rounded-full bg-white px-3 py-1 text-sm font-black text-ink">${item.price}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.ingredients.slice(0, compact ? 3 : 4).map((ingredient) => (
          <span
            key={ingredient}
            className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-xs text-white/70"
          >
            {ingredient}
          </span>
        ))}
      </div>
    </article>
  );
}
