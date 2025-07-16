import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface WhatCanIDoCardProps {
  cardTitle: string;
  cardImage: string;
  cardDescription: string;
}

export default function WhatCanIDoCard({
  cardTitle,
  cardImage,
  cardDescription,
}: WhatCanIDoCardProps) {
  return (
    <Card>
      <CardHeader className="flex justify-center items-center">
        <Image
          src={cardImage}
          alt={cardTitle}
          width={300}
          height={300}
          className="drop-shadow-lg"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{cardTitle}</h3>
        <p className="text-gray-700 text-lg leading-loose">{cardDescription}</p>
      </CardContent>
    </Card>
  );
}
