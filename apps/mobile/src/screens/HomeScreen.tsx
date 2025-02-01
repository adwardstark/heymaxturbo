import { FlatList, StyleSheet, Text, useWindowDimensions, View, ViewToken } from 'react-native'
import React, { memo } from 'react'
import WalkthroughItem, { WalkthroughItemType } from '@/components/walkthrough/WalkthroughItem';
import Animated, { useAnimatedRef, useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import WalkthroughStep1 from '@/components/walkthrough/WalkthroughStep1';
import WalkthroughStep2 from '@/components/walkthrough/WalkthroughStep2';
import WalkthroughStep3 from '@/components/walkthrough/WalkthroughStep3';

const HomeScreen = () => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const flatListRef = useAnimatedRef<FlatList>();

    const flatListIndex = useSharedValue(0);
    const x = useSharedValue(0);

    const walkthroughSteps: WalkthroughItemType[] = [
      { id: 1, component: <WalkthroughStep1 /> },
      { id: 2, component: <WalkthroughStep2 /> },
      { id: 3, component: <WalkthroughStep3 /> },
    ];

    const onViewableItemsChanged = ({
      viewableItems,
    }: {
      viewableItems: Array<ViewToken>;
    }) => {
      flatListIndex.value = viewableItems[0]?.index ?? 0;
    };

    const onScroll = useAnimatedScrollHandler({
      onScroll: (event) => {
        x.value = event.contentOffset.x;
      },
    });
  return (
    <View>
      <Animated.FlatList
        ref={flatListRef as any}
        data={walkthroughSteps}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <WalkthroughItem {...item} />}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </View>
  );
}

export default memo(HomeScreen);
