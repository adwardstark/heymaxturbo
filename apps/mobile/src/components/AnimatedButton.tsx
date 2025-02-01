import React, { RefObject } from "react";
import { FlatList } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import ArrowRightSvg from "@/svg/ArrowRightSvg";
import * as WebBrowser from "expo-web-browser";
import { MobileButton as Button } from "@package/ui/button";

const AnimatedPressable = Animated.createAnimatedComponent(Button);

type ButtonProps = {
  flatListRef: RefObject<FlatList>;
  flatListIndex: SharedValue<number>;
  dataLength: number;
};

export function AnimatedButton({
  dataLength,
  flatListIndex,
  flatListRef,
}: ButtonProps) {
  const buttonAnimationStyle = useAnimatedStyle(() => {
    const isFirstScreen = flatListIndex.value === 0;
    const isLastScreen = flatListIndex.value === dataLength - 1;

    if (isFirstScreen) {
      return {
        width: withSpring(200),
        height: 55,
      };
    }

    return {
      width: isLastScreen ? withSpring(160) : withSpring(60),
      height: 55,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    const isNotFirstOrLastScreen =
      flatListIndex.value !== 0 && flatListIndex.value !== dataLength - 1;
    return {
      opacity: isNotFirstOrLastScreen ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX: isNotFirstOrLastScreen ? withTiming(0) : withTiming(100),
        },
      ],
    };
  });

  const firstTextAnimationStyle = useAnimatedStyle(() => {
    const isFirstScreen = flatListIndex.value === 0;
    return {
      opacity: isFirstScreen ? withTiming(1) : withTiming(0),
      transform: [
        { translateX: isFirstScreen ? withTiming(0) : withTiming(-100) },
      ],
    };
  });

  const lastTextAnimationStyle = useAnimatedStyle(() => {
    const isLastScreen = flatListIndex.value === dataLength - 1;
    return {
      opacity: isLastScreen ? withTiming(1) : withTiming(0),
      transform: [
        { translateX: isLastScreen ? withTiming(0) : withTiming(-100) },
      ],
    };
  });

  const handleNextScreen = () => {
    const isLastScreen = flatListIndex.value === dataLength - 1;
    if (!isLastScreen) {
      return flatListRef.current?.scrollToIndex({
        index: flatListIndex.value + 1,
      });
    }
    WebBrowser.openBrowserAsync("https://heymax.ai");
  };

  return (
    <AnimatedPressable onPress={handleNextScreen} style={buttonAnimationStyle}>
      <Animated.View
        className="flex-row items-center justify-center gap-2"
        style={firstTextAnimationStyle}
      >
        <Animated.Text className="text-primary font-interBold text-lg pl-4">
          See how it works
        </Animated.Text>

        <ArrowRightSvg />
      </Animated.View>

      <Animated.Text
        className="text-primary absolute font-interBold text-lg"
        style={lastTextAnimationStyle}
      >
        Get Started
      </Animated.Text>

      <Animated.View className="absolute" style={arrowAnimationStyle}>
        <ArrowRightSvg />
      </Animated.View>
    </AnimatedPressable>
  );
}
