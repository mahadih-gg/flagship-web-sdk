"use client";

import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import { useState } from "react";

const DynamicEntryPoint = () => {
  const [entryPointId, setEntryPointId] = useState("#141526");

  return (
    <div>
      <div className="max-w-6xl mx-auto py-10">
        <div>
          <form className="flex gap-2 mb-10">
            <input
              type="text"
              name="id"
              value={entryPointId}
              onChange={(e) => setEntryPointId(e.target.value)}
              placeholder="Enter ID"
              className="border border-gray-300 rounded-md p-2"
            />
          </form>
          <EntryPoint
            id={entryPointId}
            skeletonType={EntryPointType.RECTANGLE}
            size={EntryPointSize.BOLD}
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicEntryPoint;