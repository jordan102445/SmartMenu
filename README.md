# SmartMenu AR

Interactive restaurant menu with 3D food previews and an iPhone-friendly camera table preview.

## Start Locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open on the computer:

```text
http://localhost:5173/
```

Open on a phone on the same Wi-Fi:

```text
http://192.168.100.33:5173/
```

## Pages

- Main menu: `/`
- Reel preview: `/reel-preview`
- Table camera AR: `/table-ar?id=truffle-margherita`

## Phone Camera Preview

The `View on Table` buttons open `/table-ar` for the selected food.

Important: iPhone camera access needs HTTPS when opened from another device. Viewing the menu over local Wi-Fi with `http://192.168.100.33:5173/` works, but the camera preview should be opened through an HTTPS tunnel.

Recommended iPhone test flow:

1. Start Vite locally.
2. Expose the local app through an HTTPS tunnel such as Cloudflare Tunnel.
3. Open the HTTPS tunnel URL in Safari.
4. Tap `View on Table`.
5. Allow camera access.
6. Drag and resize the 3D food over the table camera view.

## Realistic Food Models

The project includes downloaded GLB models in:

```text
public/models/
```

Attribution and licenses are documented in `public/models/ATTRIBUTION.md`.

To replace a menu item with a more realistic scan later, add the `.glb` file and connect it in `src/data/menu.json`:

```json
{
  "modelUrl": "/models/smoked-brioche-burger.glb",
  "usdzUrl": "/models/smoked-brioche-burger.usdz",
  "modelScale": 1.2,
  "cameraModelScale": 1.1,
  "modelPosition": [0, 0, 0],
  "modelRotation": [0, 0, 0]
}
```

Use `.glb` with textures packed inside the file. For best mobile performance, keep each food model under 8 MB when possible.

For native iPhone AR later, add a matching `.usdz` file and set `usdzUrl`.
