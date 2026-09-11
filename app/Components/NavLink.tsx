import type { NavLinkProps } from "../lib/types.js";
import Link from "next/link";
import { Albert_Sans } from "next/font/google";

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function NavLink({ href, children, isActive }: NavLinkProps) {

  console.log("isActive:", isActive); // Debugging line to check the value of isActive

  return (
      <Link href={href}
        className=
        {`${AlbertHans.className} font-semibold text-gray-700 tracking-wider leading-none hover:text-orange-500 bpb-2 hover:border-orange-500 ${isActive ? "text-orange-500 border-b border-orange-500 pb-2" : "border-transparent"}`}
      >
        {children}
      </Link>
  );
}
