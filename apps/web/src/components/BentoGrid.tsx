"use client";

import HaMSvg from "@/assets/svgs/HaMSvg";
import LazdaIconSvg from "@/assets/svgs/LazadaIconSvg";
import LazdaTextSvg from "@/assets/svgs/LazdaTextSvg";
import ShopeeSvg from "@/assets/svgs/ShopeeSvg";
import Image from 'next/image';
import { memo } from "react";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-6 gap-4 p-4 h-[25rem]">
      <div className="bg-shopee col-span-6 row-span-2 flex items-center justify-center rounded-xl p-6">
        <ShopeeSvg />
      </div>

      <div className="bg-lazada col-span-4 row-span-3 flex items-center justify-center rounded-xl p-6">
        <div className="gap-2 flex flex-row items-center justify-center">
          <LazdaIconSvg />
          <LazdaTextSvg />
        </div>
      </div>

      <div className="bg-handm col-span-3 row-span-2 flex items-center justify-center rounded-xl p-6">
        <HaMSvg />
      </div>

      <div className="bg-fave col-span-3 row-span-2 flex items-center justify-center rounded-xl p-6">
        <Image src="/images/fave.png" width={75} height={75} alt="Fave" />
      </div>

      <div className="bg-uniqlo col-span-4 row-span-1 flex items-center justify-center rounded-xl p-6">
        <Image src="/images/uniqlo.png" width={55} height={55} alt="Uniqlo" />
      </div>

      <div className="bg-amazonsg col-span-5 row-span-2 flex items-center justify-center rounded-xl p-6">
        <Image
          src="/images/amazonsg.png"
          width={100}
          height={100}
          alt="AmazonSg"
        />
      </div>

      <div className="bg-fairprice col-span-5 row-span-2 flex items-center justify-center rounded-xl p-6">
        <Image
          src="/images/fairprice.png"
          width={100}
          height={100}
          alt="FairPrice"
        />
      </div>
    </div>
  );
};

export default memo(BentoGrid);
