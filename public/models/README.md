# Real Food Models

Place realistic 3D food assets here as `.glb` files.

Recommended export settings:

- Format: binary `.glb`
- Units: meters or centimeters, but keep each dish centered at world origin
- Pivot/origin: center of the plate or food item
- Texture size: 1K or 2K for mobile performance
- Polygon target: 20k-80k triangles per dish when possible
- Materials: PBR textures packed inside the GLB
- File size target: under 8 MB per dish for fast phone loading

Then add the file path to `src/data/menu.json`:

```json
{
  "modelUrl": "/models/truffle-margherita.glb",
  "modelScale": 1.2,
  "modelPosition": [0, 0, 0],
  "modelRotation": [0, 0, 0]
}
```
