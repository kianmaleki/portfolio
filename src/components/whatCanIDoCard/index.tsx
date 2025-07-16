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
    <Card className="bg-white rounded-2xl border border-gray-200">
      <CardHeader className="flex justify-center items-center p-8">
        <Image
          src={cardImage}
          alt={cardTitle}
          width={200}
          height={200}
          className="object-contain drop-shadow-lg"
        />
      </CardHeader>
      <CardContent className="px-8 pb-10 flex flex-col items-center text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{cardTitle}</h3>
        <p className="text-gray-700 text-lg leading-loose">{cardDescription}</p>
      </CardContent>
    </Card>
  );
}
