import {
  lunchItems,
  breakfastItems,
  dinnerItems,
  dessertItems,
  drinkItems,
  starterItems,
} from "@/constants";
import MenuItems from ".//components/MenuItems";
import DailySpecial from "./components//DailySpecial";
import OurIngredients from "./components/OurIngredients";

const cols = "space-y-8 sm:w-5/12 lg:w-1/3";

const page = () => {
  return (
    <div className="flex justify-center bg-offwhite">
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
        <OurIngredients />
      </div>
    </div>
  );
};

export default page;
