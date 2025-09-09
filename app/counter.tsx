import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { ThemedText } from './components/ThemedText';
import { ThemedView } from './components/ThemedView';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedView style={{position:'absolute', right:0, top: 0,margin:20, width:100}}>
                <Button title="Reset" onPress={() => setCounter(0)} color={'#2081caff'}  />
            </ThemedView>
            <ThemedText style={{ fontSize: 200, lineHeight:200, padding:10 }}>{counter}</ThemedText>
            <ThemedView style={{flexDirection:'row', marginTop:20, justifyContent:'center', alignItems:'center'}}>
                {/* <ThemedView style={{ margin: 4, }}>
                    <Button title="+" onPress={() => setCounter(counter + 1)} color={'#23bb28ff'} />
                </ThemedView>
                <ThemedView style={{ margin: 4 }}>
                    <Button title="-" onPress={() => setCounter(counter - 1)} color={'#af2a21ff'} />
                </ThemedView> */}
                <TouchableOpacity onPress={() => setCounter(counter+1)} style={{backgroundColor:'#23bb28ff', marginRight:20, borderRadius:'50%', padding:20}}>
                    <AntDesign name="up" size={60} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCounter(counter-1)} style={{backgroundColor:'#af2a21ff', marginLeft:20, borderRadius:'50%', padding:20}}>
                    <AntDesign name="down" size={60} color="black" />
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>
    );
}
    