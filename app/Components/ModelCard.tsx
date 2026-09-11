"use client";

import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Heart } from "lucide-react";
import { Model } from "../lib/types";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});


export default function ModelCard({ model }: {model: Model}) {
  return (
    <div className="border rounded-lg w-80 mt-10 mr-10 overflow-hidden border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Image
        src="/hero-image1.jpg"
        alt="Model Thumbnail"
        width={300}
        height={200}
        className="w-full"
      />

      <div className="p-2">
        <h2 className={`${MontserratFont.className} text-xl font-bold mt-2`}>
          {model.name}
        </h2>
        <p className={`${AlbertHans.className} text-sm text-gray-600`}>
          {model.description}
        </p>

        <div
          className={`${AlbertHans.className} text-sm text-gray-600 border rounded-2xl px-2 py-1 mt-2 w-max`}
        >
          <p>{model.category}</p>
        </div>

        <div className="flex mt-2">
          <Heart className="w-5 h-5 text-gray-600" />
          <span
            className={`${AlbertHans.className} text-sm text-gray-600 ml-2`}
          >
            {model.likes}
          </span>
        </div>
      </div>
    </div>
  );
}
