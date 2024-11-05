import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PostagensStackParam = {
    ListarPostagens: undefined;
    // FormPostagens?: {
    //     id: string;
    // };
    // DeletarPostagens: {
    //     id: string;
    // };
};

export type PostagensPropsStack = NativeStackNavigationProp<PostagensStackParam>