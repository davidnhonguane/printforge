"use client";

import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

export default function Home() {
  return (
    <div className="flex bg-clip-padding flex-col min-h-screen px-10">
      <div className="flex items-center justify-between px-4 py-5">
        <div>
          <p
            className={`${AlbertHans.className} text-lg font-extrabold text-[14px] uppercase tracking-wider leading-none`}
          >
            Your go-to platform for 3D printing files
          </p>

          <h1
            className={
              MontserratFont.className + " py-10 font-extrabold text-[30px]"
            }
          >
            Discover what’s <br />
            possible with 3D printing
          </h1>

          <p
            className={`${AlbertHans.className} text-lg font-semibold text-[14px] uppercase tracking-wider leading-none`}
          >
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>

          <Link href="/models" className="flex justify-start mt-5">
            <button
              className={`${AlbertHans.className} border-2 px-2 py-2 text-[14px] font semi-bold uppercase mt-15 tracking-wider bg-transparent hover:bg-black hover:text-white transition`}
              onClick={() => {
                window.location.href = "/models";
              }}
            > 
              BROWSE MODELS
            </button>
          </Link>
        </div>

        <div className="flex justify-end">
          <Image
            src="/Frame4.jpg"
            alt="3D Printing Models"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
