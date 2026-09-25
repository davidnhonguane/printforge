"use client"

import Link from 'next/link'
import { Albert_Sans } from "next/font/google";
import {usePathname} from "next/navigation" 

const AlbertHans = Albert_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function NavLink({href, children, exact}:{
  href:string,
  children:React.ReactNode
  exact?: boolean
}){

  const pathname = usePathname();

  const isActive = exact ? pathname == href : pathname.startsWith(href);

  return (
    <li className="text-sm uppercase">
      <Link className={AlbertHans.className + `px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700 ${isActive ? "text-orange-400" : "text-gray-700" }`}
        href={href}>{children}</Link>
    </li>
  )
}