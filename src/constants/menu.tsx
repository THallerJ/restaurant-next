import { menuItem } from "@/types";
import * as menuImages from "@/assets/images/menu";

const dailySpecial: menuItem = {
  name: "Egg Burger",
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus rutrum eros, tristique mollis tellus convallis quis. Cras nec sodales erat, vel ultrices leo. Duis pharetra arcu at nisl egestas maximus. Aenean sed congue odio, eget ultrices erat. Praesent tincidunt fringilla tellus eget pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer blandit, mi quis sagittis maximus, risus elit laoreet dolor, aliquam fringilla ligula elit ut sapien.",
  price: 13,
  image: menuImages.DailySpecial,
};

const starterItems: menuItem[] = [
  {
    name: "Starter 1",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 10,
    image: menuImages.Starter,
  },
  {
    name: "Starter 2",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 9,
    image: menuImages.Starter,
  },
  {
    name: "Starter 3",
    details: "ingredient 1, ingredient 2, ingredient 3",
    price: 8,
    image: menuImages.Starter,
  },
  {
    name: "Starter 4",
    details:
      "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5, ingredient 6",
    price: 13,
    image: menuImages.Starter,
  },
];

const breakfastItems: menuItem[] = [
  {
    name: "Breakfast Item 1",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 11,
    image: menuImages.Breakfast,
  },
  {
    name: "Breakfast Item 2",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 9,
    image: menuImages.Breakfast,
  },
  {
    name: "Breakfast Item 3",
    details: "ingredient 1, ingredient 2, ingredient 3",
    price: 8,
    image: menuImages.Breakfast,
  },
  {
    name: "Breakfast Item 4",
    details:
      "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5, ingredient 6",
    price: 13,
    image: menuImages.Breakfast,
  },
];

const lunchItems: menuItem[] = [
  {
    name: "Lunch Item 1",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 11,
    image: menuImages.Lunch,
  },
  {
    name: "Lunch Item 2",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 9,
    image: menuImages.Lunch,
  },
  {
    name: "Lunch Item 3",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 8,
    image: menuImages.Lunch,
  },
  {
    name: "Lunch Item 4",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 13,
    image: menuImages.Lunch,
  },
  {
    name: "Lunch Item 5",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 11,
    image: menuImages.Lunch,
  },
  {
    name: "Lunch Item 6",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Lunch,
  },
  {
    name: "Lunch Item 7",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Lunch,
  },
];

const dinnerItems: menuItem[] = [
  {
    name: "Dinner Item 1",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 11,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 2",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 9,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 3",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 8,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 4",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 13,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 5",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 11,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 6",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 7",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 8",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 9",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 10",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Dinner,
  },
  {
    name: "Dinner Item 11",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 14,
    image: menuImages.Dinner,
  },
];

const dessertItems: menuItem[] = [
  {
    name: "Dessert Item 1",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 11,
    image: menuImages.Dessert,
  },
  {
    name: "Dessert Item 2",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 9,
    image: menuImages.Dessert,
  },
  {
    name: "Dessert Item 3",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 8,
    image: menuImages.Dessert,
  },
  {
    name: "Dessert Item 4",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 13,
    image: menuImages.Dessert,
  },
];

const drinkItems: menuItem[] = [
  {
    name: "Drink Item 1",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 6,
  },
  {
    name: "Drink Item 2",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 4,
  },
  {
    name: "Drink Item 3",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 5,
  },
  {
    name: "Drink Item 4",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 6,
  },
  {
    name: "Drink Item 5",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 6,
  },
  {
    name: "Drink Item 6",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 4,
  },
  {
    name: "Drink Item 7",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 5,
  },
  {
    name: "Drink Item 8",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 4,
  },
  {
    name: "Drink Item 9",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 5,
  },
  {
    name: "Drink Item 10",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 5,
  },
  {
    name: "Drink Item 11",
    details: "ingredient 1, ingredient 2, ingredient 3, ingredient 4",
    price: 6,
  },
];

export {
  breakfastItems,
  lunchItems,
  dinnerItems,
  dessertItems,
  drinkItems,
  starterItems,
  dailySpecial,
};
