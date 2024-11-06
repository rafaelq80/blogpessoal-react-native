import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import { LoginPropsStack } from '../../types/LoginStackParam';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

export default function NavBar() {

    const navigation = useNavigation<LoginPropsStack>();

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O usuário foi desconectado com sucesso!', 'info')
        navigation.navigate('Login')
    }

    return (
        <View className='w-full h-1/6 flex flex-col items-center justify-center bg-indigo-900'>

            <View className='w-fit h-4/6 flex flex-row items-center justify-between gap-x-6'>
               
                <Image
                    source={{
                        uri: 'https://ik.imagekit.io/vzr6ryejm/blog.png?updatedAt=1730838761033',
                    }}
                    className="w-16 h-16"
                />

                <Text className='text-white text-3xl font-bold'>
                    Blog Pessoal
                </Text>

                <Pressable
                    onPress={() => logout()}
                    className='flex justify-center'
                >
                    <AntDesign
                        name='logout'
                        size={32}
                        color={'#eab308'}
                    />
                </Pressable>

            </View>

        </View>
    )
}
