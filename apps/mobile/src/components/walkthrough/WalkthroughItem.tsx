import { memo } from "react";
import { useWindowDimensions, View } from "react-native";

export type WalkthroughItemType = {
  id: number;
  component: React.ReactNode;
};

const WalkthroughItem = ({ id, component }: WalkthroughItemType) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <View
      key={id}
      style={{ width: SCREEN_WIDTH }}
      className="flex-1 justify-around items-center"
    >
      {component}
    </View>
  );
};

export default memo(WalkthroughItem);
