import { Groups } from "@/screens/groups"
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import  theme from './src/theme';

export default function App() {

  //carrega as fontes - o carregamento de fontes eh assincono
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <ActivityIndicator /> }
    </ThemeProvider>    
  );
}