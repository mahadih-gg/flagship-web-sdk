"use client";

import { EntryPoint, EntryPointType, FlagshipContainer } from "flagship-web-sdk";
import { useState } from "react";

export default function Home() {
  const [entryPointId, setEntryPointId] = useState("#141526");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const id = formData.get("id") as string;
    setEntryPointId(id);

    console.log(id);
  };

  return (
    <div className="container mx-auto py-10">
      <div>
        <FlagshipContainer>
          <form onSubmit={handleSubmit} className="flex gap-2 mb-10">
            <input
              type="text"
              name="id"
              value={entryPointId}
              onChange={(e) => setEntryPointId(e.target.value)}
              placeholder="Enter ID"
              className="border border-gray-300 rounded-md p-2"
            />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Submit</button>
          </form>
          <EntryPoint
            id={entryPointId}
            skeletonType={EntryPointType.CIRCLE}
          />
        </FlagshipContainer>
      </div>
    </div>
  );
}
