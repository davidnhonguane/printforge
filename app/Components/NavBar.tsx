import Link from "next/link";
import NavLink from "../Components/NavLink";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="w-full bg-white">
      <nav className="fixed w-full top-0 flex items-center justify-between px-13 bg-white ml-0 border-b border-gray-300 z-50">
        <Link href="/">
          <div className="relative cursor-pointer">
            <Image
              priority
              src="/logo.png"
              alt="Your Image"
              width={200}
              height={200}
              className="h-15 w-auto"
            />


          </div>

        </Link>
        <ul className="flex items-center gap-4">
          <NavLink href="/3DModels">3D Models</NavLink>
          <NavLink href="/About">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}
