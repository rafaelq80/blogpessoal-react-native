import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
	NativeSyntheticEvent,
	Pressable,
	Text,
	TextInput,
	TextInputChangeEventData,
	View,
  Image,
} from 'react-native'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { LoginPropsStack } from '../../types/LoginStackParam'

export default function Cadastro() {
	const navigation = useNavigation<LoginPropsStack>()

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [confirmaSenha, setConfirmaSenha] = useState<string>('')

	const [usuario, setUsuario] = useState<Usuario>({
		id: 0,
		nome: '',
		usuario: '',
		foto: '',
		senha: '',
	})

	function atualizarEstado(
		e: NativeSyntheticEvent<TextInputChangeEventData>,
		name: string
	) {
		setUsuario({
			...usuario,
			[name]: e.nativeEvent.text,
		})
	}

	async function cadastrar() {
		setIsLoading(true)

		await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)

		setUsuario({
			id: 0,
			nome: '',
			usuario: '',
			foto: '',
			senha: '',
		})
	}

	return (
		<>
			<View className="w-full h-1/6 flex flex-col items-center justify-center bg-indigo-900">
				<View className="w-fit h-4/6 flex flex-row items-center justify-between gap-x-6">
					<Image
						source={{
							uri: 'https://ik.imagekit.io/vzr6ryejm/blog.png?updatedAt=1730838761033',
						}}
						className="w-16 h-16"
					/>

					<Text className="text-white text-3xl font-bold">
						Blog Pessoal
					</Text>
				</View>
			</View>

			<View className="flex-1 flex-col items-center justify-evenly bg-indigo-100 w-full h-full py-2">
				<View className="flex flex-col items-center justify-center w-full my-2 gap-2">
					<TextInput
						className="w-9/12 my-3 px-4 py-2 rounded-3xl border-1 border-transparent
           text-xl text-black bg-white"
						placeholder="Nome"
						value={usuario.nome}
						onChange={(e) => atualizarEstado(e, 'nome')}
					/>

					<TextInput
						className="w-9/12 my-3 px-4 py-2 rounded-3xl border-1 border-transparent
           text-xl text-black bg-white"
						placeholder="Usuário (e-mail)"
						autoCapitalize="none"
						keyboardType="email-address"
						value={usuario.usuario}
						onChange={(e) => atualizarEstado(e, 'usuario')}
					/>

					<TextInput
						className="w-9/12 my-3 px-4 py-2 rounded-3xl border-1 border-transparent
           text-xl text-black bg-white"
						placeholder="Foto"
						value={usuario.foto}
						onChange={(e) => atualizarEstado(e, 'foto')}
					/>

					<TextInput
						className="w-9/12 my-3 px-4 py-2 rounded-3xl border-1 border-transparent
							text-xl text-black bg-white pr-12"
						placeholder="Senha"
						secureTextEntry={true}
						value={usuario.senha}
						onChange={(e) => atualizarEstado(e, 'senha')}
					/>

					<TextInput
						className="w-9/12 my-3 px-4 py-2 rounded-3xl border-1 border-transparent
							text-xl text-black bg-white pr-12"
						placeholder="Confirma Senha"
						secureTextEntry={true}
						value={confirmaSenha}
						onChange={(e) => setConfirmaSenha(confirmaSenha)}
					/>

					<Pressable
						onPress={cadastrar}
						disabled={isLoading}
						className="w-2/3 my-3 rounded-2xl bg-indigo-900 text-white text-xl text-center font-bold"
					>
						<Text className="text-white text-xl text-center font-bold py-2">
							{isLoading ? 'Enviando...' : 'Cadastrar'}
						</Text>
					</Pressable>

					<Pressable
						onPress={() => navigation.goBack()}
						className="w-2/3 my-3 rounded-2xl bg-red-700 text-white text-xl text-center font-bold"
					>
						<Text className="text-white text-xl text-center font-bold py-2">
							Cancelar
						</Text>
					</Pressable>

				</View>
			</View>
		</>
	)
}
