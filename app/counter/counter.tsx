import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button } from 'react-native';
import { RootStackParamList } from '../_layout';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <ThemedView>
        <ThemedText type='title'>Counter Screen</ThemedText>
        <ThemedText type='subtitle'>Count: {counter}</ThemedText>
        <>
            <Button title="Increment" onPress={() => setCounter(counter + 1)} />
            <Button title="Decrement" onPress={() => setCounter(counter - 1)} />
        </>
        </ThemedView>
  );
}
    