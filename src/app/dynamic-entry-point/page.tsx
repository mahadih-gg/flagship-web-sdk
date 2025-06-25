"use client";

import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import { useState } from "react";

const DynamicEntryPoint = () => {
  const [entryPointId, setEntryPointId] = useState(localStorage.getItem('entryPointId') || "#120729");
  const [selectedSize, setSelectedSize] = useState<EntryPointSize>(localStorage.getItem('selectedSize') as EntryPointSize || EntryPointSize.STANDARD);
  const [selectedType, setSelectedType] = useState<EntryPointType>(localStorage.getItem('selectedType') as EntryPointType || EntryPointType.CIRCLE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const id = formData.get("id") as string;
    setEntryPointId(id);
    localStorage.setItem('entryPointId', id);
  };



  console.log(entryPointId)

  return (
    <div>
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex flex-wrap gap-4">
          <form onSubmit={handleSubmit} className="flex gap-2 mb-10">
            <div>
              <label htmlFor="size" className="block text-sm font-medium mb-1">Entry Point ID:</label>

              <input
                type="text"
                name="id"
                value={entryPointId}
                onChange={(e) => {
                  setEntryPointId(e.target.value)
                  localStorage.setItem('entryPointId', e.target.value);
                }}
                placeholder="Enter ID"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </form>

          <div className="flex gap-4 mb-4">
            <div>
              <label htmlFor="size" className="block text-sm font-medium mb-1">Skeleton Size:</label>
              <select
                name="size"
                id="size"
                value={selectedSize}
                onChange={(e) => {
                  setSelectedSize(e.target.value as EntryPointSize)
                  localStorage.setItem('selectedSize', e.target.value);
                }}
                className="w-36 border border-gray-300 rounded-md p-2 outline-none"
              >
                {(Object.values(EntryPointSize) as string[]).map((size) => {
                  // Disable COMPACT, STANDARD, BOLD when type is BLOCK
                  const isDisabledForBlock = selectedType === EntryPointType.BLOCK &&
                    (size === EntryPointSize.COMPACT || size === EntryPointSize.STANDARD || size === EntryPointSize.BOLD);

                  // Disable BLOCK_OF_2, BLOCK_OF_4 when type is not BLOCK
                  const isDisabledForNonBlock = selectedType !== EntryPointType.BLOCK &&
                    (size === EntryPointSize.BLOCK_OF_2 || size === EntryPointSize.BLOCK_OF_4);

                  const isDisabled = isDisabledForBlock || isDisabledForNonBlock;

                  return (
                    <option key={size} value={size} disabled={isDisabled}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-1">Skeleton Type:</label>
              <select
                name="type"
                id="type"
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value as EntryPointType)
                  localStorage.setItem('selectedType', e.target.value);
                }}
                className="w-36 border border-gray-300 rounded-md p-2 outline-none"
              >
                {(Object.values(EntryPointType) as string[]).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <EntryPoint
          id={entryPointId}
          skeletonType={selectedType}
          skeletonSize={selectedSize}
        />
      </div>
    </div>
  );
};

export default DynamicEntryPoint;