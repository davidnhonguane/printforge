import ModelsGrid from "../../../Components/ModelsGrid";
import { getModels } from "../../../lib/models";
import { getCategoryBySlug } from "@/app/lib/categories";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{search?: string ,sort?: string}>;
}) {
  const { categorySlug } = await params;

  const sort = (await searchParams).sort?.toLowerCase() || "";

  const search = (await searchParams).search?.toLowerCase().trim() || "";

  if (!categorySlug) {
    console.log("No data!");
  }

  console.log("Categories: ", categorySlug);

  const models = await getModels({search, sort, categorySlug});

  const category = await getCategoryBySlug(categorySlug);

  return <ModelsGrid models={models} categoryName={category.displayName} />;
}
