"use client";

import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import Image from "next/image";

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto px-4">

      <div className="max-w-4xl mx-auto py-10">
        <Image src="/assets/icons.png" width={500} height={100} alt="Flagship Logo" className="w-full h-[80px] object-cover object-top" />
      </div>

      <div className="relative w-full aspect-5/2 overflow-hidden rounded-2xl">
        <Image src="/assets/background.png" fill alt="BG" className="object-cover object-top rounded-2xl" />
      </div>

      <section className="py-20">
        <EntryPoint
          id={"#428521"}
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </section>


      <div className="relative w-full aspect-5/2 overflow-hidden rounded-2xl">
        <Image src="/assets/section.png" fill alt="BG" className="object-cover object-top rounded-2xl" />
      </div>


    </div>
  );
}
