import { chefFire, barStaff, kitchenStaff, owner1, owner2 } from "../../assets";
import { imageType } from "../../types";
import Location from "./components/Location";
import InfoSection from "./components/InfoSection";

const AboutPage = () => {
  const founderImages: imageType[] = [
    { image: owner1, y: 5, title: "Owner Number 1" },
    { image: owner2, x: 25, y: 20, title: "Owner Number 2" },
  ];
  const staffImages: imageType[] = [
    { image: chefFire, x: 65, y: 25 },
    { image: barStaff, x: 95, y: 20 },
    { image: kitchenStaff, y: 15 },
  ];

  return (
    <>
      <div className="flex w-full flex-col items-center bg-offwhite">
        <InfoSection title="Who are we?" images={founderImages}>
          <p>
            Nulla cursus felis nec quam scelerisque hendrerit at vitae massa.
            Donec eget tempor est. Aenean nec justo nec ex sagittis posuere. Nam
            non metus iaculis, ullamcorper magna non, imperdiet felis. Nulla at
            felis eu quam suscipit pulvinar at aliquet dolor. Fusce dictum augue
            vel dignissim imperdiet. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. In eget
            egestas elit. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Etiam justo libero, interdum ut
            mauris id, interdum tincidunt purus. Ut eget orci ac nunc blandit
            gravida. Donec condimentum ante sed laoreet porttitor.
          </p>
          <p className="pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            suscipit non arcu et pellentesque. Duis id justo et nisl aliquet
            interdum. Proin sollicitudin magna velit, non sagittis augue
            condimentum id. Suspendisse sit amet consequat urna, eget aliquam
            nulla. Vivamus eu dapibus tortor. Cras finibus justo ut metus tempus
            bibendum. Nulla turpis mauris, dictum eu mollis quis, dapibus
            sagittis ante. Nam a tellus vitae sem cursus dictum eu sed urna.
            Cras eleifend, quam finibus tristique tristique, tellus nibh tempor
            est, a congue massa nunc id dui. Vestibulum purus tortor, lacinia id
            sem in, venenatis efficitur sapien. Morbi fermentum, nulla vehicula
            maximus faucibus, ante lorem tempus nisl, ut vehicula metus orci sit
            amet ex. Proin non lectus semper, fringilla odio vitae, venenatis
            dolor.
          </p>
        </InfoSection>
        <InfoSection title="Meet the Staff" images={staffImages} layout="start">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            suscipit non arcu et pellentesque. Duis id justo et nisl aliquet
            interdum. Proin sollicitudin magna velit, non sagittis augue
            condimentum id. Suspendisse sit amet consequat urna, eget aliquam
            nulla. Vivamus eu dapibus tortor. Cras finibus justo ut metus tempus
            bibendum. Nulla turpis mauris, dictum eu mollis quis, dapibus
            sagittis ante. Nam a tellus vitae sem cursus dictum eu sed urna.
            Cras eleifend, quam finibus tristique tristique, tellus nibh tempor
            est, a congue massa nunc id dui. Vestibulum purus tortor, lacinia id
            sem in, venenatis efficitur sapien. Morbi fermentum, nulla vehicula
            maximus faucibus, ante lorem tempus nisl, ut vehicula metus orci sit
            amet ex. Proin non lectus semper, fringilla odio vitae, venenatis
            dolor.
          </p>
        </InfoSection>
        <Location />
      </div>
    </>
  );
};

export default AboutPage;
