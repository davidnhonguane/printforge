import Link from "next/link";
import { Albert_Sans } from "next/font/google";
import { getCatgories } from "../lib/categories";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default async function CategoryLink() {
  const categories = await getCatgories();

  return (
    <div>
      {categories.map((category) => (
        <Link
          href={`/3DModels`}
          key={category.slug}
          className={`${AlbertHans.className} block py-2 px-4 pb-2 border-l-2 text-orange-500 hover:border-orange-500 hover:text-orange-500`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
