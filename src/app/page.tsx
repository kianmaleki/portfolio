import { Button } from "@/components/ui/button";
import { Line, WhatCanIDoCard } from "@/components/";
import Image from "next/image";
import Link from "next/link";

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
          <Button className="mt-4"><Link href="/about">اطلاعات بیشتر درمورد من</Link></Button>
        </div>
        <div className="relative md:w-1/2 w-full h-64 md:h-[400px] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/images/banner.png"
            alt="banner"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <Line />
      <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900">چیکار میتونم بکنم؟</h2>
        <p>
          همونطور که بالاتر گفتم، تخصص من برنامه نویسی هست. حالا بخوایم
          تقسیم‌بندی کنیم بخش‌ها رو، می‌تونم بگم توی سه بخش برنامه نویسی سایت،
          برنامه نویسی موبایل, طراحی سایت ( UI & UX ) و آموزش دادن برنامه نویسی
          می‌تونم فعالیت کنم
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <WhatCanIDoCard
            cardImage="/images/webdev.svg"
            cardDescription="بیشتر از ۲ سال هست که توی برنامه نویسی سایت تجربه دارم.
معمولا سرعتم توی انجام پروژه ها زیاده و معمولا بدون باگ هست.
توی کمترین زمان و به بهترین شکل ممکن پروژه هارو انجام میدم"
            cardTitle="برنامه نویس سایت"
          />
          <WhatCanIDoCard
            cardImage="/images/uiux.svg"
            cardTitle="طراحی سایت ( UI & UX )"
            cardDescription="بیشتر از ۲ سال هست که در زمینه طراحی سایت یا همون رابط کاربری UI & UX تجربه دارم و نمونه کار های زیادی هم دارم.
معمولا زیاد روی پروژه هام وقت میزارم و از تمام خلاقیتم براشون استفاده میکنم تا بتونم طرح های زیبا و کاربر پسندی رو بسازم!"
          />
          <WhatCanIDoCard
            cardImage="/images/mobiledev.svg"
            cardDescription="به تازگی برنامه نویسی موبایل رو یاد گرفتم و میتونم برنامه های اندرویدی و IOS بسازم با بهترین UI ممکن.
فعلا پروژه های کوچیک میزنم تا کم کم برسم به پروژه های بزرگ و فروشگاهی"
            cardTitle="برنامه نویس موبایل"
          />
        </div>
      </div>
      <Line />
    </>
  );
}
