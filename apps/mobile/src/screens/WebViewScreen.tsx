import { Text, TouchableOpacity, View } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import WebView from 'react-native-webview';
import Ionicons from "@expo/vector-icons/Ionicons";

import { RouteProp } from '@react-navigation/native';

type WebViewScreenRouteProp = RouteProp<{ params: { url: string } }, 'params'>;

const WebViewScreen = ({ route }: { route: WebViewScreenRouteProp }) => {
  const navigation = useNavigation();
  const { url } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-mobile-background">
      {/* Custom App Bar */}
      <View className="flex-row bg-background p-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-primary font-interSemiBold text-xl ml-6">HeyMax.ai</Text>
      </View>

      {/* WebView */}
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;