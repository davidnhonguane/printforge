import Form from "next/form";
import { Albert_Sans } from "next/font/google";

export default function SearchForm() {


  const AlbertHans = Albert_Sans({
    subsets: ["latin"],
    weight: "400",
  });

  return (
    <Form action="/3DModels">
      <input
        type="text"
        name="query"
        className={
          AlbertHans.className +
          " border border-gray-300 rounded-full px-4 py-2 p-2 pr-30"
        }
        placeholder="Search for a model"
      />
    </Form>
  );
}
