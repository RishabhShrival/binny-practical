import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Button, Pressable, StyleSheet } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemedText } from './components/ThemedText';
import { ThemedView } from './components/ThemedView';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export default function Display() {
    const navigation = useRouter();
    const [loading, setLoading] = React.useState(true);
    const [posts, setPosts] = React.useState<Post[]>([]);
    React.useEffect(() => {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(setPosts)
          .finally(() => setLoading(false));
    }, []);


    const renderItem = ({ item }: { item: Post }) => (
        <Pressable style={styles.card} 
        onPress={() => navigation.navigate({pathname:'./detail', params: { userId: item.userId, id: item.id, title: item.title, body: item.body } })}
        >
        <ThemedText style={styles.title}>{item.title}</ThemedText>
        <ThemedText numberOfLines={2}>{item.body}</ThemedText>
        </Pressable>
    );

    if(loading){
      return <ActivityIndicator/>;
    }

  return (
    <ThemedView style={{flex:1}}>
      <ThemedView style={styles.header}><ThemedText style={styles.headerText}>Posts</ThemedText></ThemedView>
      <ThemedView style={styles.logout}>
        <Button title="Logout" onPress={() => navigation.replace('./login')} color='red'/>
      </ThemedView>
      <GestureHandlerRootView style={{flex:1}}>
      <FlatList
        data={posts}
        keyExtractor={i=>String(i.id)}
        renderItem={renderItem}
        contentContainerStyle={{padding:12}}
        ListFooterComponent={<ThemedView style={styles.footer}><ThemedText>End of List</ThemedText></ThemedView>}
      />
      </GestureHandlerRootView>
      <StatusBar style="auto" />
      <Button title="Go to Counter" onPress={() => navigation.navigate('./counter')} />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  header:{ padding:16, alignItems:'center', borderBottomWidth:1, borderColor:'#eee' },
  headerText:{ fontSize:18, fontWeight:'600' },
  card:{ padding:12, borderWidth:1, borderColor:'#e5e5e5', borderRadius:10, marginBottom:10 },
  title:{ fontWeight:'700', marginBottom:6 },
  footer:{ padding:16, alignItems:'center' },
  logout:{ position:'absolute', top:0, right:0, zIndex:1, margin:16 }
});