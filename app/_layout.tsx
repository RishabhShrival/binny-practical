import { createStaticNavigation, DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Login from './Auth/login';
import Counter from './counter/counter';
import Detail from './detail/detail';
import Display from './Display/display';


const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      options: {title: 'Welcome'},
    },
    Display: {
      screen: Display,
    },
    Detail: {
      screen: Detail,
    },
    Counter: {
      screen: Counter,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = {
  Login: undefined;
  Detail: undefined;
  Counter: undefined;
  Display: undefined;
};

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
      <Navigation />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
