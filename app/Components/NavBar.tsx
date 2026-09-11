// components/Navbar.js
"use client";

import { Albert_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {

  const pathname = usePathname();

  return (
    <header>
      <nav className="fixed w-full top-0 flex items-center justify-between px-13 bg-white ml-0 border-b border-gray-300 z-50">
        <Link href="/">
          <Image
            priority
            src="/logo.png"
            alt="Your Image"
            width={200}
            height={200}
            className="h-15 w-auto"
          />
        </Link>

        <div className="justify-end flex-1 flex gap-10">
          <NavLink href="/3DModels" isActive={pathname.startsWith("/3DModels")}>
           3D Models
          </NavLink>
          <NavLink href="/About" isActive={pathname === "/About"}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
