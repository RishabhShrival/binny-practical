import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, useColorScheme } from 'react-native';
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
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.header}>Post Details</ThemedText>
            <ThemedView style={[styles.card, { backgroundColor: useColorScheme() === 'dark' ? 'black' : 'white' }]}>
                <ThemedView style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'transparent'}}>
                    <ThemedText style={styles.Id}>User ID: {props.userId}</ThemedText>
                    {/* <ThemedText style={styles.value}>{props.userId}</ThemedText> */}
                    <ThemedText style={styles.UserId}>ID: {props.id}</ThemedText>
                    {/* <ThemedText style={styles.value}>{props.id}</ThemedText> */}
                </ThemedView>
                <ThemedText style={styles.title}>{props.title}</ThemedText>
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
        backgroundColor: '#807d7d86',
        padding: 8,
        paddingHorizontal:12,
        borderRadius: 8,
        borderWidth: 1
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
    Id:{
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '600',
    },
    UserId:{
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '600',
    },
    label: {
        fontSize: 18,
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
        fontSize: 14,
        marginBottom: 8,
    },
});