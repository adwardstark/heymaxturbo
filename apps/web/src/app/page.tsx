"use client";

import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";  
import "swiper/css";

import { Button } from "@package/ui/button";
import ArrowRightSvg from "@/assets/svgs/ArrowRightSvg";
import LandingPage from "@/components/LandingPage";
import RedeemYourTripPage from "@/components/RedeemYourTripPage";
import ChooseYourBrandsPage from "@/components/ChooseYourBrandsPage";
import PageIndicator from "@/components/PageIndicator";

export default function Home() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCTA = useCallback(() => {
    if (activeIndex === 1) {
      return (
        <Button
          size="icon"
          onClick={() => swiperRef?.current?.slideNext()}
          className="self-end justify-self-end"
        >
          <ArrowRightSvg />
        </Button>
      );
    }

    if (activeIndex === 2) {
      return (
        <Button
          onClick={() => window.open("https://heymax.ai", "_blank")}
          className="self-end justify-self-end"
        >
          Get started
        </Button>
      );
    }

    return (
      <Button onClick={() => swiperRef?.current?.slideNext()} className="self-end justify-self-end">
        See how it works <ArrowRightSvg height={16} width={16} className="ml-1" />
      </Button>
    );
  }, [activeIndex]);

  return (
    <div className="min-h-screen items-center sm:mx-16 md:mx-40 lg:mx-56 xl:mx-96">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <LandingPage />
        </SwiperSlide>
        <SwiperSlide>
          <ChooseYourBrandsPage />
        </SwiperSlide>
        <SwiperSlide>
          <RedeemYourTripPage />
        </SwiperSlide>
      </Swiper>

      {/** Controls */}
      <div className="py-4 px-12 items-center flex justify-between">
        <PageIndicator items={3} activeIndex={activeIndex} />
        {renderCTA()}
      </div>
    </div>
  );
}
