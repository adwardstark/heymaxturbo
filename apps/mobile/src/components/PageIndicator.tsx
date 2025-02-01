import React, { memo } from "react";
import { View } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type PageIndicatorCompProps = {
  index: number;
  x: SharedValue<number>;
  screenWidth: number;
};

const PageIndicatorComp = ({
  index,
  x,
  screenWidth,
}: PageIndicatorCompProps) => {
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [7, 25, 7],
      Extrapolation.CLAMP
    );

    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  return (
    <Animated.View
      className="bg-primary h-2 mx-1 rounded-full"
      style={[animatedDotStyle]}
    />
  );
};

type PageIndicatorProps = {
  itemCount: number;
  x: SharedValue<number>;
  screenWidth: number;
};

const PageIndicator = ({ itemCount, screenWidth, x }: PageIndicatorProps) => {
  return (
    <View className="flex-row items-center justify-center">
      {Array.from({ length: itemCount }).map((_, index) => (
        <PageIndicatorComp
          key={index}
          index={index}
          x={x}
          screenWidth={screenWidth}
        />
      ))}
    </View>
  );
};

export default memo(PageIndicator);
