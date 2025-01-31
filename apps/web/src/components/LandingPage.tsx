import HeyMaxLogoSvg from '@/assets/svgs/HeyMaxLogoSvg';
import React from 'react'

function LandingPage() {
  return (
    <div className="grid grid-rows-3">
      <HeyMaxLogoSvg className="self-center justify-self-center" />
      <video
        height="250"
        width="250"
        autoPlay
        loop
        muted
        className="row-span-2 self-center justify-self-center mb-14"
      >
        <source src="videos/heymax-intro.mp4" type="video/mp4" />
      </video>
      <div className="items-center justify-center row-span-2 mb-16">
        <h1 className="text-center text-primary font-bold text-3xl pt-4">
          Shop your way to a
        </h1>
        <h1 className="text-center text-accent font-bold text-3xl pt-1">
          Dream Vacation
        </h1>
        <p className="text-center text-primary font-light text-md pt-4 px-16 sm:px-32">
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </p>
      </div>
    </div>
  );
}

export default LandingPage