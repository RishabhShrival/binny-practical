import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';


type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export default function Display() {
  const navigation = useRouter();
    const [posts, setPosts] = React.useState<Post[]>([]);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(setPosts);
    }, []);


    const renderItem = ({ item }: { item: Post }) => (
        <Pressable style={styles.card} 
        onPress={() => navigation.navigate({pathname:'./detail', params: { userId: item.userId, id: item.id, title: item.title, body: item.body } })}
        >
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2}>{item.body}</Text>
        </Pressable>
    );

  return (
    <View style={{flex:1}}>
      <View style={styles.header}><Text style={styles.headerText}>Posts</Text></View>
      <GestureHandlerRootView style={{flex:1}}>
      <FlatList
        data={posts}
        keyExtractor={i=>String(i.id)}
        renderItem={renderItem}
        contentContainerStyle={{padding:12}}
        ListFooterComponent={<View style={styles.footer}><Text>End of List</Text></View>}
      />
      </GestureHandlerRootView>
      <StatusBar style="auto" />
      <Button title="Go to Counter" onPress={() => navigation.navigate('./counter')} />
    </View>
  );
}
const styles = StyleSheet.create({
  header:{ padding:16, alignItems:'center', borderBottomWidth:1, borderColor:'#eee' },
  headerText:{ fontSize:18, fontWeight:'600' },
  card:{ padding:12, borderWidth:1, borderColor:'#e5e5e5', borderRadius:10, marginBottom:10 },
  title:{ fontWeight:'700', marginBottom:6 },
  footer:{ padding:16, alignItems:'center' }
});