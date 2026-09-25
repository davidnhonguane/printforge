import "../globals.css";
import { Albert_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import CategoriesNav from "../Components/CategoriesNav";


const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default function ModelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row p-10">
      <CategoriesNav />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
