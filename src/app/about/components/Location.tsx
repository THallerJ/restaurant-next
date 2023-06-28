const Location = () => {
  return (
    <div className="flex w-full flex-col items-center bg-second">
      <div className="h-full w-full p-2 pb-12 md:w-[70%] md:p-12">
        <h2 className="heading px-10 pb-1 pt-10 md:px-0 md:pt-0">
          Where are We?
        </h2>
        <iframe
          className="h-96 w-full rounded-2xl border-4 border-dark"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            &q=White+House,Washington+DC`}
        />
      </div>
    </div>
  );
};

export default Location;
