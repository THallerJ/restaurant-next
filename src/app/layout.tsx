import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import fonts from "./fonts";
import ScrollTopWrapper from "./hocs/ScrollTopWrapper";
import { Divider } from "../components";
import { Metadata } from "next";
import RootWrapper from "./hocs/RootWrapper";
import { HeaderLayoutContextProvider } from "./contexts/HeaderLayoutContext";

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
        <RootWrapper>
          <HeaderLayoutContextProvider>
            <ScrollTopWrapper>
              <Header />
              {children}
              <Divider />
              <Footer />
            </ScrollTopWrapper>
          </HeaderLayoutContextProvider>
        </RootWrapper>
      </body>
    </html>
  );
}
