import Link from "next/link";
import { getModels } from "../lib/models";
import ModelCard from "../Components/ModelCard";
import type { Model } from "../lib/types";



export default async function ModelsGrid({
  models
}: {
  models: Model[]
}) {


  return (
    <div className="flex flex-row">
      {/* Main Content */}
      <div className="grid grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.id}/>
        ))}
      </div>
    </div>
  );
}
