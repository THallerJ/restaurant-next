import { layoutType, imageType } from "../../../types";

const getLayout = (index: number, layout: layoutType): string => {
  const i = index % 9;

  switch (layout) {
    case "small":
      return "col-span-1";
    case "wide":
      return "col-span-2";
    case "start": {
      if (i % 3 === 0) return "col-span-2";
      return "col-span-1";
    }
    case "middle": {
      if ((i - 1) % 3 === 0) return "col-span-2";
      return "col-span-1";
    }
    case "end": {
      if ((i + 1) % 3 === 0) return "col-span-2";
      return "col-span-1";
    }
    case "diag-start": {
      if (i % 4 == 0) return "col-span-2";
      return "col-span-1";
    }
    case "diag-end": {
      if (i % 2 === 0 && i !== 0 && i !== 8) return "col-span-2";
      return "col-span-1";
    }
    case "cross": {
      if (i === 0 || i === 5 || i === 6) return "col-span-2";
      return "col-span-1";
    }
    default:
      return "";
  }
};

const getObjectPosition = (item: imageType): string => {
  let res = "";
  res += item.x ? `${item.x}% ` : "50% ";
  res += item.y ? `${item.y}% ` : "50% ";
  return res;
};

export { getLayout, getObjectPosition };
