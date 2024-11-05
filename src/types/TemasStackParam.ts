import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TemasStackParam = {
    ListarTemas: undefined;
    // FormTemas?: {
    //     id: string;
    // };
    // DeletarTemas: {
    //     id: string;
    // };
};

export type TemasPropsStack = NativeStackNavigationProp<TemasStackParam>