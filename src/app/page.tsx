import Welcome from "./components/welcome/Welcome";
import { Divider } from "../components";
import MailingList from "./components/mailing_list/MailingList";
import Hours from "./components/hours/Hours";
import LiveMusic from "./components/LiveMusic";
import { Gallery } from "../components";
import { exterior, seating, eating } from "../assets";
import { imageType } from "../types";

const HomePage = () => {
  const images: imageType[] = [
    { image: seating, x: 25 },
    { image: exterior, x: 40, y: 60 },
    { image: eating, x: 67, y: 15 },
  ];

  return (
    <>
      <Welcome />
      <Divider />
      <div className="flex flex-col items-center bg-offwhite">
        <Hours />
        <LiveMusic />
        <Gallery images={images} layout="middle" />
        <MailingList />
      </div>
    </>
  );
};

export default HomePage;
