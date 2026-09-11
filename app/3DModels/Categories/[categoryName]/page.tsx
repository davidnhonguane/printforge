
import { getModels } from "../../../lib/models";
import Link from "next/link";
import ModelCard from "../../../Components/ModelCard";
import { Montserrat } from "next/font/google";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  // Fetch models for the given category

  const { categoryName } = await params;

  const { search } = searchParams;

  const category = getCategoryBySlug(categoryName);

  if (!category) {
    return (
      <div className="min-h-screen px-5">
        <h1 className={MontserratFont.className + " text-3xl font-bold-5xl"}>
          Category not found.
        </h1>
      </div>
    );
  }

  const models = await getModels({ category: categoryName });

  if (models.length === 0) {
    return (
      <div className="min-h-screen px-5">
        <h1 className={MontserratFont.className + " text-3xl font-bold-5xl"}>
          No models found for this category.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5">
      {/* SideBar */}
      <h1 className={MontserratFont.className + " text-3xl font-bold"}>
        {category.displayName}
      </h1>

      <div className="flex flex-row">
        {/* Main Content */}
        <div className="grid grid-cols-3">
          {models.map((model) => (
            <Link key={model.id} href={`/3DModels/${model.id}`}>
              <ModelCard model={model} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
