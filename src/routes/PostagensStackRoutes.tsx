import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostagensStackParam } from "../types/PostagensStackParam";
import ListarPostagens from "../views/postagens/listarpostagens";


const Stack = createNativeStackNavigator<PostagensStackParam>();

export default function PostagensStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="ListarPostagens"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListarPostagens" component={ListarPostagens} />
            {/* <Stack.Screen name="FormPostagens" component={} />
            <Stack.Screen name="DeletarPostagens" component={} /> */}
        </Stack.Navigator>
    )
}
