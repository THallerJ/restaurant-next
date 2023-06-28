import "./globals.css";
import { Header, Footer } from "../components";
import fonts from "./fonts";
import HeaderLayoutWrapper from "./wrappers/HeaderLayoutWrapper";
import ScrollTopWrapper from "./wrappers/ScrollTopWrapper";
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
