import Image from "next/image";
import React from "react";

export default function Line() {
  return (
    <div className="w-full mx-auto flex justify-center my-10">
      <Image
        src="/images/Arrow_line.svg"
        alt="line"
        width={10}
        height={1}
        className="object-contain "
      />
    </div>
  );
}
