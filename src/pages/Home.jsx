import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import menuItems from "../data/menu.json";
import ARPreviewModal from "../components/ARPreviewModal.jsx";
import CartDrawer from "../components/CartDrawer.jsx";
import CategoryTabs from "../components/CategoryTabs.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductCard from "../components/ProductCard.jsx";

// Home assembles the landing page, menu filtering, 3D preview modal, and cart state.
export default function Home() {
  const categories = useMemo(() => [...new Set(menuItems.map((item) => item.category))], []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [previewItem, setPreviewItem] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const featuredItem = menuItems.find((item) => item.id === "truffle-margherita") || menuItems[0];
  const visibleItems = menuItems.filter((item) => item.category === activeCategory);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(item) {
    setCartItems((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function decrementCartItem(id) {
    setCartItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero featuredItem={featuredItem} onPreview={setPreviewItem} onOrder={addToCart} />

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-herb">Interactive menu</p>
              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Choose a dish. See it first.</h2>
            </div>
            <a
              href="/reel-preview"
              className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/70 transition hover:border-ember/40 hover:text-white"
            >
              Open 9:16 ReelPreview
            </a>
          </div>

          <CategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />

          <AnimatePresence mode="popLayout">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <ProductCard key={item.id} item={item} onPreview={setPreviewItem} onAdd={addToCart} />
              ))}
            </div>
          </AnimatePresence>
        </section>
      </main>

      <ARPreviewModal item={previewItem} onClose={() => setPreviewItem(null)} onOrder={addToCart} />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrement={addToCart}
        onDecrement={decrementCartItem}
      />
    </div>
  );
}
