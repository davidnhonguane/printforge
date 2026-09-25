import NavLink from "../Components/NavLink";
import { getCategories } from "../lib/categories"


export default async function CategoriesNav(){

  const categories = await getCategories();
  
  console.log("Categories rendered: ", categories)


  return (
    <aside

      className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
      <div className="relative">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
            
            <NavLink href="/3DModels" exact>All</NavLink>

            {categories.map((category) => (
              <NavLink href={`/3DModels/Categories/${category.slug}`}
              key={category.slug}>{category.displayName}</NavLink>
            ))}

          </ul>
        </nav>
        <div
          className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden"/>
      </div>
    </aside>
  )
}