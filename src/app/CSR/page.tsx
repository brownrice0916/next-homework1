"use client";

import { CatData } from "@/types/types";
import { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState<CatData>();

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "fact")
      .then((resp) => resp.json())
      .then((result: CatData) => {
        console.log(result);
        setData(result);
      });
  }, []);

  if (!data) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <h1 className="text-xl mb-5">CSR</h1>
      <h1>{data.fact}</h1>
    </div>
  );
}
