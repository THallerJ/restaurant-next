import { useEffect, useState } from "react";

const PhoneInput = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNum(e.target.value);
    setValue((prev) => formatted);
  };

  return (
    <input
      id="phone"
      className="input w-1/2"
      onChange={(e) => handleInput(e)}
      value={value}
      required
      type="tel"
      pattern="[789][0-9]{9}"
    />
  );
};

export default PhoneInput;

const formatNum = (num: string) => {
  console.log(num);
  if (num.length < 3) {
  }
};
