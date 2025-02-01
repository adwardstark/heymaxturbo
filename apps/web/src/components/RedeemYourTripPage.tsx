import FlyAndClaimSvg from '@/assets/svgs/FlyAndClaimSvg';
import NotFlyingSoonSvg from '@/assets/svgs/NotFlyingSoonSvg';
import TransferMiliesSvg from '@/assets/svgs/TransferMiliesSvg';
import React from 'react'
import RedeemOptionCard, { RedeemCardProps } from './RedeemOptionCard';

function RedeemYourTripPage() {
  const redeemOptions: RedeemCardProps[] = [
    {
      icon: <TransferMiliesSvg className="mx-2" />,
      title: "Transfer Miles",
      description: "25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",
      footer: "Best for Business & First Class",
    },
    {
      icon: <FlyAndClaimSvg className="mx-2" />,
      title: "Fly and Claim",
      description:
        "Upload your flight ticket, and get reimbursed within 5 days.",
      footer: "Best for Economy",
    },
    {
      icon: <NotFlyingSoonSvg className="ml-4" />,
      title: "Not flying soon",
      description: "You can always redeem Gift Cards with your Max Miles.",
      footer: "Best for Starters",
    },
  ];

  return (
    <div className="bg-background p-4">
      <div className="flex flex-row items-center pt-4">
        <div className="bg-accent h-[1px] w-[86%] ml-6" />
        <div className="bg-accent px-4 py-2 rounded-full shadow-md shadow-accent">
          <span className="text-primary font-bold text-base">2</span>
        </div>
      </div>
      <h1 className="text-4xl text-primary font-bold px-6 pt-8 pb-4 text-right">
        Redeem your trip
      </h1>
      <div className="grid p-4">
        {redeemOptions.map((item) => (
          <RedeemOptionCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default RedeemYourTripPage