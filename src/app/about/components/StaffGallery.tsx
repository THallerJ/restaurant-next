import { Gallery } from "@/components";
import { imageType } from "../../../types";
import { chefFire, barStaff, kitchenStaff } from "@/assets";

const StaffGallery = () => {
  return <Gallery images={staffImages} layout="start" />;
};

export default StaffGallery;

const staffImages: imageType[] = [
  { image: chefFire, x: 65, y: 25 },
  { image: barStaff, x: 95, y: 20 },
  { image: kitchenStaff, y: 15 },
];
