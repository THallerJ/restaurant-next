import Submit from "./components/Submit";

const page = () => {
  return (
    <Submit>
      <EmptyOrder />
    </Submit>
  );
};

export default page;

const EmptyOrder = () => (
  <p className="heading-sm">You have nothing in your cart</p>
);
