import { Albert_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { getModels } from "../lib/models";
import ModelsGrid from "../Components/ModelsGrid";
import SearchForm from "../Components/SearchForm";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default async function Page({searchParams}: {searchParams : Promise<{search?: string, sort?: string, categorySlug?: string}>}) {
  
  const search = (await searchParams).search?.toLowerCase() || ""

  const sort = (await searchParams).sort?.toLowerCase() || ""

  const category = (await searchParams).sort?.toLowerCase() || "" 

  const models = await getModels({search, sort});



  return (
    <div className="container px-4 py-8 mx-auto">
      {/* SideBar */}

      <div className="flex justify-end">
        <SearchForm search={search} />
      </div>
    
      <ModelsGrid search={search} models={models} />
    </div>
  );
}
