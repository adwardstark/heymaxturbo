import { memo } from "react";
import { FlatList, Text, View } from "react-native";
import RedeemCard, { RedeemCardProps } from "@/components/RedeemCard";
import TransferMiliesSvg from "@/svg/TransferMiliesSvg";
import FlyAndClaimSvg from "@/svg/FlyAndClaimSvg";
import NotFlyingSoonSvg from "@/svg/NotFlyingSoonSvg";

const WalkthroughStep3 = () => {
  const redemptionOptions: RedeemCardProps[] = [
    {
      icon: <TransferMiliesSvg />,
      title: "Transfer Miles",
      description: "25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",
      footer: "Best for Business & First Class",
    },
    {
      icon: <FlyAndClaimSvg />,
      title: "Fly and Claim",
      description:
        "Upload your flight ticket, and get reimbursed within 5 days.",
      footer: "Best for Economy",
    },
    {
      icon: <NotFlyingSoonSvg />,
      title: "Not flying soon",
      description: "You can always redeem Gift Cards with your Max Miles.",
      footer: "Best for Starters",
    },
  ];

  return (
    <View>
      <View className="flex-row items-center pr-4 pt-10">
        <View className="bg-accent h-[5%] w-[90%]" />
        <View className="bg-accent px-4 py-2 rounded-full shadow-2xl shadow-white">
          <Text className="text-primary font-interBold text-base">2</Text>
        </View>
      </View>
      <Text className="text-4xl text-primary font-interBold px-6 pt-8 pb-4 text-right">
        Redeem your trip
      </Text>
      <FlatList
        data={redemptionOptions}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <RedeemCard {...item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        bounces={false}
        className="p-4"
      />
    </View>
  );
};

export default memo(WalkthroughStep3);