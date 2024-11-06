import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabParam } from "./TabParam";

export type LoginStackParam = {
    Main: NavigatorScreenParams<TabParam>;
    Login: undefined;
    Cadastro: undefined;
};

export type LoginPropsStack = NativeStackNavigationProp<LoginStackParam>