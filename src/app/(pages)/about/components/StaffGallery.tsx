import { Gallery } from "@/components";
import { imageType } from "@/types";
import { ChefFire, BarStaff, KitchenStaff } from "@/assets";

const StaffGallery = () => {
  return <Gallery images={staffImages} layout="start" />;
};

export default StaffGallery;

const staffImages: imageType[] = [
  { image: ChefFire, x: 65, y: 25 },
  { image: BarStaff, x: 95, y: 20 },
  { image: KitchenStaff, y: 15 },
];
