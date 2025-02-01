import { cn } from '@package/ui/cn';
import React from 'react'

type PageIndicatorProps = {
    items: number;
    activeIndex: number;
};

const PageIndicator = ({ items, activeIndex }: PageIndicatorProps) => {
    return (
      <div className='flex-row flex justify-center items-center space-x-2 justify-self-start'>
        {Array.from({ length: items }, (_, index) => (
          <div
            key={index}
            className={cn("bg-primary h-2 w-2 rounded-full opacity-40", {
              "h-2 w-6 opacity-100": activeIndex === index,
            })}
          />
        ))}
      </div>
    );
}

export default PageIndicator