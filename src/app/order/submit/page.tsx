import Submit from "./components/Submit";

const page = () => {
  const EmptyOrder = () => (
    <p className="heading-sm">You have nothing in your cart</p>
  );

  return (
    <Submit>
      <EmptyOrder />
    </Submit>
  );
};

export default page;
