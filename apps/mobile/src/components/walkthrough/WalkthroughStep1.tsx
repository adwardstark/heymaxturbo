import {  Text, useWindowDimensions, View } from "react-native";
import { memo } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import HeyMaxLogoSvg from "@/svg/HeyMaxLogoSvg";

const WalkthroughStep1 = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const player = useVideoPlayer(
    require("../../../assets/video/heymax-intro.mp4"),
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  return (
    <View className="flex-1 items-center justify-evenly">
      <View className="mt-[80px] mb-10">
        <HeyMaxLogoSvg />
      </View>

      {/** Nativewind styling does not work on VideoView, need to use native-styling */}
      <VideoView
        player={player}
        nativeControls={false}
        style={{
          width: SCREEN_WIDTH,
          height: 300,
          marginVertical: 20,
        }}
      />

      <View className="px-12 pb-[99px] pt-2 gap-2">
        <Text className="font-interBold text-4xl text-primary text-center">
          Shop your way to a
        </Text>
        <Text className="font-interBold text-4xl text-accent text-center">
          Dream Vacation
        </Text>
        <Text className="font-interRegular text-lg text-primary text-center pt-2 mb-[99px]">
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Text>
      </View>
    </View>
  );
};

export default memo(WalkthroughStep1);
