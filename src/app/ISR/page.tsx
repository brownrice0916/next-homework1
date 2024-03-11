import { CatData } from "@/types/types";

export default async function ISR() {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "fact", {
    next: { revalidate: 5 },
  });
  const result: CatData = await resp.json();
  console.log(result);
  return (
    <div>
      <h1 className="text-xl mb-5">ISR</h1>
      <h1>{result.fact}</h1>
    </div>
  );
}
