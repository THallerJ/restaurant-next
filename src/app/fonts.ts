import { Bebas_Neue, Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const fontVariables = `${bebas.variable} ${poppins.variable}`;

export default fontVariables;
