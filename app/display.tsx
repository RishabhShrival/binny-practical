import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';

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
      return (
      <ThemedView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </ThemedView>
      );
    }

  return (
    <ThemedView style={{flex:1}}>
      <SafeAreaView>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.headerText}>Posts</ThemedText>
          <TouchableOpacity style={styles.logout}>
            <MaterialIcons name="logout" size={24} color="white" onPress={() => { navigation.replace('/'); setLoading(true); }} />
          </TouchableOpacity>
        </ThemedView>
        
      </SafeAreaView>
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
      {/* <Button title="Go to Counter" onPress={() => navigation.navigate('./counter')} /> */}
      <TouchableOpacity style={styles.counter}>
        <MaterialIcons name="access-alarm" size={42} color="white" on onPress={()=>navigation.navigate('./counter')} />
      </TouchableOpacity>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  header:{ padding:16, flexDirection:'row', alignItems:'center',justifyContent:'space-between', borderBottomWidth:1, borderColor:'#eee' },
  headerText:{ fontSize:18, fontWeight:'600' },
  card:{ padding:12, borderWidth:1, borderColor:'#bfbdbdb2',shadowColor:'#000000ff', borderRadius:10, marginBottom:10 },
  title:{ fontWeight:'700', marginBottom:6 },
  footer:{ padding:16, alignItems:'center' },
  logout:{ borderRadius:'45%', backgroundColor:'#565252ff', padding:10, paddingRight:8, zIndex:1},
  counter:{ position:'absolute', bottom:20, right:20, borderRadius:45, backgroundColor:'#565252a5', padding:12, zIndex:1 }
});