import AmazonSgSvg from "@/svg/AmazonSgSvg";
import FaveSvg from "@/svg/FaveSvg";
import HaMSvg from "@/svg/HaMSvg";
import LazdaIconSvg from "@/svg/LazdaIconSvg";
import LazdaTextSvg from "@/svg/LazdaTextSvg";
import ShopeeSvg from "@/svg/ShopeeSvg";
import UniqloSvg from "@/svg/UniqloSvg";
import { memo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { cn } from "@package/ui/cn";

const ChooseBrandsPage = () => {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState<number | undefined>(1);
  const brands = ["Shop online", "Book travel", "Order food", "Buy groceries" ];

  return (
    <View>
      <View className="flex-row items-center pl-4 pt-10">
        <View className="bg-accent px-4 py-2 rounded-full shadow-2xl shadow-white">
          <Text className="text-primary font-interBold text-base">1</Text>
        </View>
        <View className="bg-accent h-[5%] w-[90%]" />
      </View>
      <Text className="text-4xl text-primary font-interBold px-6 pt-8 pb-4">
        Shop your favourite brands, earn miles
      </Text>

      <View className="h-[4%] pl-3">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {brands.map((brand, index) => (
            <Pressable
              key={brand}
              className={cn("bg-tile px-6 py-2 rounded-full mx-1 items-center justify-center", {
                "bg-accent": selectedBrandIndex === index,
              })}
              onPress={() => setSelectedBrandIndex(index)}
            >
              <Text className="text-primary font-interRegular text-base">
                {brand}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/** Brands bento-grid */}
      <View className="min-h-screen">
        <View className="flex-row pt-6 justify-evenly h-[30%] w-full">
          {/** 1st column */}
          <View className="w-[55%]">
            <View className="bg-shopee p-6 rounded-2xl h-[50%] items-center justify-center">
              <ShopeeSvg />
            </View>
            {/** 1st row */}
            <View className="flex-row gap-4 pt-4 items-center justify-evenly h-[45%]">
              <View className=" bg-handm p-6 rounded-2xl w-[45%] h-[98%] items-center justify-center">
                <HaMSvg />
              </View>
              <View className="bg-fave p-6 rounded-2xl w-[45%] h-[98%] items-center justify-center">
                <FaveSvg />
              </View>
            </View>
          </View>
          {/** 2nd column */}
          <View className="w-[33%] gap-4">
            <View className="flex-row gap-2 bg-lazada p-6 rounded-3xl h-[60%] items-center justify-center">
              <LazdaIconSvg />
              <LazdaTextSvg />
            </View>
            <View className="bg-uniqlo p-4 rounded-2xl items-center justify-center h-[29%]">
              <UniqloSvg />
            </View>
          </View>
        </View>
        <View className="flex-row w-full justify-evenly h-[13%]">
          <View className=" bg-amazonsg p-6 rounded-2xl w-[44%] items-center justify-center">
            <AmazonSgSvg />
          </View>
          <View className="bg-fairprice p-6 rounded-2xl w-[44%] items-center justify-center">
            <Image source={require("../../../assets/images/fairprice.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(ChooseBrandsPage);
