import  {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { LoadingScreen } from '@components/loadingScreen';
import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';
import React from 'react'
import { Home } from '@screens/home';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})
  
  return (
    <SafeAreaView>
      {
        fontsLoaded ? <Home /> : <LoadingScreen /> 
      }
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
    </SafeAreaView>
  )
}
