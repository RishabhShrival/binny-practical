import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
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
        <ThemedView style={styles.container}>
            <ThemedText style={styles.header}>Post Details</ThemedText>
            <ThemedView style={styles.card}>
                <ThemedText style={styles.label}>User ID:</ThemedText>
                <ThemedText style={styles.value}>{props.userId}</ThemedText>
                <ThemedText style={styles.label}>ID:</ThemedText>
                <ThemedText style={styles.value}>{props.id}</ThemedText>
                <ThemedText style={styles.label}>Title:</ThemedText>
                <ThemedText style={styles.title}>{props.title}</ThemedText>
                <ThemedText style={styles.label}>Body:</ThemedText>
                <ThemedText style={styles.body}>{props.body}</ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    card: {
        borderRadius: 12,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width: '100%',
        maxWidth: 400,
    },
    label: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 2,
        fontWeight: '600',
    },
    value: {
        fontSize: 16,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },
    body: {
        fontSize: 16,
        marginBottom: 8,
    },
});