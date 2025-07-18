import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface PortfolioCardProps {
  cardTitle: string;
  cardImage: string;
  cardDescription: string;
}

export default function PortfolioCard({
  cardTitle,
  cardImage,
  cardDescription,
}: PortfolioCardProps) {
  return (
    <Card className=" rounded-2xl shadow">
      <CardHeader className="flex justify-center items-center">
        <Image
          src={cardImage}
          alt={cardTitle}
          width={340}
          height={220}
          className="object-contain rounded-xl w-full p-0 m-0"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 my-2">{cardTitle}</h3>
        <p className="text-gray-700 text-lg leading-loose line-clamp-1">
          {cardDescription}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <CardAction>
          <Link href="/projects">
            <Button className="px-10 py-6 border-black border text-white bg-gray-900 font-semibold rounded-lg transition hover:cursor-pointer hover:bg-white hover:text-gray-900">
              مشاهده سایت
            </Button>
          </Link>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
