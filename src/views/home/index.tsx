import { Link, useNavigation } from '@react-navigation/native'
import { Image, Linking, Pressable, Text, View } from 'react-native'
import { HomePropsStack } from '../../types/HomeStackParam'
import { AntDesign } from '@expo/vector-icons'

export default function Home() {
	const navigation = useNavigation<HomePropsStack>()

	return (
		<View className="flex-1 flex-col items-center justify-center bg-indigo-100 w-full h-full py-2">
			<Image
				source={{
					uri: 'https://ik.imagekit.io/vzr6ryejm/blog.png?updatedAt=1730838761033',
				}}
				className="w-40 h-40 mt-40 mb-3"
			/>

			<Text className="text-indigo-900 text-3xl font-bold">
				Blog Pessoal App
			</Text>

			<Text className="text-indigo-900 text-xl font-bold">
				Expresse aqui os seus pensamentos!
			</Text>

			<View className="flex flex-col items-center justify-center w-full mt-4 py-3">
				<Pressable
					onPress={() =>
						navigation.navigate('Main', {
							screen: 'Postagens',
						})
					}
					className="w-2/3 my-3 rounded-2xl bg-indigo-900 text-white text-xl text-center font-bold"
				>
					<Text className="text-white text-xl text-center font-bold py-2">
						Entrar
					</Text>
				</Pressable>
			</View>

			<View className="flex-1 justify-end mb-3">
				<Text className="text-indigo-950 text-base font-bold text-center">
					{' '}
					Desenvolvido por Rafael Queiróz
				</Text>
				<Text className="text-indigo-950 text-base font-bold text-center">
					{' '}
					Copyright: 2024
				</Text>
				<View className="flex flex-row gap-4 justify-center py-2">
					<AntDesign
						name="facebook-square"
						size={28}
						color={'#312e81'}
						onPress={() => Linking.openURL('')}
					/>
					<AntDesign
						name="linkedin-square"
						size={28}
						color={'#312e81'}
						onPress={() => Linking.openURL('')}
					/>
					<AntDesign
						name="instagram"
						size={28}
						color={'#312e81'}
						onPress={() => Linking.openURL('')}
					/>
				</View>
			</View>
		</View>
	)
}
