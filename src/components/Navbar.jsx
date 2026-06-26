import { ShoppingBag, Sparkles } from "lucide-react";

// Navbar keeps the main actions reachable while leaving the screen focused on food previews.
export default function Navbar({ cartCount, onCartOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <a href="/" className="flex items-center gap-2" aria-label="SmartMenu home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ember text-ink shadow-glow">
            <Sparkles size={18} aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-normal text-white sm:text-base">
            SmartMenu AR
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="/reel-preview"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/78 transition hover:border-ember/50 hover:text-white sm:inline-flex"
          >
            Reel Preview
          </a>
          <button
            type="button"
            title="Open cart"
            aria-label="Open cart"
            onClick={onCartOpen}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/10 text-white transition hover:border-ember/50 hover:bg-white/15"
          >
            <ShoppingBag size={19} aria-hidden="true" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </nav>
    </header>
  );
}
