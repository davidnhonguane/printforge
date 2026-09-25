"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SortControls({children, sort}: {children:React.ReactNode, sort: string}) {

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const isActive = searchParams.get("sort") === sort

    function handleSort(){
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.set("sort", sort)
    const url = `${pathname}?${urlSearchParams.toString()}`
    router.push(url)
    }

  return (
      <button
        onClick={handleSort} className={`${isActive ? "text-white bg-orange-400 border-orange-400" : 'border-gray-300 text-gray-700 hover:bg-gray-100' } px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100`}
      >
        {children}
      </button>
  )
}