import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { RootStackParamList } from '../_layout';

export default function Detail() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Detail Screen</ThemedText>
      <Button onPress={() => navigation.navigate('Counter')}
        title="Go to Counter"
      />
    </View>
  );
}