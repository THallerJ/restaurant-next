import { TitleSection } from "@/hocs";

const Location = () => {
  return (
    <TitleSection title="Where are we?" containerClass="bg-second py-12">
      <iframe
        className="h-96 w-full rounded-lg border-4 border-dark"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            &q=White+House,Washington+DC`}
      />
    </TitleSection>
  );
};

export default Location;
