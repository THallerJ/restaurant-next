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

const OurIngredients = () => {
  const images: imageType[] = [
    { image: breakfast, x: 45, y: 40 },
    { image: dinner, x: 45, y: 25 },
    { image: starter, x: 0 },
    { image: dailySpecial, x: 50 },
    { image: dessert, x: 60, y: 25 },
    { image: lunch, y: 35 },
  ];

  return (
    <>
      <Gallery images={images} layout="cross" />
      <div className="flex w-full flex-col items-center bg-second p-8 md:py-14">
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
    </>
  );
};

export default OurIngredients;
