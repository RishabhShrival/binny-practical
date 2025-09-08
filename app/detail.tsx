import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from './components/ThemedText';
import { ThemedView } from './components/ThemedView';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export default function Detail() {
    const props = useLocalSearchParams();
    console.log(props);
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>Detail Screen</ThemedText>
            <ThemedText>User ID: {props.userId}</ThemedText>
            <ThemedText>ID: {props.id}</ThemedText>
            <ThemedText>Title: {props.title}</ThemedText>
            <ThemedText>Body: {props.body}</ThemedText>
        </ThemedView>
    );
}