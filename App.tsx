import { SafeAreaView, StatusBar } from "react-native";
import "./global.css";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <Routes />
      <StatusBar />
    </SafeAreaView>
  );
}

