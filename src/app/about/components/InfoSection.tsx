import { imageType, layoutType } from "@/types";
import { Gallery } from "@/components";

type InfoSectionProps = {
  title: string;
  images: imageType[];
  layout?: layoutType;
  children: React.ReactNode;
};

const InfoSection = ({ title, images, layout, children }: InfoSectionProps) => {
  return (
    <>
      <div className="p-12 md:w-[50%]">
        <h2 className="heading pb-1">{title}</h2>
        {children}
      </div>
      <Gallery images={images} layout={layout ? layout : "wide"} />
    </>
  );
};

export default InfoSection;
