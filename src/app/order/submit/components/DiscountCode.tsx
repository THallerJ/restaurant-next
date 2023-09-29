import { InputLabel, AnimatedButton } from "@/components";

const DiscountCode = () => {
  return (
    <div className="flex w-full justify-center sm:px-4">
      <div className="flex w-full flex-col items-center sm:w-5/6 lg:w-2/3 ">
        <InputLabel
          id="discount_code"
          maxLength={5}
          minLength={5}
          size={5}
          className="input"
          placeholder="X-X-X-X-X"
          label="Discount Code"
        />
        <AnimatedButton className="mt-2 " fullSize>
          Apply code
        </AnimatedButton>
      </div>
    </div>
  );
};

export default DiscountCode;
