"use client";

import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";


const EntryPointsPages = () => {
  return (
    <div className="container py-10">
      <h1 className="!text-3xl font-semibold text-center">All Entry Points Sizes</h1>

      {/* Circle Entry Points */}
      <section className="py-5 sm:py-10 xl:py-20 space-y-5 xl:space-y-10">

        <div>
          <h1 className="!text-3xl font-semibold pb-4">Circle Compact</h1>
          <EntryPoint
            id={"#853808"}
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.COMPACT}
          />
        </div>

        <div>
          <h1 className="!text-3xl font-semibold pb-4">Circle Standard</h1>
          <EntryPoint
            id={"#765978"}
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.STANDARD}
          />
        </div>

        <div>
          <h1 className="!text-3xl font-semibold pb-4">Circle Bold</h1>
          <EntryPoint
            id={"#859954"}
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </div>
      </section>

      {/* Rectangle Entry Points */}
      <section className="py-5 sm:py-10 xl:py-20 space-y-5 xl:space-y-10">

        <div>
          <h1 className="!text-3xl font-semibold pb-4">Rectangle Compact</h1>
          <EntryPoint
            id={"#526560"}
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.COMPACT}
          />
        </div>

        <div>
          <h1 className="!text-3xl font-semibold pb-4">Rectangle Standard</h1>
          <EntryPoint
            id={"#452326"}
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.STANDARD}
          />
        </div>
        <div>
          <h1 className="!text-3xl font-semibold pb-4">Rectangle Bold</h1>
          <EntryPoint
            id={"#993624"}
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </div>
      </section>

      {/* Block Entry Points */}
      <section className="py-5 sm:py-10 xl:py-20 space-y-5 xl:space-y-10">
        <div>
          <h1 className="!text-3xl font-semibold pb-4">Block of 2</h1>
          <EntryPoint
            id={"#865522"}
            skeletonType={EntryPointType.BLOCK}
            skeletonSize={EntryPointSize.OF_2}
          />
        </div>
        <div>
          <h1 className="!text-3xl font-semibold pb-4">Block of 4</h1>
          <EntryPoint
            id={"#971963"}
            skeletonType={EntryPointType.BLOCK}
            skeletonSize={EntryPointSize.BLOCK_OF_4}
          />
        </div>
      </section>
    </div>
  );
};

export default EntryPointsPages;