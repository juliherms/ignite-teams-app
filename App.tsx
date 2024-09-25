import { Groups } from "@/screens/groups"
import { Loading } from "@/components/Loading";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import  theme from './src/theme';
import { StatusBar } from "react-native"

export default function App() {

  //carrega as fontes - o carregamento de fontes eh assincono
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>    
  );
}