import { Gallery } from "@/components";
import {
  Breakfast,
  Lunch,
  Dinner,
  Starter,
  DailySpecial,
  Dessert,
} from "@/assets/images/menu";
import { imageType } from "@/types";

const FoodGallery = () => {
  return <Gallery images={images} layout="cross" />;
};

export default FoodGallery;

const images: imageType[] = [
  { image: Breakfast, x: 45, y: 40 },
  { image: Dinner, x: 45, y: 25 },
  { image: Starter, x: 0 },
  { image: DailySpecial, x: 50 },
  { image: Dessert, x: 60, y: 25 },
  { image: Lunch, y: 35 },
];
