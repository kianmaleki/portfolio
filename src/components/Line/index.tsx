import Image from "next/image";
import React from "react";

export default function Line() {
  return (
    <div className="w-full mx-auto flex justify-center mt-8">
      <Image
        src="/images/line.svg"
        alt="line"
        width={20}
        height={1}
        className="object-contain rotate-180"
      />
    </div>
  );
}
