# Model Source Shortlist

Use these as starting points for realistic `.glb` food downloads. Download the GLB from the source site, rename it to the matching menu item id, place it in `public/models/`, then run:

```powershell
npm.cmd run models:link
```

## Current Menu Filenames

- `truffle-margherita.glb`
- `diavola-glow.glb`
- `garden-neon.glb`
- `smoked-brioche-burger.glb`
- `midnight-crispy-chicken.glb`
- `ember-smash.glb`
- `citrus-aurora.glb`
- `espresso-cloud.glb`
- `mint-halo.glb`
- `molten-chocolate-orbit.glb`
- `berry-signal-cheesecake.glb`
- `saffron-panna-cotta.glb`

## Good Sources

### Meshy

Meshy has food models with direct UI downloads in GLB/USDZ formats. Their pages expose CC0/public-domain metadata for some public models, but download through the website UI is more reliable than scripted fetching.

Pizza candidate:

- https://www.meshy.ai/3d-models/Margherita-Pizza-with-Basil-v2-019edae3-2123-7ed6-880d-b9293dbfe275

Burger candidates:

- https://www.meshy.ai/3d-models/Classic-Burger-with-Fries-v2-019f089f-9632-7688-912d-eeee292e1b94
- https://www.meshy.ai/3d-models/DoublePatty-Cheeseburger-v2-019ee8cf-2757-7a2a-bfb3-47820006ab82

Drink candidates:

- https://www.meshy.ai/3d-models/Gilded-Siren-Goblet-v2-019cda09-5169-7c6b-a122-398c939cae51
- https://www.meshy.ai/3d-models/CocaCola-Can-Tiny-Caf-Inside-v2-019ca9cd-33ae-75a5-a999-166eed6f99b9

Dessert candidates:

- https://www.meshy.ai/3d-models/Lattice-Crust-Apple-Pie-v2-019efb84-3504-790d-99ad-26987f7f623a
- https://www.meshy.ai/3d-models/Pastel-Rainbow-Bear-Cake-v2-019db7e0-597c-7d3d-b22f-b8ea479107ae

Search pages:

- https://www.meshy.ai/tags/pizza
- https://www.meshy.ai/tags/burger
- https://www.meshy.ai/tags/drink
- https://www.meshy.ai/tags/dessert

### Sketchfab

Sketchfab has high-quality food scans and models, but downloads usually require signing in. Use only downloadable models with a license that allows your use, then keep attribution if the license requires it.

Search pages:

- https://sketchfab.com/search?features=downloadable&q=pizza&type=models
- https://sketchfab.com/search?features=downloadable&q=burger&type=models
- https://sketchfab.com/search?features=downloadable&q=cocktail&type=models
- https://sketchfab.com/search?features=downloadable&q=cake&type=models

### Polycam / KIRI Engine

Best route for truly restaurant-specific realism:

1. Put the real dish on a table with soft light.
2. Scan it with Polycam or KIRI Engine.
3. Export `.glb`.
4. Rename it to the matching menu item id.
5. Place it in `public/models/`.
6. Run `npm.cmd run models:link`.
