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

const Menu = () => {
  const cols = "space-y-8 sm:w-[45%] md:w-[40%] lg:w-[35%]";

  return (
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
  );
};

export default Menu;
