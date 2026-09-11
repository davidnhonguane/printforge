import Image from "next/image";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import { Layers, Flag, Globe } from "lucide-react";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MontserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "700",
});

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex items-center justify-between px-30">
        <div className="mr-50">
          <Image
            src="/hero-image1.jpg"
            alt="3D Printing Models"
            width={700}
            height={700}
          />
        </div>

        <div className="mr-40">
          <p
            className={
              AlbertHans.className +
              " text-lg font-semibold text-[14px] uppercase tracking-wider leading-none"
            }
          >
            ABOUT PRINTFORGE
          </p>

          <h1
            className={
              MontserratAlternates.className +
              " py-10 font-extrabold text-[30px] "
            }
          >
            Empowering makers <br />
            worldwide
          </h1>

          <p
            className={
              AlbertHans.className +
              " text-lg font-normal text-[14px] leading-6"
            }
          >
            Founded in 2023, PrintForge has quickly <br />
            become the go-to platform for 3D printing <br />
            enthusiasts, makers, and professional <br />
            designers to share and discover amazing STL <br />
            files for 3D printing. Our mission is to foster a vibrant community{" "}
            <br />
            where creativity meets technology, enabling <br />
            anyone to bring their ideas to life through 3D <br />
            printing.
          </p>
        </div>
      </div>

      {/* Stats Section */}

      <div className="flex direction-col items-center justify-between px-20 py-20">
        <div>
          <div className="flex flex-row gap-3 p-4">
            <Layers className="w-8 h-8 text-gray-600" />
            <h1
              className={MontserratAlternates.className + " text-2xl font-bold"}
            >
              100K+ Models
            </h1>
          </div>
          <p
            className={
              AlbertHans.className +
              " pt-5 text-lg font-normal text-[14px] leading-6"
            }
          >
            Access our vast library of <br />
            community-created 3D models, from <br />
            practical tools to artistic creations.
          </p>
        </div>

        <div className="border-l border-gray-400 px-20 border-r">
          <div className="flex flex-row gap-3 p-4">
            <Flag className="w-8 h-8 text-gray-600" />
            <h1
              className={MontserratAlternates.className + " text-2xl font-bold"}
            >
              Active Community
            </h1>
          </div>
          <p
            className={
              AlbertHans.className +
              " pt-5 text-lg font-normal text-[14px] leading-6"
            }
          >
            Join thousands of makers who share <br />
            tips, provide feedback, and <br />
            collaborate on projects.
          </p>
        </div>

        <div>
          <div className="flex flex-row gap-3 p-4">
            <Globe className="w-8 h-8 text-gray-600" />
            <h1
              className={MontserratAlternates.className + " text-2xl font-bold"}
            >
              Free to Use
            </h1>
          </div>

          <p
            className={
              AlbertHans.className +
              " pt-5 text-lg font-normal text-[14px] leading-6"
            }
          >
            Most models are free to download, <br />
            with optional premium features for <br />
            power users.
          </p>
        </div>
      </div>

      {/* Our Vision */}
      <div className="flex justify-center py-20">
        <div className="max-w-2xl">
          <h1
            className={
              MontserratAlternates.className + " text-4xl font-bold mb-8"
            }
          >
            Our vision
          </h1>
          <p
            className={
              AlbertHans.className +
              " text-lg font-normal text-[14px] leading-6"
            }
          >
            At PrintForge, we believe that 3D printing is revolutionizing <br />
            the way we create, prototype, and manufacture. Our platform <br />
            serves as a bridge between designers and makers, enabling <br />
            the sharing of knowledge and creativity that pushes the <br />
            boundaries of what's possible with 3D printing. <br />
            <br />
            Whether you're a hobbyist looking for your next weekend <br />
            project, an educator seeking teaching materials, or a <br />
            professional designer wanting to share your creations, <br />
            PrintForge provides the tools and community to support your <br />
            journey in 3D printing.
          </p>
        </div>
      </div>
    </div>
  );
}
