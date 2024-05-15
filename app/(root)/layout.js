import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@/components/layout/LeftSideBar";
import MainContainer from "@/components/layout/MainContainer";
import TopBar from "@/components/layout/TopBar";
import BottomBar from "@/components/layout/BottomBar";
import RightSideBar from "@/components/layout/RightSideBar";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} text-light-1 bg-purple-2`}>
          <main className="flex flex-row">
            <LeftSideBar />

            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
