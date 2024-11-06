import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginStackParam } from "../types/LoginStackParam";
import TabRoutes from "./TabRoutes";
import Login from "../views/login";
import Cadastro from "../views/cadastro";


const Stack = createNativeStackNavigator<LoginStackParam>();

export default function LoginStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main" component={TabRoutes} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}
