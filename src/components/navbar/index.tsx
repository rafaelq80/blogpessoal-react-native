import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { HomePropsStack } from '../../types/HomeStackParam';

export default function NavBar() {

    const navigation = useNavigation<HomePropsStack>();

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
                    onPress={() => navigation.navigate('Home')}
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
