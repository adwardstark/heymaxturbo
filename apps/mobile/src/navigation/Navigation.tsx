import HomeScreen from "@/screens/HomeScreen";
import WebViewScreen from "@/screens/WebViewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="WebViewScreen" component={WebViewScreen}/>
        </Stack.Navigator>
    )
}

export default RootStack;