import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="md:w-1/2 space-y-6 w-full">
          <h1 className="text-3xl font-bold text-gray-900">من کیان هستم</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            علاقه و تخصص من بیشتر برنامه نویسی هست و سعی می‌کنم حداقل توی تخصص
            خودم به روز باشم.
          </p>
          <Button className="mt-4">اطلاعات بیشتر درمورد من</Button>
        </div>
        <div className="relative md:w-1/2 w-full h-64 md:h-[400px] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/images/banner.png"
            alt="banner"
            fill
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/s_banner.png"
            alt="banner shadow"
            fill
            className="object-cover rounded-lg opacity-60"
          />
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center mt-8">
        <Image
          src="/images/line.svg"
          alt="line"
          width={20}
          height={2}
          className="object-contain rotate-180"
        />
      </div>
    </>
  );
}
