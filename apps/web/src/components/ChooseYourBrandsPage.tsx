import React, { useState } from 'react'
import { cn } from "@package/ui/cn";

import BentoGrid from './BentoGrid';

function ChooseYourBrandsPage() {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(1);
  const brands = ["Shop online", "Book travel", "Order food", "Buy groceries"];

  return (
    <div className="bg-background p-4">
      <div className="flex flex-row items-center pt-4">
        <div className="bg-accent px-4 py-2 rounded-full shadow-md shadow-accent ml-6">
          <span className="text-primary font-bold text-base">1</span>
        </div>
        <div className="bg-accent h-[1px] w-[86%]" />
      </div>
      <h1 className="text-4xl text-primary font-bold px-6 pt-8 pb-4">
        Shop your favourite brands, earn miles
      </h1>

      <div className="h-[4%] pl-3 flex-row flex items-center py-3">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={cn(
              "bg-tile px-6 py-2 rounded-full mx-1 items-center justify-center",
              {
                "bg-accent": selectedBrandIndex === index,
              }
            )}
            onClick={() => setSelectedBrandIndex(index)}
          >
            <p className="text-primary font-normal text-sm text-nowrap">{brand}</p>
          </div>
        ))}
      </div>

      <BentoGrid />
    </div>
  );
}

export default ChooseYourBrandsPage