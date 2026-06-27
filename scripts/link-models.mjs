import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const menuPath = path.join(root, "src", "data", "menu.json");
const modelsDir = path.join(root, "public", "models");

const defaultsByCategory = {
  Pizza: { modelScale: 1.15, cameraModelScale: 1.1 },
  Burgers: { modelScale: 1.05, cameraModelScale: 1 },
  Drinks: { modelScale: 1.05, cameraModelScale: 0.95 },
  Desserts: { modelScale: 1.08, cameraModelScale: 1 },
};

const menu = JSON.parse(fs.readFileSync(menuPath, "utf8"));
let linkedCount = 0;

const updated = menu.map((item) => {
  const glbFile = `${item.id}.glb`;
  const usdzFile = `${item.id}.usdz`;
  const glbPath = path.join(modelsDir, glbFile);
  const usdzPath = path.join(modelsDir, usdzFile);
  const defaults = defaultsByCategory[item.category] ?? { modelScale: 1, cameraModelScale: 1 };
  const next = { ...item };

  if (fs.existsSync(glbPath)) {
    next.modelUrl = `/models/${glbFile}`;
    next.modelScale ??= defaults.modelScale;
    next.cameraModelScale ??= defaults.cameraModelScale;
    next.modelPosition ??= [0, 0, 0];
    next.modelRotation ??= [0, 0, 0];
    linkedCount += 1;
  }

  if (fs.existsSync(usdzPath)) {
    next.usdzUrl = `/models/${usdzFile}`;
  }

  return next;
});

fs.writeFileSync(menuPath, `${JSON.stringify(updated, null, 2)}\n`);

console.log(`Linked ${linkedCount} GLB model${linkedCount === 1 ? "" : "s"} in src/data/menu.json.`);
console.log("Expected filenames match menu item ids, for example public/models/truffle-margherita.glb");
