
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Login from './login';

export default function Index() {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  React.useEffect(() => {
    async function initialize() {
      if (fontsLoaded) {
        setIsReady(true);
      }
    }
    initialize();
  }, [fontsLoaded]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Login />;
}