import { discountCodes } from "@/constants";

const getDiscountPercent = (code: string): number => {
  const item = discountCodes.find((elem) => elem.code === code);
  return item ? item.percent / 100 : 0;
};

const roundNum = (num: number) => Number(num.toFixed(2));

export { getDiscountPercent, roundNum };
