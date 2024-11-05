import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Perfil from '../views/perfil'
import { TabParam } from '../types/TabParam'
import TemasStackRoutes from './TemasStackRoutes'
import PostagensStackRoutes from './PostagensStackRoutes'
import NavBar from '../components/navbar'
import { AntDesign } from '@expo/vector-icons'

const Tab = createBottomTabNavigator<TabParam>()

export default function TabRoutes() {
	return (
		<>
			<NavBar />
			<Tab.Navigator
				initialRouteName="Postagens"
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: '#312e81',
						borderTopColor: 'transparent',
						height: 64,
					},
					tabBarLabelStyle: {
						fontSize: 16,
						paddingBottom: 4,
						fontWeight: '500',
					},
					tabBarInactiveTintColor: '#a5b4fc',
					tabBarActiveTintColor: '#ffffff',
				}}
			>
				<Tab.Screen
					name="Postagens"
					component={PostagensStackRoutes}
					options={{
						headerShadowVisible: false,
						tabBarIcon: ({ focused }) => (
							<AntDesign
								name="message1"
								size={24}
								color={focused ? '#ffffff' : '#a5b4fc'}
								filter="brightness(1)"
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Temas"
					component={TemasStackRoutes}
					options={{
						tabBarIcon: ({ focused }) => (
							<AntDesign
								name="star"
								size={24}
								color={focused ? '#ffffff' : '#a5b4fc'}
								filter="brightness(1)"
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Perfil"
					component={Perfil}
					options={{
						tabBarIcon: ({ focused }) => (
							<AntDesign
								name="user"
								size={24}
								color={focused ? '#ffffff' : '#a5b4fc'}
								filter="brightness(1)"
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	)
}
