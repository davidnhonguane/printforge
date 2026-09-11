import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { getModelById } from "../../lib/models";
import { Heart } from "lucide-react";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});


// Mobile Phone Version Handler

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const model = await getModelById(id);

  
  console.log("ID from URL:", id);
  console.log("Fetched model: ", model);

  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center border">
        <h1 className={`${AlbertHans.className} text-2xl font-extrabold`}>
          Model not found
        </h1>
      </div>
    );
  }

  return (


    // Image
    <div className="px-2 flex flex-row">
      <div>
        <Image
          width={600}
          height={600}
          src="/hero-image1.jpg"
          alt="Hero Image"
        />
      </div>

      {/* Description */}
      <div className="mt-40 ml-30 p-4">
        <div className="flex">
          <Heart className="w-6 h-6 text-gray-500" />
          <p className={`${AlbertHans.className} ml-2 text-lg text-gray-500`}>
            {model.likes}
          </p>
        </div>
        <h1 className={`${MontserratFont.className} text-2xl font-bold`}>
          {model.name}
        </h1>
        <div
          className={`${AlbertHans.className} text-sm text-gray-600 border rounded-2xl px-2 py-1 mt-2 w-max`}
        >
          <p>{model.category}</p>
        </div>
        <p className={`${AlbertHans.className} text-gray-700 mt-2`}>
          {model.description}
        </p>
        <p className={`${AlbertHans.className} text-sm text-gray-500 mt-10`}>
          Added on: {new Date(model.dateAdded).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
