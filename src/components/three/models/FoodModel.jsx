import PizzaModel from "./PizzaModel.jsx";
import BurgerModel from "./BurgerModel.jsx";
import DrinkModel from "./DrinkModel.jsx";
import DessertModel from "./DessertModel.jsx";
import RealFoodModel from "./RealFoodModel.jsx";

// FoodModel selects the available procedural placeholder model for each menu category.
export default function FoodModel({ type, modelUrl, modelScale, modelPosition, modelRotation }) {
  if (modelUrl) {
    return (
      <RealFoodModel
        modelUrl={modelUrl}
        modelScale={modelScale}
        modelPosition={modelPosition}
        modelRotation={modelRotation}
      />
    );
  }

  if (type === "Burgers") return <BurgerModel />;
  if (type === "Drinks") return <DrinkModel />;
  if (type === "Desserts") return <DessertModel />;
  return <PizzaModel />;
}
