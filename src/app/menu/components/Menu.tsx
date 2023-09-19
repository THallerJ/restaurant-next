import {
  lunchItems,
  breakfastItems,
  dinnerItems,
  dessertItems,
  drinkItems,
  starterItems,
} from "@/constants";
import MenuItems from "./MenuItems";
import DailySpecial from "./DailySpecial";
import { Gallery } from "@/components";
import {
  breakfast,
  lunch,
  dinner,
  starter,
  dailySpecial,
  dessert,
} from "@/assets/images/menu";
import { imageType } from "@/types";
const Menu = () => {
  const cols = "space-y-8 sm:w-[45%] md:w-[40%] lg:w-[35%]";
  const images: imageType[] = [
    { image: breakfast, x: 45, y: 40 },
    { image: dinner, x: 45, y: 25 },
    { image: starter, x: 0 },
    { image: dailySpecial, x: 50 },
    { image: dessert, x: 60, y: 25 },
    { image: lunch, y: 35 },
  ];

  return (
    <div className="flex w-full flex-col items-center">
      <div className="page-scale flex h-full flex-col justify-between pb-8 sm:flex-row">
        <div className={cols}>
          <div className="sm:hidden">
            <DailySpecial />
          </div>
          <MenuItems title="Starters" menuItems={starterItems} />
          <MenuItems title="Breakfast" menuItems={breakfastItems} />
          <MenuItems title="Lunch" menuItems={lunchItems} />
          <MenuItems title="Dinner" menuItems={dinnerItems} />
        </div>
        <div className={cols}>
          <div className="hidden sm:block">
            <DailySpecial />
          </div>
          <MenuItems title="Desserts" menuItems={dessertItems} />
          <MenuItems title="Drinks" menuItems={drinkItems} />
        </div>
      </div>
      <Gallery images={images} layout="cross" />
      <div className="flex w-full flex-col items-center bg-second p-8">
        <div className="page-scale">
          <h2 className="heading self-start pb-1">Our Ingredients</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin iaculis eros at maximus. Suspendisse potenti. Nulla
            scelerisque nibh quis nibh sollicitudin faucibus. Mauris sagittis
            turpis mauris, vel vulputate lacus iaculis quis. Vivamus est mi,
            congue sed molestie eget, pharetra ut arcu. Nullam finibus nisl vel
            mauris fermentum, vel faucibus enim ultrices. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Maecenas egestas interdum
            felis, nec facilisis libero ullamcorper in. Integer convallis neque
            ut bibendum mattis. Nam fermentum congue nisl et iaculis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam cursus mauris ut tellus fringilla
            posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
