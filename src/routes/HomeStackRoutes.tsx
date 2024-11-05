import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParam } from "../types/HomeStackParam";
import TabRoutes from "./TabRoutes";
import Home from "../views/home";


const Stack = createNativeStackNavigator<HomeStackParam>();

export default function HomeStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Main" component={TabRoutes} />
        </Stack.Navigator>
    )
}
