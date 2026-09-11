"use client";

import "../globals.css";
import { Albert_Sans } from "next/font/google";
import Link from "next/link";
import { getAllCategories } from "../lib/categories";
import { Category } from "../lib/types";
import CategoryLink from "../Components/CategoryLink";
import { usePathname } from "next/navigation";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function ModelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getAllCategories();

  const pathname = usePathname();

  const isAllActive = pathname === "/3DModels";

  return (
    <div className="min-h-full flex flex-row">
      <nav className="sticky top-40 w-60 shrink-0 max-h-[calc(100vh-6rem)] overflow-y-auto px-10">
        <Link
          className={`${isAllActive ? `${AlbertHans.className} block py-2 px-4 pb-2 border-l-2 border-orange-500 text-orange-500` : `${AlbertHans.className} block py-2 px-4 pb-2 border-l-2 border-transparent text-black hover:text-orange-500 hover:border-orange-500`}`}
          href="/3DModels"
        >
          All
        </Link>
        {/** Categories */}
        {categories.map((cat) => (
          <CategoryLink
            category={cat}
            key={cat.slug}
            isActive={pathname === `/3DModels/Categories/${cat.slug}`}
          />
        ))}
      </nav>

      <main className="min-h-full flex flex-col pt-10">{children}</main>
    </div>
  );
}
