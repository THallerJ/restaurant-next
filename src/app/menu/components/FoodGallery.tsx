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

const FoodGallery = () => {
  return <Gallery images={images} layout="cross" />;
};

export default FoodGallery;

const images: imageType[] = [
  { image: breakfast, x: 45, y: 40 },
  { image: dinner, x: 45, y: 25 },
  { image: starter, x: 0 },
  { image: dailySpecial, x: 50 },
  { image: dessert, x: 60, y: 25 },
  { image: lunch, y: 35 },
];
