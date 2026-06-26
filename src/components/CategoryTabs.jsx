import { Beef, CakeSlice, CupSoda, Pizza } from "lucide-react";

const icons = {
  Pizza,
  Burgers: Beef,
  Drinks: CupSoda,
  Desserts: CakeSlice,
};

// CategoryTabs provides quick mobile-first filtering for the menu sections.
export default function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="sticky top-[88px] z-30 -mx-4 mb-6 overflow-x-auto px-4 py-2 backdrop-blur-xl sm:-mx-6 sm:px-6">
      <div className="scrollbar-hide flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-ink/72 p-2 shadow-glass">
        {categories.map((category) => {
          const Icon = icons[category] || Pizza;
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`inline-flex min-w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                active
                  ? "bg-ember text-ink shadow-glow"
                  : "border border-white/10 bg-white/[0.05] text-white/70 hover:border-ember/40 hover:text-white"
              }`}
            >
              <Icon size={17} aria-hidden="true" />
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
