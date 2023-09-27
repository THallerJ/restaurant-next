import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import fonts from "./fonts";
import HeaderLayoutWrapper from "./components/HeaderLayoutWrapper";
import ScrollTopWrapper from "./components/ScrollTopWrapper";
import { Divider } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts} h-screen overflow-hidden font-poppins`}>
        <HeaderLayoutWrapper>
          <ScrollTopWrapper>
            <Header />
            {children}
            <Divider />
            <Footer />
          </ScrollTopWrapper>
        </HeaderLayoutWrapper>
      </body>
    </html>
  );
}
