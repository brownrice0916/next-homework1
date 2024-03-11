import { CatData } from "@/types/types";

export default async function SSG() {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "fact", {
    cache: "force-cache",
  });
  //console.log(process.env.NEXT_PUBLIC_API_URL);
  const result: CatData = await resp.json();
  console.log(result);
  return (
    <div>
      <h1 className="text-xl mb-5">SSG</h1>
      <h1>{result.fact}</h1>
    </div>
  );
}
