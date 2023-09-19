const Location = () => {
  return (
    <div className="flex w-full flex-col items-center bg-second">
      <div className="page-scale h-full w-full px-4 py-12">
        <h2 className="heading pb-1 md:px-0">Where are We?</h2>
        <iframe
          className="h-96 w-full rounded-lg border-4 border-dark"
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
