import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import LoginStackRoutes from "./LoginStackRoutes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <LoginStackRoutes />
        </NavigationContainer>
    )
}