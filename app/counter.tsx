import { useState } from 'react';
import { Button } from 'react-native';
import { ThemedText } from './components/ThemedText';
import { ThemedView } from './components/ThemedView';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText type='title'>Counter Screen</ThemedText>
            <ThemedText type='subtitle'>Count: {counter}</ThemedText>
            <>
                <ThemedView style={{ margin: 4 }}>
                    <Button title="Increment" onPress={() => setCounter(counter + 1)} color={'#23bb28ff'} />
                </ThemedView>
                <ThemedView style={{ margin: 4 }}>
                    <Button title="Decrement" onPress={() => setCounter(counter - 1)} color={'#af2a21ff'} />
                </ThemedView>
            </>
        </ThemedView>
    );
}
    