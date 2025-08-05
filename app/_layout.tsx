import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import '../styles/global.css';

import {useColorScheme} from '@/hooks/useColorScheme';
import AuthContextProvider from "@/hooks/auth-context";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AuthContextProvider>
                <Stack>
                    <Stack.Screen name="login" options={{headerShown: false}}/>
                    <Stack.Screen name="(protected)" options={{headerShown: false}}/>
                </Stack>
            </AuthContextProvider>
            <StatusBar style="light"/>
        </ThemeProvider>
    );
}
