import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TemasStackParam } from "../types/TemasStackParam";
import ListarTemas from "../views/temas/listartemas";


const Stack = createNativeStackNavigator<TemasStackParam>();

export default function TemasStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="ListarTemas"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListarTemas" component={ListarTemas} />
            {/* <Stack.Screen name="FormTemas" component={} />
            <Stack.Screen name="DeletarTemas" component={} /> */}
        </Stack.Navigator>
    )
}
