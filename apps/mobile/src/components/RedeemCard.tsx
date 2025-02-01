import { Text, View } from "react-native";
import React, { memo, ReactElement } from "react";

export type RedeemCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
  footer: string;
};

const RedeemCard = ({
  icon,
  title,
  description,
  footer,
}: RedeemCardProps) => {
  return (
    <View className="flex-row bg-tile my-2 px-4 py-4 rounded-2xl items-center">
      {icon}
      <View className="ml-4 gap-1">
        <Text className="text-primary font-interBold text-xl">{title}</Text>
        <Text className="text-secondary font-interRegular text-lg text-wrap mr-14">
          {description}
        </Text>
        <Text className="text-accent font-interRegular text-lg">{footer}</Text>
      </View>
    </View>
  );
};

export default memo(RedeemCard);
