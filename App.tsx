import { SafeAreaView, StatusBar } from 'react-native'
import './global.css'
import Routes from './src/routes'
import { AuthProvider } from './src/contexts/AuthContext'
import { Toaster } from 'sonner-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<SafeAreaView className="flex-1">
					<AuthProvider>
						<Routes />
            <Toaster richColors  />
						<StatusBar />
					</AuthProvider>
				</SafeAreaView>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	)
}
