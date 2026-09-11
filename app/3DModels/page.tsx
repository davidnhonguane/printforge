import { Albert_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { getModels } from "../lib/models";
import ModelsGrid from "../Components/ModelsGrid";
import { Model } from "../lib/types"



const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default async function Page() {

  const models = await getModels();


  return (
    <div className="min-h-screen px-5">
      {/* SideBar */}
      <div className="flex flex-row justify-between sticky top-0 bg-white py-4">
        <h1 className={MontserratFont.className + " text-3xl font-bold"}>
          3D Models
        </h1>

      </div>
      <ModelsGrid models={models} />
    </div>
  );
}
